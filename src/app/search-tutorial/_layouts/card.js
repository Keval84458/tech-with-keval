"use client";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const SearchCard = ({ blogs }) => {
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
          <Heading size="md">{blogs.Point_Name}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{blogs.Summury}</Text>
        </CardBody>
        <CardFooter>
          <Button
            as={Link}
            href={PAGE_PATH_KEYS.DETAILS_TUTORIAL + `?Id=${blogs.id}`}
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
