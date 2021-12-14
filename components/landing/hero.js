import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Image,
  GridItem,
  Spacer,
  Button,
} from "@chakra-ui/react";
function Hero() {
  return (
    <div>
      <Box>
        <Box px={24} py={24}>
          <SimpleGrid columns={12} pb={10}>
            <GridItem colSpan={5}>
              <Box>
                <Box>
                  <Text
                    fontWeight={"bold"}
                    fontSize={"6xl"}
                    bgGradient={"linear(to-l, blue.500, purple.500)"}
                    bgClip={"text"}
                  >
                    BUILT THE WEBSITE WITH PASSION
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontSize={"sm"}
                    noOfLines={5}
                    fontWeight={"semibold"}
                    textColor={"black"}
                  >
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </Text>
                  <Button colorScheme={"purple"} textColor={"gray.300"} mt={6}>
                    Get Started
                  </Button>
                </Box>
              </Box>
            </GridItem>
            <Spacer />
            <GridItem colSpan={6}>
              <Box>
                <Image src="/assest/website.svg" alt="photo" />
              </Box>
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={12} py={24}>
            <GridItem colSpan={6}>
              <Box>
                <Image src="/assest/program.svg" alt="svg" />
              </Box>
            </GridItem>
            <Spacer />
            <GridItem colSpan={5}>
              <Box>
                <Box>
                  <Text
                    fontWeight={"bold"}
                    fontSize={"6xl"}
                    bgGradient={"linear(to-l, blue.500, purple.500)"}
                    bgClip={"text"}
                  >
                    LEARN HOW TO CODE.
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontSize={"sm"}
                    noOfLines={5}
                    fontWeight={"semibold"}
                    textColor={"black"}
                  >
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </Text>
                </Box>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
}

export default Hero;
