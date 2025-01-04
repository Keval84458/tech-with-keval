"use client";
import React, { useState } from "react";
import { EyeIcon, ThemeInput } from "@/components";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Modal,
  FormControl,
  InputGroup,
  useDisclosure,
  InputLeftElement,
  InputRightElement,
  Flex,
} from "@chakra-ui/react";
import * as api from "../../services/server-apis";
import Swal from "sweetalert2";

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [viewPass, setViewPass] = useState(false);
  const [viewPassConfirmPassword, setViewPassConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const onChange = (key, value) =>
    setFormData({
      ...formData,
      [key]: value,
    });

  const signUp = async () => {
    try {
      const payload = { ...formData };
      const response = await api.signUp(payload);
      if (response === undefined) {
        onClose();
        Swal.fire({
          title: "Failed",
          icon: "error",
          text: "Sign Up fail",
        });
        setFormData({ name: "", email: "", password: "", passwordConfirm: "" });
      } else {
        onClose();
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "Sign Up successfully",
        });
        setFormData({ name: "", email: "", password: "", passwordConfirm: "" });
      }
    } catch (err) {
      Swal.fire({
        title: "Failed",
        icon: "error",
        text: err || "invalid credentials",
      });
    }
  };

  return (
    <>
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
        onClick={onOpen}
      >
        Sign Up
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="white.100" rounded="2xl">
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <InputGroup>
                <ThemeInput
                  placeholder="Username"
                  type="text"
                  value={formData.name}
                  onChange={(e) => onChange("name", e.target.value)}
                />
              </InputGroup>
            </FormControl>

            <FormControl mt={1}>
              <InputGroup>
                <ThemeInput
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => onChange("email", e.target.value)}
                />
              </InputGroup>
            </FormControl>

            <FormControl mt={1}>
              <InputGroup>
                <ThemeInput
                  placeholder="Password"
                  type={viewPass ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => onChange("password", e.target.value)}
                />
                <InputRightElement color="white.100" cursor="pointer">
                  <EyeIcon
                    visible={viewPass}
                    setVisible={setViewPass}
                    color="black.45"
                    style={{ top: "2.5rem" }}
                    size="1.25rem"
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl mt={1}>
              <InputGroup>
                <InputLeftElement></InputLeftElement>
                <ThemeInput
                  placeholder="Consfirm Password"
                  type={viewPassConfirmPassword ? "text" : "password"}
                  value={formData.passwordConfirm}
                  onChange={(e) => onChange("passwordConfirm", e.target.value)}
                />
                <InputRightElement color="white.100" cursor="pointer">
                  <EyeIcon
                    visible={viewPassConfirmPassword}
                    setVisible={setViewPassConfirmPassword}
                    color="black.45"
                    style={{ top: "2.5rem" }}
                    size="1.25rem"
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Flex justifyContent="end" mt={1}>
              <Button size="sm" bg="primary.100" onClick={signUp}>
                Signup
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
