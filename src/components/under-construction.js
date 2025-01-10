"use client";
import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
const UnderConstruction = () => {
  return (
    <Box>
      <Image
        src="/assets/vectore/Construction.png"
        alt="Construction-Image"
        width="700px"
        height={{ base: "400px", md: "450px" }}
        mx="auto"
      />
      <Text
        textAlign="center"
        fontSize="200"
        fontWeight="bold"
        fontFamily="heading"
      >
        Under Construction
      </Text>
    </Box>
  );
};

export default UnderConstruction;
