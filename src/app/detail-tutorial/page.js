import { PageWrapper } from "@/components";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import * as api from "../../services/server-apis";

const DetailsTutorial = async ({ searchParams }) => {
  const blogId = searchParams.Id;
  const blogDetails = await api.getBlogDetailsbyBlogId(blogId);
  console.log("blogDetails", blogDetails.items);

  return (
    <PageWrapper>
      <Box>
        <Text>Keval</Text>
      </Box>
    </PageWrapper>
  );
};

export default DetailsTutorial;
