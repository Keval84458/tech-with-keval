import React from "react";
import TutorialCards from "./_layouts/tutorials-cards";
import { PageWrapper } from "@/components";
import * as api from "../../services/server-apis";

const Tutorials = async () => {
  const tutorials = await api.getTutorials();

  return (
    <>
      <PageWrapper>
        <TutorialCards tutorials={tutorials} />
      </PageWrapper>
    </>
  );
};

export default Tutorials;
