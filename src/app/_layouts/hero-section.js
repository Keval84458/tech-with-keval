"use client";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <>
      <Box
        bgImage="/assets/background/site-bg.jpg"
        bgSize="cover"
        bgRepeat="no-repeat"
        w="100%"
        overflowY="hidden"
      >
        <Box
          my={{ base: "10rem", md: 0 }}
          py={{ md: "5rem" }}
          transition="all .5s ease"
        >
          <Text
            color="white.100"
            fontSize={{ base: "300", md: "650" }}
            fontWeight="bold"
            textAlign="center"
            bgGradient="linear-gradient(180deg, rgba(2,0,36,1) 0%, rgb(120, 225, 246) 9%, rgb(255, 255, 255) 100%)"
            bgClip="text"
          >
            Tech with Keval
          </Text>

          <Text
            color="white.100"
            textAlign="center"
            fontSize={{ base: "175", md: "300" }}
            fontFamily="heading"
            fontWeight="bold"
          >
            Learn about
          </Text>
          <Text
            as={"span"}
            textAlign="center"
            fontSize={{ base: "100", md: "150" }}
            color="primary.300"
            fontWeight="bold"
          >
            <Typewriter
              options={{
                strings: [
                  "React Js",
                  "Next Js",
                  "Chakra UI",
                  "Pocketbase",
                  "Strapi",
                ],
                loop: true,
                autoStart: true,
                cursor: "_",
              }}
            />
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
