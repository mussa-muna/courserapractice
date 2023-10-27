import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      align="start"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      w="100%"
    >
      <Image src={imageSrc} alt={title} h="200px" objectFit="cover" />

      <VStack p="4">
        <Heading as="h3" size="lg">
          {title}
        </Heading>

        <Text>{description}</Text>

        <HStack mt="3">
          <Text fontWeight="bold">Read More</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
