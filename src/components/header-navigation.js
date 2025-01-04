"use client";
import React from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  Spacer,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  VStack,
  Image,
} from "@chakra-ui/react";
import { HiOutlineViewList } from "react-icons/hi";
import Link from "next/link";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import Login from "@/app/_layouts/login";
import Signup from "@/app/_layouts/signup";
import Logout from "@/app/_layouts/logout";
import DrawerCMP from "./drawer";
const HeaderNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4} py={2} boxShadow="sm" bg="primary.42">
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
          />
        </Box>

        <HStack
          as="nav"
          spacing={6}
          ml={10}
          display={{ base: "none", md: "flex" }}
        >
          <Link
            href={PAGE_PATH_KEYS.HOME}
            _hover={{ textDecoration: "none", color: "teal.500" }}
          >
            Home
          </Link>
          <Link
            href={PAGE_PATH_KEYS.ABOUT_US}
            _hover={{ textDecoration: "none", color: "teal.500" }}
          >
            About Us
          </Link>
          <Link
            href={PAGE_PATH_KEYS.CONTACT_US}
            _hover={{ textDecoration: "none", color: "teal.500" }}
          >
            Contact Us
          </Link>
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
