import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Icon } from ".";

const NotFound = () => {
  return (
    <Box>
      <Image
        src="/assets/vectore/NotFound.png"
        alt="Construction-Image"
        width="600px"
        height={{ base: "350px", md: "450px" }}
        mx="auto"
      />
      <Box display="flex" justifyContent="center">
        <Button size="md" px="2rem" bg="yellow.not">
          <Icon name="FaArrowLeft" type="fa" size="1rem" mx=".5rem" />
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
