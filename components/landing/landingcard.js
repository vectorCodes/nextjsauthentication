import React from "react";
import { Box, SimpleGrid, Text, Center } from "@chakra-ui/react";
import { AiOutlineLaptop } from "react-icons/ai";
import { FaReact, FaAngular, FaVuejs, FaBootstrap } from "react-icons/fa";

function Landingcard() {
  return (
    <Box position={"relative"}>
      <Box
        w={"500px"}
        top={{ base: "30%", lg: "40%" }}
        left={{ base: "-5%", lg: "20%" }}
        h={"300px"}
        position={"absolute"}
        borderRadius={"50% 20% 40% 80%"}
        filter={"blur(90px)"}
        zIndex={"-1"}
        opacity={0.6}
        bgGradient={"radial-gradient(circle at 50% 50% ,blue.700,#9A0680)"}
      ></Box>
      <Center>
        <Text
          textColor={"black"}
          fontWeight={"bold"}
          fontSize={{ base: "4xl", lg: "5xl" }}
        >
          Core Features
        </Text>
      </Center>
      <Center>
        <Box
          h="4px"
          w="80px"
          bgGradient={"linear(to-r,purple.500,pink.500)"}
          mt={6}
        ></Box>
      </Center>
      <Center>
        <Text
          textColor={"gray.500"}
          fontSize={"lg"}
          mt={6}
          px={{ base: 8, lg: "none" }}
        >
          Comes with all essential features, elements and page you need.
        </Text>
      </Center>
      <SimpleGrid
        columns={{ base: 2, lg: 4 }}
        m={"0 auto"}
        maxW={{ base: "4xl", lg: "6xl" }}
        spacing={4}
        mt={8}
      >
        <Box role="group">
          <Box
            p={6}
            bg={"gray.100"}
            rounded={"md"}
            h={"350px"}
            transition={"0.6s"}
            _hover={{
              transform: "scale(1.07)",
            }}
          >
            <Box
              h={"70px"}
              w={"70px"}
              bgGradient={"linear(to-l,purple.500,pink.500)"}
              rounded={"lg"}
              transition={"all 1s"}
              _groupHover={{
                rounded: "full",
                transform: "rotate(360deg)",
              }}
              p={5}
            >
              <Box textColor={"white"} fontSize={"3xl"}>
                <FaReact />
              </Box>
            </Box>
            <Box
              textColor={"black"}
              fontWeight={"semibold"}
              fontSize={"2xl"}
              mt={4}
            >
              <Text>React Js</Text>
            </Box>
            <Box mt={4}>
              <Text textColor={"gray.500"}>
                React Js is a Javascript library for build user interface.
              </Text>
            </Box>
          </Box>
          <Box
            w={"0"}
            bgGradient={"linear(to-l,pink.500,purple.500)"}
            roundedEnd={"lg"}
            h={"4px"}
            transition={"all 1s"}
            _groupHover={{ width: "full", transform: "scale(1.07)" }}
          ></Box>
        </Box>
        <Box role={"group"}>
          <Box
            p={6}
            bg={"gray.200"}
            rounded={"md"}
            h={"350px"}
            transition={"0.6s"}
            _hover={{
              transform: "scale(1.07)",
            }}
          >
            <Box
              h={"70px"}
              w={"70px"}
              rounded={"lg"}
              bgGradient={"linear(to-l,purple.500,pink.500)"}
              transition={"all 1s"}
              _groupHover={{
                rounded: "full",
                transform: "rotate(360deg)",
              }}
              p={5}
            >
              <Box textColor={"white"} fontSize={"3xl"}>
                <FaAngular />
              </Box>
            </Box>
            <Box
              textColor={"black"}
              fontWeight={"semibold"}
              fontSize={"2xl"}
              mt={4}
            >
              <Text>Angular Js</Text>
            </Box>
            <Box mt={4}>
              <Text textColor={"gray.500"}>
                Angular is a Javascript Framework
              </Text>
            </Box>
          </Box>
          <Box
            w={"0"}
            bgGradient={"linear(to-l,pink.500,purple.500)"}
            roundedEnd={"lg"}
            h={"4px"}
            transition={"all 1s"}
            _groupHover={{ width: "full", transform: "scale(1.07)" }}
          ></Box>
        </Box>
        <Box role={"group"}>
          <Box
            p={6}
            bg={"gray.200"}
            rounded={"md"}
            h={"350px"}
            transition={"all 0.6s"}
            _hover={{ transform: "scale(1.07)" }}
          >
            <Box
              h={"70px"}
              w={"70px"}
              rounded={"lg"}
              bgGradient={"linear(to-l,purple.500,pink.500)"}
              transition={"all 1s"}
              _groupHover={{
                rounded: "full",
                transform: "rotate(360deg) ",
              }}
              p={5}
            >
              <Box textColor={"white"} fontSize={"3xl"}>
                <FaVuejs />
              </Box>
            </Box>
            <Box
              textColor={"black"}
              fontWeight={"semibold"}
              fontSize={"2xl"}
              mt={4}
            >
              <Text>Vue Js</Text>
            </Box>
            <Box mt={4}>
              <Text textColor={"gray.400"}>
                Vue.js is an open-source model–view–viewmodel front end
                JavaScript framework for building user interfaces and
                single-page applications
              </Text>
            </Box>
          </Box>
          <Box
            w={"0"}
            bgGradient={"linear(to-l,pink.500,purple.500)"}
            roundedEnd={"lg"}
            h={"4px"}
            transition={"all 1s"}
            _groupHover={{ width: "full", transform: "scale(1.07)" }}
          ></Box>
        </Box>
        <Box role={"group"}>
          <Box
            p={6}
            bg={"gray.200"}
            rounded={"md"}
            h={"350px"}
            transition={"0.6s"}
            _hover={{
              transform: "scale(1.07)",
            }}
          >
            <Box
              h={"70px"}
              w={"70px"}
              rounded={"lg"}
              bgGradient={"linear(to-l,purple.500,pink.500)"}
              transition={"all 1s"}
              _groupHover={{
                rounded: "full",
                transform: "rotate(360deg)",
              }}
              p={5}
            >
              <Box textColor={"white"} fontSize={"3xl"}>
                <FaBootstrap />
              </Box>
            </Box>
            <Box
              textColor={"black"}
              fontWeight={"semibold"}
              fontSize={"2xl"}
              mt={4}
            >
              <Text>Bootstrap</Text>
            </Box>
            <Box mt={4}>
              <Text textColor={"gray.500"}>
                Bootstrap is a free and open-source CSS framework directed at
                responsive, mobile-first front-end web development.
              </Text>
            </Box>
          </Box>
          <Box
            w={"0"}
            bgGradient={"linear(to-l,pink.500,purple.500)"}
            roundedEnd={"lg"}
            h={"4px"}
            transition={"all 1s"}
            _groupHover={{ width: "full", transform: "scale(1.07)" }}
          ></Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Landingcard;
