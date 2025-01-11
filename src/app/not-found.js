"use client";
import React from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { Icon } from "@/components";
import Link from "next/link";
import { PAGE_PATH_KEYS } from "@/utils/constant";

const NotFound = () => {
  return (
    <Box mt="5rem">
      <Image
        src="/assets/vectore/NotFound.png"
        alt="Construction-Image"
        width="600px"
        height={{ base: "350px", md: "450px" }}
        mx="auto"
      />
      <Box display="flex" justifyContent="center">
        <Button
          as={Link}
          href={PAGE_PATH_KEYS.HOME}
          size="md"
          px="2rem"
          bg="yellow.not"
          _hover={{ bg: "yellow.not" }}
          _disabled={{ bg: "yellow.not" }}
        >
          <Icon name="FaArrowLeft" type="fa" size="1rem" mx=".5rem" />
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
