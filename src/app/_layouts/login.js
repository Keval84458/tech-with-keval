"use client";

import React, { useState } from "react";
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
  InputRightElement,
  Flex,
} from "@chakra-ui/react";
import { EyeIcon, ThemeInput } from "@/components";
import * as api from "../../services/server-apis";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [viewPass, setViewPass] = useState(false);
  const [formData, setFormData] = useState({
    identity: "",
    password: "",
  });
  const onChange = (key, value) =>
    setFormData({
      ...formData,
      [key]: value,
    });

  const login = async () => {
    try {
      const payload = { ...formData };
      const response = await api.login(payload);
      console.log("response", response);
      if (response === undefined) {
        // onClose();
        Swal.fire({
          title: "Failed",
          icon: "error",
          text: "Login fail",
        });
        setFormData({ identity: "", password: "" });
      } else {
        localStorage.setItem("authenticated", response.token);
        onClose();
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "Login successfully",
        });
        setFormData({ identity: "", password: "" });
        router.refresh();
      }
    } catch (err) {
      onClose();
      Swal.fire({
        title: "Failed",
        icon: "error",
        text: err,
      });
      setFormData({ identity: "", password: "" });
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
        Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="white.100" rounded="2xl">
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mt={1}>
              <InputGroup>
                <ThemeInput
                  placeholder="Email"
                  type="email"
                  value={formData.identity}
                  onChange={(e) => onChange("identity", e.target.value)}
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

            <Flex justifyContent="end" mt={1}>
              <Button size="sm" bg="primary.100" onClick={login}>
                Login
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Login;
