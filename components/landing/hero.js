import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Image,
  GridItem,
  Spacer,
  Button,
  Divider,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import Lottie from "react-lottie";
import Developer from "../../animation/developer.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Developer,
};

function Hero() {
  return (
    <div>
      <Box>
        <Box px={24} py={{ base: 12, lg: 24 }}>
          <SimpleGrid
            columns={{ base: 0.2, lg: 12 }}
            px={{ base: 1, lg: "none" }}
          >
            <GridItem colSpan={5}>
              <Box>
                <Box>
                  <Text
                    fontWeight={"bold"}
                    fontSize={{ base: "4xl", lg: "6xl" }}
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
                    mt={{ base: 4, lg: "none" }}
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
                <Lottie
                  options={defaultOptions}
                  height={"500"}
                  width={"400"}
                  isClickToPauseDisabled
                />
              </Box>
            </GridItem>
          </SimpleGrid>
          <Fade left>
            <SimpleGrid columns={{ base: 0.5, lg: 12 }} py={24} pb={20}>
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
                      fontSize={{ base: "4xl", lg: "6xl" }}
                      bgGradient={"linear(to-l, blue.500, purple.500)"}
                      bgClip={"text"}
                      mt={{ base: 4, lg: "none" }}
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
                      mt={{ base: 4, lg: "none" }}
                    >
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Text>
                  </Box>
                </Box>
              </GridItem>
            </SimpleGrid>
          </Fade>
          <Divider />
        </Box>
      </Box>
    </div>
  );
}

export default Hero;
