"use client";
import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Icon } from ".";

const NotLogin = () => {
  return (
    <Box>
      <Image
        src="/assets/vectore/NotLogin.png"
        alt="Construction-Image"
        width="500px"
        height={{ base: "400px", md: "450px" }}
        mx="auto"
      />
      <Text
        textAlign="center"
        fontSize="200"
        fontWeight="bold"
        fontFamily="heading"
      >
        You are not Logged In
      </Text>
    </Box>
  );
};

export default NotLogin;
