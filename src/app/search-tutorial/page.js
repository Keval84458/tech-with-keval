import React from "react";
import { PageWrapper } from "@/components";
import SearchConcept from "./_layouts/search-concept";
import * as api from "../../services/server-apis";

const SearchTutorial = async ({ searchParams }) => {
  const tutorialId = searchParams.Id;
  const blogsData = await api.getBlogByTutorialId(tutorialId);

  return (
    <PageWrapper>
      <SearchConcept blogsData={blogsData} />
    </PageWrapper>
  );
};

export default SearchTutorial;
