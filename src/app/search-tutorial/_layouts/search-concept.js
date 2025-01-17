"use client";
import React, { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { ThemeInput } from "@/components";
import SearchCard from "./card";
import NotLogin from "@/components/not-login";
import EmptyData from "@/components/empty-data";

const SearchConcept = ({ blogsData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchConcept = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Box mt={"1rem"}>
      <Box
        width={{ base: "100%", sm: "70%", md: "50%", lg: "30%" }}
        transition="all .5s ease"
      >
        {/* <ThemeInput
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => searchConcept(e)}
        /> */}
      </Box>
      <Box mt={4}>
        {localStorage.getItem("authenticated") ? (
          <>
            {blogsData.items.length > 0 ? (
              <SimpleGrid
                column={{ base: 1, sm: 2, md: 4, lg: 5 }}
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
              >
                {blogsData.items.map((blogs) => {
                  return (
                    <>
                      <SearchCard key={blogs.id} blogs={blogs} />
                    </>
                  );
                })}
              </SimpleGrid>
            ) : (
              <EmptyData />
            )}
          </>
        ) : (
          <NotLogin />
        )}
      </Box>
    </Box>
  );
};

export default SearchConcept;
