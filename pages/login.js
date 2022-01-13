/* eslint-disable react/no-children-prop */
import React, { useRef, useState } from "react";
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
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { auth } from "../utilities/firebse-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import Link from "next/link";
function Login() {
  const emails = useRef(null);
  const pass = useRef(null);
  const [spin, setSpin] = useState(false);
  const toast = useToast();

  const logIn = async () => {
    const email = emails.current.value;
    const password = pass.current.value;

    try {
      setSpin(true);
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
      setSpin(false);
    }
  };

  return (
    <Box
      bgGradient={"linear(to-l, blue.500,green.500)"}
      py={{ base: 14, lg: 36 }}
    >
      <Box m="0 auto" maxW={"5xl"}>
        <SimpleGrid columns={{ base: 1, lg: 2 }}>
          <Box d={{ base: "none", lg: "flex" }}>
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

              {spin ? (
                <Box py={12} px={24}>
                  <Spinner />
                </Box>
              ) : (
                <Button
                  colorScheme={"blue"}
                  mt={6}
                  w="300px"
                  cursor={"pointer"}
                  onClick={logIn}
                >
                  Log in
                </Button>
              )}
              <Box mt={4} cursor={"pointer"}>
                <Link href={"/signup"} passHref>
                  <Text textColor={"white"}>Dont have an account?</Text>
                </Link>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Login;
