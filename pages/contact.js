/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import {
  Box,
  Center,
  HStack,
  SimpleGrid,
  Text,
  Input,
  InputLeftElement,
  InputGroup,
  Button,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import { FiFacebook, FiTwitter, FiInstagram, FiSmile } from "react-icons/fi";
const datas = [
  {
    title: "+012345678910",
    icon: <AiOutlinePhone />,
  },
  {
    title: "hello@flowbase.com",
    icon: <AiOutlineMail />,
  },
  {
    title: "102 street 2714 Don",
    icon: <VscLocation />,
  },
];

function Contact() {
  //   const [icon, setIcon] = useState(0);
  return (
    <Box bg="#04044A" py={12} px={24}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} maxW={"5xl"} spacing={32}>
        <Box>
          <Text
            textColor={"white"}
            fontSize={{ base: "3xl", lg: "5xl" }}
            fontWeight={"bold"}
          >
            Get a quote
          </Text>
          <Text textColor={"white"} fontSize={{ base: "xs", lg: "sm" }} mt={6}>
            Fill up the form and our team will get back
          </Text>
          <Text textColor={"white"} fontSize={"sm"} pb={{ base: 8, lg: 16 }}>
            to you within 24 hours.
          </Text>
          {datas.map((data, idx) => {
            return (
              <HStack
                key={idx}
                spacing={{ base: 6, lg: 10 }}
                mt={{ base: 4, lg: 8 }}
                cursor={"pointer"}
                transition={"all 1s"}
                h={"40px"}
                w={"250px"}
                rounded={"lg"}
                _hover={{
                  transform: "scale(1.01)",
                  bg: "blue.600",
                }}
              >
                <Box textColor={"blue.400"} fontSize={"2xl"}>
                  {data.icon}
                </Box>
                <Text textColor={"white"} fontSize={"md"}>
                  {data.title}
                </Text>
              </HStack>
            );
          })}
          <HStack
            spacing={{ base: 8, lg: 12 }}
            mt={{ base: 12, lg: 20 }}
            cursor={"pointer"}
          >
            <Center
              textColor={"white"}
              fontSize={"xl"}
              transition={"all 0.7s"}
              h="45px"
              w="45px"
              bg="#04044A"
              rounded={"full"}
              _hover={{ transform: "scale(1.09)", bg: "blue.500" }}
            >
              <FiFacebook />
            </Center>
            <HStack>
              <Center
                textColor={"white"}
                fontSize={"xl"}
                transition={"all 0.7s"}
                h="45px"
                w="45px"
                bg="#04044A"
                rounded={"full"}
                _hover={{ transform: "scale(1.09)", bg: "blue.500" }}
              >
                <FiTwitter />
              </Center>
            </HStack>
            <HStack>
              <Center
                textColor={"white"}
                fontSize={"xl"}
                transition={"all 0.7s"}
                h="45px"
                w="45px"
                bg="#04044A"
                rounded={"full"}
                _hover={{
                  transform: "scale(1.09)",
                  bgGradient: "linear(to-r, orange.500,pink.500)",
                }}
              >
                <FiInstagram />
              </Center>
            </HStack>
          </HStack>
        </Box>
        <Box
          bg="white"
          rounded={10}
          mt={{ base: 1, lg: 4 }}
          p={{ base: 6, lg: 8 }}
        >
          <Box>
            <Text textColor={"blue.900"} ml={4}>
              Your Name
            </Text>
          </Box>
          <Box mt={2} pb={6}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiSmile />}
                ml={4}
              />
              <Input
                cursor={"pointer"}
                placeholder="Phone number"
                w={"350px"}
                h={"40px"}
                ml={4}
              />
            </InputGroup>
          </Box>
          <Box>
            <Text textColor={"blue.900"} ml={4}>
              Mail
            </Text>
          </Box>
          <Box mt={2} pb={6}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineMail />}
                ml={4}
              />
              <Input
                placeholder="Phone number"
                w={"350px"}
                h={"40px"}
                cursor={"pointer"}
                ml={4}
              />
            </InputGroup>
          </Box>
          <Box>
            <Text textColor={"blue.900"} ml={4}>
              Message
            </Text>
          </Box>
          <Box mt={2}>
            <Textarea
              placeholder="Enter your message"
              rounded={"lg"}
              h={{ base: "80px", lg: "160px" }}
              ml={4}
              cursor={"pointer"}
            />
          </Box>
          <Box ml={{ base: "8", lg: 32 }}>
            <Button
              bg={"#2D75FF"}
              textColor={"white"}
              mt={3}
              px={{ base: 10, lg: 20 }}
              transition={"all 1s"}
              _hover={{ bg: "blue.500" }}
            >
              Send message
            </Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Contact;
