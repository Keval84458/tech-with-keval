"use client";
import React, { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { ThemeInput } from "@/components";
import SearchCard from "./card";
import NotLogin from "@/components/not-login";

const SearchConcept = ({ blogsData }) => {
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
            {blogsData.items.map((blogs) => {
              return <SearchCard key={blogs.id} blogs={blogs} />;
            })}
          </SimpleGrid>
        ) : (
          <NotLogin />
        )}
      </Box>
    </Box>
  );
};

export default SearchConcept;
