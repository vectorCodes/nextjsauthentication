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
    <Box bg="#04044A" py={12} px={24} h="100vh">
      <SimpleGrid columns={2} maxW={"5xl"} spacing={32}>
        <Box>
          <Text textColor={"white"} fontSize={"5xl"} fontWeight={"bold"}>
            Get a quote
          </Text>
          <Text textColor={"white"} fontSize={"sm"} mt={6}>
            Fill up the form and our team will get back
          </Text>
          <Text textColor={"white"} fontSize={"sm"} pb={16}>
            to you within 24 hours.
          </Text>
          {datas.map((data, idx) => {
            return (
              <HStack key={idx} spacing={10} mt={8}>
                <Box textColor={"blue.400"} fontSize={"2xl"}>
                  {data.icon}
                </Box>
                <Text textColor={"white"} fontSize={"md"}>
                  {data.title}
                </Text>
              </HStack>
            );
          })}
          <HStack spacing={12} mt={24} cursor={"pointer"}>
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
        <Box bg="white" rounded={10} mt={4} p={8}>
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
            <Input
              placeholder="Enter your message"
              w={"350px"}
              cursor={"pointer"}
              ml={4}
            />
          </Box>
          <Box>
            <HStack mt={28}>
              <Box></Box>
              <Spacer />
              <Box>
                <Button
                  bg={"#2D75FF"}
                  transition={"all 1s"}
                  textColor={"white"}
                  _hover={{ bg: "#2D75FF" }}
                >
                  Send message
                </Button>
              </Box>
            </HStack>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Contact;
