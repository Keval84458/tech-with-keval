"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("authenticated");
    router.refresh();
  };

  return (
    <Button
      colorScheme="teal"
      variant="outline"
      _hover={{
        bg: "teal.500",
        color: "white",
        transform: "scale(1.05)",
        transition: "all 0.3s ease",
      }}
      _active={{
        bg: "teal.600",
      }}
      size="sm"
      onClick={logout}
    >
      Logout
    </Button>
  );
};

export default Logout;
