"use client";
import React from "react";
import { Box, Text, Stack, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import { Icon } from ".";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        px={{ base: 4, md: 10 }}
      >
        <Text fontSize="lg" fontWeight="bold">
          Tech with Keval © {new Date().getFullYear()}
        </Text>

        <Stack
          direction={{ base: "column", md: "row" }}
          // spacing={4}
          align="center"
          mt={{ base: 4, md: 0 }}
        >
          <Button
            as={Link}
            href={PAGE_PATH_KEYS.HOME}
            rounded="md"
            size="sm"
            _hover={{
              bg: "gray.800",
            }}
            _disabled={{ bg: "primary.100" }}
            bg="gray.800"
            color="white.100"
          >
            Home
          </Button>

          <Button
            as={Link}
            href={PAGE_PATH_KEYS.ABOUT_US}
            size="sm"
            rounded="md"
            _hover={{
              bg: "gray.800",
            }}
            _disabled={{ bg: "primary.100" }}
            bg="gray.800"
            color="white.100"
          >
            About Us
          </Button>

          <Button
            as={Link}
            href={PAGE_PATH_KEYS.CONTACT_US}
            rounded="md"
            size="sm"
            _hover={{
              bg: "gray.800",
            }}
            _disabled={{ bg: "primary.100" }}
            bg="gray.800"
            color="white.100"
          >
            Contact Us
          </Button>
        </Stack>

        <Stack
          direction="row"
          spacing={4}
          mt={{ base: 4, md: 0 }}
          align="center"
        >
          <Link href="https://twitter.com" isExternal>
            <Icon name="FaSquareXTwitter" type="fa6" />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <Icon name="FaFacebook" type="fa" />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon name="FaInstagramSquare" type="fa" />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon name="IoLogoYoutube" type="io" />
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
