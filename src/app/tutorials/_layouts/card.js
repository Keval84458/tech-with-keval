"use client";
import React from "react";
import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import Link from "next/link";
import { PAGE_PATH_KEYS } from "@/utils/constant";

const TutorialCard = ({ tutorial }) => {
  const formatCreatedDate = (created) => {
    const date = new Date(created);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <Link href={PAGE_PATH_KEYS.SEARCH_TUTORIAL + `?Id=${tutorial.id}`}>
        <Card
          _hover={{
            boxShadow: "2xl",
            border: "1px",
            borderColor: "primary.100",
          }}
          // height="18rem"
        >
          <CardBody>
            <Image
              // src={`http://127.0.0.1:8090/api/files/pbc_616864275/${tutorial.id}/${tutorial.Tutorial}`}
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
      </Link>
    </>
  );
};

export default TutorialCard;
