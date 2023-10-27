import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size="xl" name="Pete" src="image-url" />
    <VStack spacing={4} align="center" color="white">
      <Heading as="h1" size="xl">
        {greeting}
      </Heading>
      <Heading as="h2" size="md">
        {bio1}
      </Heading>
      <Heading as="h2" size="md">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
