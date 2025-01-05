"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Logout = () => {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("authenticated");
    router.refresh();
  };

  return (
    <Button
      bg="primary.gradient1"
      color="white.100"
      variant="outline"
      _hover={{
        transform: "scale(1.1)",
        transition: "all 0.5s ease",
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
