"use client";
import React from "react";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const SearchCard = ({ blogs }) => {
  return (
    <>
      <Card
        maxW="sm"
        border="2px"
        borderColor="white.100"
        transition="all .7s ease"
        _hover={{
          boxShadow: "2xl",
          border: "2px",
          borderColor: "primary.20",
        }}
      >
        <CardBody>
          <Image
            src={`http://127.0.0.1:8090/api/files/pbc_4271659935/${blogs.id}/${blogs.Blogs_img}`}
            alt="Green double couch with wooden legs"
            height="149.92px"
            width="224.88px"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{blogs.Point_Name}</Heading>
            <Button
              as={Link}
              href={PAGE_PATH_KEYS.DETAILS_TUTORIAL + `?Id=${blogs.id}`}
              bg="primary.100"
              _hover={{ bg: "primary.600" }}
              _disabled={{ bg: "primary.100" }}
            >
              View Details
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default SearchCard;
