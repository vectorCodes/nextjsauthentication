import React from "react";
import { Box, SimpleGrid, Text, Center } from "@chakra-ui/react";
import { AiOutlineLaptop } from "react-icons/ai";

function Landingcard() {
  return (
    <Box>
      <Center>
        <Text textColor={"black"} fontWeight={"bold"} fontSize={"5xl"}>
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
        <Text textColor={"gray.500"} fontSize={"lg"} mt={6}>
          Comes with all essential features, elements and page you need.
        </Text>
      </Center>
      <SimpleGrid columns={3} m={"0 auto"} maxW={"5xl"} spacing={4} mt={8}>
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
              p={4}
            >
              <Box textColor={"white"} fontSize={"3xl"} px={1}>
                <AiOutlineLaptop />
              </Box>
            </Box>
            <Box
              textColor={"black"}
              fontWeight={"semibold"}
              fontSize={"2xl"}
              mt={4}
            >
              <Text>Landing Page</Text>
              <Text>Template</Text>
            </Box>
            <Box mt={4}>
              <Text textColor={"gray.400"}>
                Xpeedo is a landing page html template you can use for almost
                any kind of websites
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
              p={4}
            >
              {" "}
              <Box textColor={"white"} fontSize={"3xl"} px={1}>
                <AiOutlineLaptop />
              </Box>
            </Box>
            <Box
              textColor={"black"}
              fontWeight={"semibold"}
              fontSize={"2xl"}
              mt={4}
            >
              <Text>Built-with Bootstrap 5</Text>
            </Box>
            <Box mt={4}>
              <Text textColor={"gray.400"}>
                Template is based on latest version of Bootstrap 5
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
              p={4}
            >
              <Box textColor={"white"} fontSize={"3xl"} px={1}>
                <AiOutlineLaptop />
              </Box>
            </Box>
            <Box
              textColor={"black"}
              fontWeight={"semibold"}
              fontSize={"2xl"}
              mt={4}
            >
              <Text>Fully Responsive</Text>
            </Box>
            <Box mt={4}>
              <Text textColor={"gray.400"}>
                Xpeedo is fully responsive template on all screensize and modern
                browsers
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
