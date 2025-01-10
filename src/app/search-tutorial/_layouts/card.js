"use client";
import NotLogin from "@/components/not-login";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SearchCard = () => {
  return (
    <>
      <Card
        border="2px"
        borderColor="white.100"
        _hover={{
          boxShadow: "2xl",
          border: "2px",
          borderColor: "primary.20",
          transition: "all .7s ease",
        }}
      >
        <CardHeader>
          <Heading size="md"> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button
            bg="primary.100"
            _hover={{ bg: "primary.100" }}
            _disabled={{ bg: "primary.100" }}
            color="white.100"
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default SearchCard;
