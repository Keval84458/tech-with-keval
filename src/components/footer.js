"use client";
import React from "react";
import { Box, Text, Stack, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import { Icon } from ".";

const Footer = ({ ...rest }) => {
  return (
    <Box bg="primary.42" color="black.100" py={5} {...rest}>
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
          direction="row"
          spacing={2}
          mt={{ base: 4, md: 0 }}
          align="center"
        >
          <Link href="https://www.youtube.com/@techwithkeval2211">
            <Icon name="FaYoutube" type="fa" color="red.dc35" />
          </Link>
          <Link href="https://www.linkedin.com/in/keval-makvana-a164ba281/">
            <Icon name="FaLinkedin" type="fa" color="primary.900" />
          </Link>
          <Link href="https://www.instagram.com/keval.makvana.161/">
            <Icon name="FaInstagram" type="fa" />
          </Link>
          <Link href="#">
            <Icon name="FaSquareXTwitter" type="fa6" />
          </Link>
          <Link href="https://www.facebook.com/keval.makvana.161">
            <Icon name="FaFacebook" type="fa" color="primary.900" />
          </Link>
          <Link href="https://github.com/Keval84458">
            <Icon name="FaGithub" type="fa" color="black.100" />
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
