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
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utilities/firebse-config";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";

function Signup() {
  const email = useRef(null);
  const pass = useRef(null);
  const toast = useToast();
  const [spin, setSpin] = useState(false);
  const signUp = async () => {
    const emails = email.current.value;
    const password = pass.current.value;
    try {
      setSpin(true);
      await createUserWithEmailAndPassword(auth, emails, password);

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
    <Box bgGradient={"linear(to-l, blue.500,purple.500)"} h="100vh" py={24}>
      <Box m="0 auto" maxW={"5xl"}>
        <SimpleGrid columns={2}>
          <Box>
            <Image src="/assest/register.svg" alt="register" />
          </Box>
          <Box>
            <Box ml={24} mt={6}>
              <Text textColor={"white"} fontWeight={"bold"} fontSize={"2xl"}>
                Create your account
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
                  <Input ref={email} placeholder="Enter your email" />
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
                  <Spinner size={"md"} />
                </Box>
              ) : (
                <Button
                  colorScheme={"blue"}
                  mt={6}
                  w="300px"
                  cursor={"pointer"}
                  onClick={signUp}
                >
                  Sign up
                </Button>
              )}
              <Box mt={4} cursor={"pointer"}>
                <Link href={"/login"} passHref>
                  <Text textColor={"white"}>All ready have an account?</Text>
                </Link>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Signup;
