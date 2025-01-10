"use client";
import React, { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { ThemeInput } from "@/components";
import SearchCard from "./card";
import NotLogin from "@/components/not-login";
import UnderConstruction from "@/components/under-construction";
import NotFound from "@/components/not-found";

const SearchConcept = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchConcept = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Box>
      <Box
        width={{ base: "100%", sm: "70%", md: "50%", lg: "30%" }}
        transition="all .5s ease"
      >
        <ThemeInput
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => searchConcept(e)}
        />
      </Box>
      <Box mt={4}>
        {localStorage.getItem("authenticated") ? (
          <SimpleGrid
            column={{ base: 1, sm: 2, md: 4, lg: 6 }}
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <SearchCard />
          </SimpleGrid>
        ) : (
          <NotLogin />
        )}
      </Box>
    </Box>
  );
};

export default SearchConcept;
