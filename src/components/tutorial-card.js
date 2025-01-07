"use client";
import React from "react";
import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";

const TutorialCard = ({ tutorial }) => {
  const formatCreatedDate = (created) => {
    const date = new Date(created);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <Card
        _hover={{ boxShadow: "2xl", transition: "all .7s ease" }}
        // height="18rem"
      >
        <CardBody>
          <Image
            src={tutorial.Tutorial_Image}
            alt="Tutorial Images"
            rounded="lg"
            width="70%"
            m="auto"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{tutorial.Title}</Heading>
            <Text fontSize="75">{formatCreatedDate(tutorial.created)}</Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default TutorialCard;
