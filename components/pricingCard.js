import React from "react";
import { Box, Text, SimpleGrid, HStack } from "@chakra-ui/react";
function PricingCard() {
  return (
    <Box>
      <SimpleGrid columns={3}>
        <Box p={3} bg={"white"} mt={10} rounded={"lg"}>
          <Box>
            <Text textColor={"black"} fontWeight={"bold"}>
              Basic
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default PricingCard;
