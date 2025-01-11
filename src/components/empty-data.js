"use client";
import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const EmptyData = () => {
  return (
    <Box>
      <Image
        src="/assets/vectore/noData.png"
        alt="Construction-Image"
        width="500px"
        height={{ base: "400px", md: "370px" }}
        mx="auto"
      />
      <Text
        textAlign="center"
        fontSize="200"
        fontWeight="bold"
        fontFamily="heading"
      >
        NO DATA FOUND
      </Text>
    </Box>
  );
};

export default EmptyData;
