"use client";
import React from "react";
import { Box, Link, Text, Tooltip } from "@chakra-ui/react";
import { Icon } from "@/components";
const Details = () => {
  return (
    <Box>
      <Text fontSize={{ base: "275", md: "300" }} fontWeight="extrabold">
        Tech with Keval
      </Text>
      <Text color="black.100" fontWeight="semibold">
        Hi, I'm Keval Makvana, the creator of{" "}
        <Text as="span" fontWeight="extrabold">
          Tech With Keval
        </Text>
        . I hold a Bachelor's degree in Computer Applications (BCA) and have 1
        year of experience in web development. My expertise lies in modern
        technologies like React.js, Next.js, Chakra UI, MUI, and more. Through
        this platform, I aim to share valuable insights, tutorials, and best
        practices to help developers enhance their skills and build amazing
        projects. You can also find me on my YouTube channel,{" "}
        <Link
          href="https://www.youtube.com/@techwithkeval2211"
          color="primary.600"
          fontWeight="extrabold"
        >
          Tech With Keval
        </Link>
        , where I create engaging video content on similar topics to complement
        the learning experience. Let’s grow and innovate together in the
        exciting world of tech!
      </Text>

      <Text color="black.100" fontWeight="semibold" mt="3">
        Tech With Keval is your ultimate destination for learning modern web
        development. Founded by Keval Makvana, a BCA graduate with 1 year of
        experience, this platform is designed to empower beginners and enhance
        their skills with technologies like React.js, Next.js, Chakra UI, and
        more. Our mission is to simplify complex concepts, provide high-quality
        tutorials, and become a trusted resource in the tech community. With a
        focus on helping beginners grow and achieving top SEO rankings, we aim
        to make Tech With Keval one of the most recognized and reliable
        platforms for developers worldwide.
      </Text>

      <Box mt="5">
        <Text color="black.100" fontWeight="bold">
          Follow and Subscribe me on social media:
        </Text>
        <Box
          display="flex"
          gap={2}
          justifyContent={{ base: "center", md: "start" }}
        >
          <Link href="https://www.youtube.com/@techwithkeval2211">
            <Icon name="FaYoutube" type="fa" color="red.dc35" />
          </Link>

          <Link href="https://www.linkedin.com/in/keval-makvana-a164ba281/">
            <Icon name="FaLinkedin" type="fa" color="primary.900" />
          </Link>

          <Link href="https://www.instagram.com/techwithkeval2211/">
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
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
