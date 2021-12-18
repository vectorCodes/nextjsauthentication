import React from "react";
import {
  Box,
  Center,
  chakra,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import PricingCard from "../components/pricingCard";

const navbars = [
  {
    title: "About",
  },
  {
    title: "Contact",
  },
  {
    title: "Sign up",
  },
];

function Price() {
  return (
    <Box bg={"#EBEFF9"} h={"100vh"} p={5}>
      <HStack>
        <Text textColor={"blackAlpha.900"} fontSize={"3xl"} fontWeight={"bold"}>
          Nexus
        </Text>
        <Spacer />
        {navbars.map((navbar, idx) => {
          return (
            <HStack
              key={idx}
              pr={6}
              cursor={"pointer"}
              transition={"all 1s"}
              _hover={{
                transform: "scale(1.05)",
              }}
            >
              <Text>{navbar.title}</Text>
            </HStack>
          );
        })}
      </HStack>
      <Box>
        <Center mt={24}>
          <Text textColor={"#342DED"} fontSize={"4xl"} fontWeight={"bold"}>
            Flexible <chakra.span textColor={"black"}>Plans</chakra.span>
          </Text>
        </Center>
        <Center>
          <Text textColor={"gray.400"} fontSize={"2xl"}>
            Choose a plan that works best for you and your team
          </Text>
        </Center>
      </Box>
      <PricingCard />
    </Box>
  );
}

export default Price;
