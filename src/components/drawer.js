import { PAGE_PATH_KEYS } from "@/utils/constant";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { HiOutlineViewList } from "react-icons/hi";

const DrawerCMP = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        bg="primary.42"
        _disabled={{ bg: "primary.42" }}
        _hover={{ bg: "primary.42" }}
        display={{ base: "flex", md: "none" }}
        icon={<HiOutlineViewList size="1.7rem" />}
        transition="all 0.5s ease"
        onClick={onOpen}
      />

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
    </>
  );
};

export default DrawerCMP;
