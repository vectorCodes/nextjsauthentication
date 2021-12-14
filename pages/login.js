/* eslint-disable react/no-children-prop */
import React, { useRef } from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Checkbox,
  HStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import { auth } from "../utilities/firebse-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
function Login() {
  const emails = useRef(null);
  const pass = useRef(null);
  const toast = useToast();

  const logIn = async () => {
    const email = emails.current.value;
    const password = pass.current.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/";
    } catch (err) {
      toast({
        title: "Login failed.",
        description: `${err.message}`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.log(err.mesage);
    }
  };

  return (
    <Box bgGradient={"linear(to-l, blue.500,green.500)"} h="100vh" py={24}>
      <Box m="0 auto" maxW={"5xl"}>
        <SimpleGrid columns={2}>
          <Box>
            <Image src="/assest/sign.svg" alt="register" />
          </Box>
          <Box>
            <Box ml={24} mt={6}>
              <Text textColor={"white"} fontWeight={"bold"} fontSize={"2xl"}>
                Log in To your Account
              </Text>
              <Text textColor={"gray.300"}>
                Created for developers by developers
              </Text>
              <Stack spacing={4} mt={6} w="300px">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<AiOutlineMail />}
                  />
                  <Input ref={emails} placeholder="Enter your email" />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<BsKey />} />
                  <Input ref={pass} placeholder="*******" />
                </InputGroup>
              </Stack>
              <HStack mt={4}>
                <Checkbox defaultIsNotChecked />
                <Text textColor={"white"}>
                  I agree to the Terms & Conditions
                </Text>
              </HStack>

              <Button
                colorScheme={"blue"}
                mt={6}
                w="300px"
                cursor={"pointer"}
                onClick={logIn}
              >
                Log in
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Login;
