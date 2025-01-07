"use client";
import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const toast = useToast();
  const logout = () => {
    localStorage.removeItem("authenticated");
    toast({
      title: "You’ve successfully logged out.",
      position: "top-right",
      status: "success",
      isClosable: true,
    });
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
