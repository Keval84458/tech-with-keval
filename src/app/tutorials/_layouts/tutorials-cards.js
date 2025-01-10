"use client";
import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import TutorialCard from "./card";
const TutorialCards = ({ tutorials }) => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
        {tutorials.items.map((tutorial) => {
          return (
            <Box p="1rem" key={tutorial.id}>
              <TutorialCard tutorial={tutorial} />
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default TutorialCards;
