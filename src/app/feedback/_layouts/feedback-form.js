"use client";
import React, { useState } from "react";
import { ThemeInput, ThemeSelect, ThemeTextarea } from "@/components";
import NotLogin from "@/components/not-login";
import {
  Box,
  Button,
  FormControl,
  InputGroup,
  Text,
  Image,
} from "@chakra-ui/react";
import * as api from "../../../services/server-apis";
import Swal from "sweetalert2";

const FeedbackForm = () => {
  const [feedbackData, setFeedbackData] = useState({
    Name: "",
    Email: "",
    Ratings: "",
    Feedback_Type: "",
    Comments: "",
    Suggestions: "",
    Locations: "",
  });

  const onChange = (key, value) =>
    setFeedbackData({
      ...feedbackData,
      [key]: value,
    });

  const submitFeedbackData = async () => {
    try {
      const payload = { ...feedbackData };
      const response = await api.submitFeedback(payload);
      if (response === undefined) {
        Swal.fire({
          title: "Failed your Response Try again...",
          icon: "error",
        });
        setFeedbackData({
          Name: "",
          Email: "",
          Ratings: "",
          Feedback_Type: "",
          Comments: "",
          Suggestions: "",
          Locations: "",
        });
      } else {
        Swal.fire({
          title: "THANK YOU FOR GIVE YOUR FEEDBACK",
          icon: "success",
        });
        setFeedbackData({
          Name: "",
          Email: "",
          Ratings: "",
          Feedback_Type: "",
          Comments: "",
          Suggestions: "",
          Locations: "",
        });
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <>
      {localStorage.getItem("authenticated") ? (
        <Box display={{ md: "flex" }}>
          <Box w={{ md: "50%" }}>
            <Image
              src="/assets/vectore/Feedback.png"
              alt="Feedback Image"
              height={{ base: "400px", lg: "500px" }}
              mx="auto"
            />
          </Box>
          <Box w={{ md: "50%" }}>
            <Text
              fontSize="250"
              fontWeight="bold"
              color="primary.43"
              fontFamily="heading"
            >
              Feedback
            </Text>

            <InputGroup w={{ lg: "80%" }}>
              <FormControl>
                <ThemeInput
                  size="md"
                  color="black.37"
                  placeholder="Name"
                  _placeholder={{ color: "black.37" }}
                  focusBorderColor="primary.43"
                  value={feedbackData.Name}
                  onChange={(e) => onChange("Name", e.target.value)}
                />
              </FormControl>
            </InputGroup>

            <InputGroup w={{ lg: "80%" }} mt={2}>
              <FormControl>
                <ThemeInput
                  size="md"
                  color="black.37"
                  placeholder="Email"
                  _placeholder={{ color: "black.37" }}
                  focusBorderColor="primary.43"
                  value={feedbackData.Email}
                  onChange={(e) => onChange("Email", e.target.value)}
                />
              </FormControl>
            </InputGroup>

            <InputGroup w={{ lg: "80%" }} mt={2}>
              <FormControl>
                <ThemeSelect
                  placeholder="Ratings"
                  color="black.37"
                  focusBorderColor="primary.43"
                  value={feedbackData.Ratings}
                  onChange={(e) => onChange("Ratings", e.target.value)}
                >
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="2">2</option>
                </ThemeSelect>
              </FormControl>
            </InputGroup>

            <InputGroup w={{ lg: "80%" }} mt={2}>
              <FormControl>
                <ThemeSelect
                  placeholder="Feedback Type"
                  color="black.37"
                  focusBorderColor="primary.43"
                  value={feedbackData.Feedback_Type}
                  onChange={(e) => onChange("Feedback_Type", e.target.value)}
                >
                  <option value="General Feedback">General Feedback</option>
                  <option value="Content Quality">Content Quality</option>
                  <option value="Usability/Navigation">
                    Usability/Navigation
                  </option>
                  <option value="Suggestions for Improvement">
                    Suggestions for Improvement
                  </option>
                  <option value="Technical Issues">Technical Issues</option>
                  <option value="Design/Appearance">Design/Appearance</option>
                  <option value="Helpfulness of Documentation">
                    Helpfulness of Documentation
                  </option>
                  <option value="Performance/Speed">Performance/Speed</option>
                </ThemeSelect>
              </FormControl>
            </InputGroup>

            <InputGroup w={{ lg: "80%" }} mt={2}>
              <FormControl>
                <ThemeTextarea
                  size="xl"
                  color="black.37"
                  placeholder="Comments..."
                  focusBorderColor="primary.43"
                  _placeholder={{ color: "black.37" }}
                  value={feedbackData.Comments}
                  onChange={(e) => onChange("Comments", e.target.value)}
                />
              </FormControl>
            </InputGroup>

            <InputGroup w={{ lg: "80%" }} mt={2}>
              <FormControl>
                <ThemeTextarea
                  size="xl"
                  color="black.37"
                  placeholder="Suggestions for Improvement..."
                  focusBorderColor="primary.43"
                  _placeholder={{ color: "black.37" }}
                  value={feedbackData.Suggestions}
                  onChange={(e) => onChange("Suggestions", e.target.value)}
                />
              </FormControl>
            </InputGroup>

            <InputGroup w={{ lg: "80%" }} mt={2}>
              <FormControl>
                <ThemeInput
                  size="md"
                  color="black.37"
                  placeholder="Location"
                  _placeholder={{ color: "black.37" }}
                  focusBorderColor="primary.43"
                  value={feedbackData.Locations}
                  onChange={(e) => onChange("Locations", e.target.value)}
                />
              </FormControl>
            </InputGroup>

            <Button
              mt={2}
              bg="primary.100"
              _hover={{ bg: "primary.100" }}
              _disabled={{ bg: "primary.100" }}
              type="button"
              onClick={submitFeedbackData}
            >
              Submit
            </Button>
          </Box>
        </Box>
      ) : (
        <NotLogin />
      )}
    </>
  );
};

export default FeedbackForm;
