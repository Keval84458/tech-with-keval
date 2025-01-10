"use client";
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Details from "./details";

const About = () => {
  return (
    <Box display={{ md: "flex" }}>
      <Box w={{ md: "40%" }} rounded="full">
        <Image
          src="/assets/about/About.JPG"
          alt="About Image"
          w="380px"
          h="500px"
          roundedTopRight="7rem"
          roundedBottomLeft="7rem"
          _hover={{
            roundedTopRight: "0",
            roundedBottomLeft: "0",
            roundedTopLeft: "7rem",
            roundedBottomRight: "7rem",
            transition: "all .7s ease",
          }}
          mx="auto"
        />
      </Box>
      <Box
        w={{ md: "60%" }}
        _hover={{ boxShadow: "2xl", transition: "all .7s ease" }}
        px={3}
        mt={{ base: 4, md: 0 }}
      >
        <Details />
      </Box>
    </Box>
  );
};

export default About;
