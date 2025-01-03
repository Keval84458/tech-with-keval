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
const HeaderNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4} py={2} boxShadow="sm" bg="primary.100">
      <Flex alignItems="center">
        <IconButton
          bg="primary.100"
          _disabled={{ bg: "primary.100" }}
          _hover={{ bg: "primary.100" }}
          display={{ base: "flex", md: "none" }}
          icon={<HiOutlineViewList size="1.7rem" />}
          transition="all 0.5s ease"
          onClick={onOpen}
        />
        <Box fontWeight="bold" fontSize="xl">
          <Image
            src="/assets/tech with keval.png"
            alt="Logo Image"
            width={{ base: "3.438rem", sm: "3.438rem", md: "3.8rem" }}
            rounded="full"
            transition="all 0.5s ease"
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

      <Drawer isOpen={isOpen} onClose={onClose} placement="left" width="50%">
        <DrawerOverlay />
        <DrawerContent bg="white.100" transition="all 0.2s ease">
          <DrawerCloseButton />
          <DrawerHeader>TECH WITH KEVAL</DrawerHeader>

          <DrawerBody>
            <VStack direction="column" spacing={4}>
              <Link
                href={PAGE_PATH_KEYS.HOME}
                _hover={{ textDecoration: "none", color: "teal.500" }}
                onClick={onClose}
              >
                Home
              </Link>
              <Link
                href={PAGE_PATH_KEYS.ABOUT_US}
                _hover={{ textDecoration: "none", color: "teal.500" }}
                onClick={onClose}
              >
                About Us
              </Link>
              <Link
                href={PAGE_PATH_KEYS.CONTACT_US}
                _hover={{ textDecoration: "none", color: "teal.500" }}
                onClick={onClose}
              >
                Contact Us
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default HeaderNavigation;
