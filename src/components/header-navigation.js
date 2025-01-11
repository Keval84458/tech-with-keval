"use client";
import React from "react";
import { Box, Flex, HStack, Button, Spacer, Image } from "@chakra-ui/react";
import Link from "next/link";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import Login from "@/app/_layouts/login";
import Signup from "@/app/_layouts/signup";
import Logout from "@/app/_layouts/logout";
import DrawerCMP from "./drawer";

const HeaderNavigation = () => {
  return (
    <Box
      px={4}
      py={2}
      boxShadow="sm"
      bg="primary.42"
      position="fixed"
      top={0}
      left={0}
      w="100%"
      zIndex="1000"
    >
      <Flex alignItems="center">
        <DrawerCMP />
        <Box fontWeight="bold" fontSize="xl">
          <Image
            src="/assets/tech with keval.png"
            alt="Logo Image"
            width={{ base: "3.438rem", sm: "3.438rem", md: "3.8rem" }}
            transition="all 0.5s ease"
            roundedBottomLeft="2xl"
            roundedTopRight="2xl"
            _hover={{
              roundedBottomLeft: "0",
              roundedTopRight: "0",
              roundedTopLeft: "2xl",
              roundedBottomRight: "2xl",
            }}
          />
        </Box>

        <HStack as="nav" ml={10} display={{ base: "none", md: "flex" }}>
          <Button
            bg="primary.42"
            size="sm"
            as={Link}
            href={PAGE_PATH_KEYS.HOME}
            _hover={{
              bg: "primary.42",
              transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
              borderBottomWidth: "3px",
              borderBottomColor: "primary.30",
              borderTopWidth: "3px",
              borderTopColor: "primary.100",
            }}
            _disabled={{ bg: "primary.42" }}
          >
            Home
          </Button>

          <Button
            bg="primary.42"
            size="sm"
            as={Link}
            href={PAGE_PATH_KEYS.TUTORIALS}
            _hover={{
              bg: "primary.42",
              transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
              borderBottomWidth: "3px",
              borderBottomColor: "primary.30",
              borderTopWidth: "3px",
              borderTopColor: "primary.100",
            }}
            _disabled={{ bg: "primary.42" }}
          >
            Tutorials
          </Button>

          <Button
            bg="primary.42"
            size="sm"
            as={Link}
            href={PAGE_PATH_KEYS.BLOGS}
            _hover={{
              bg: "primary.42",
              transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
              borderBottomWidth: "3px",
              borderBottomColor: "primary.30",
              borderTopWidth: "3px",
              borderTopColor: "primary.100",
            }}
            _disabled={{ bg: "primary.42" }}
          >
            Blogs
          </Button>

          <Button
            bg="primary.42"
            size="sm"
            as={Link}
            href={PAGE_PATH_KEYS.ABOUT_US}
            _hover={{
              bg: "primary.42",
              transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
              borderBottomWidth: "3px",
              borderBottomColor: "primary.30",
              borderTopWidth: "3px",
              borderTopColor: "primary.100",
            }}
            _disabled={{ bg: "primary.42" }}
          >
            About Me
          </Button>

          <Button
            bg="primary.42"
            size="sm"
            as={Link}
            href={PAGE_PATH_KEYS.CONTACT_US}
            _hover={{
              bg: "primary.42",
              transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
              borderBottomWidth: "3px",
              borderBottomColor: "primary.30",
              borderTopWidth: "3px",
              borderTopColor: "primary.100",
            }}
            _disabled={{ bg: "primary.42" }}
          >
            Contact Us
          </Button>

          <Button
            bg="primary.42"
            size="sm"
            as={Link}
            href={PAGE_PATH_KEYS.FEEDBACK}
            _hover={{
              bg: "primary.42",
              transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
              borderBottomWidth: "3px",
              borderBottomColor: "primary.30",
              borderTopWidth: "3px",
              borderTopColor: "primary.100",
            }}
            _disabled={{ bg: "primary.42" }}
          >
            Feedback
          </Button>
        </HStack>

        <Spacer />

        <HStack spacing={2}>
          {localStorage.getItem("authenticated") ? (
            <Logout />
          ) : (
            <>
              <Login />
              <Signup />
            </>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};

export default HeaderNavigation;
