import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  HStack,
  Spacer,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { auth } from "../utilities/firebse-config";
import { onAuthStateChanged } from "firebase/auth";
import { GiHamburgerMenu } from "react-icons/gi";

const navbars = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Product",
    path: "/product",
  },
  {
    title: "pricing",
    path: "/price",
  },
  {
    title: "Contact us",
    path: "/contact",
  },
];

const register = [
  {
    title: "Sign up",
    path: "/signup",
  },
  {
    title: "Log in",
    path: "/login",
  },
];

function Navbar() {
  const [user, setUser] = useState(null);
  const [active, setActive] = useState("Home");
  const [hamburger, setHamburger] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <Box>
      <Box>
        <Box d={{ base: "block", lg: "none" }} cursor={"pointer"}>
          <GiHamburgerMenu
            onClick={() => {
              setHamburger(true);
            }}
          />
        </Box>
        <HStack spacing={6} d={{ base: "none", lg: "flex" }}>
          <Text
            textColor={"blackAlpha.800"}
            fontSize={"3xl"}
            fontWeight={"bold"}
            cursor={"pointer"}
          >
            Nexus
          </Text>

          <Spacer />

          {navbars.map((navbar, idx) => {
            const isActive = navbar.title === active;
            return (
              <HStack
                key={idx}
                textColor={"blackAlpha.800"}
                fontWeight={"semibold"}
                fontSize={"lg"}
                transition="all 0.6s"
                _hover={{ transform: "scale(1.09)" }}
                cursor={"pointer"}
                onClick={() => {
                  setActive(navbar.title);
                }}
              >
                <Link href={navbar.path} passHref>
                  <Text>{navbar.title}</Text>
                </Link>
              </HStack>
            );
          })}
          <Spacer />
          {user ? (
            <HStack>
              <Text fontWeight={"semibold"}>{user.email}</Text>
              <Button onClick={signOut}>sign out</Button>
            </HStack>
          ) : (
            register.map((r, idx) => {
              const isActive = r.title === active;
              return (
                <HStack
                  key={idx}
                  textColor={"blackAlpha.800"}
                  fontWeight={"semibold"}
                  fontSize={"lg"}
                  transition="all 1s"
                  _hover={{ transform: isActive ? "scale(1.09)" : "" }}
                  cursor={"pointer"}
                  onClick={() => {
                    setActive(r.title);
                  }}
                >
                  <Link href={r.path} passHref>
                    <Button colorScheme={"purple"}>{r.title}</Button>
                  </Link>
                </HStack>
              );
            })
          )}
        </HStack>
      </Box>
      <Box>
        <Drawer
          onClose={() => {
            setHamburger(false);
          }}
          isOpen={hamburger}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" fontSize={"3xl"}>
              Nexus
            </DrawerHeader>
            <DrawerBody>
              <Stack cursor={"pointer"}>
                <Link passHref href={"/"}>
                  <Text
                    fontWeight={"bold"}
                    _hover={{
                      bg: "blue.400",
                      p: 1,
                      rounded: "lg",
                      w: "100px",
                      textColor: "white",
                    }}
                  >
                    Home
                  </Text>
                </Link>
                <Link passHref href={"/product"}>
                  <Text
                    fontWeight={"bold"}
                    _hover={{
                      bg: "blue.400",
                      p: 1,
                      rounded: "lg",
                      w: "100px",
                      textColor: "white",
                    }}
                  >
                    Product
                  </Text>
                </Link>
                <Link passHref href={"/price"}>
                  <Text
                    fontWeight={"bold"}
                    _hover={{
                      bg: "blue.400",
                      p: 1,
                      rounded: "lg",
                      w: "100px",
                      textColor: "white",
                    }}
                  >
                    Pricing
                  </Text>
                </Link>
                <Link passHref href={"/contact"}>
                  <Text
                    fontWeight={"bold"}
                    _hover={{
                      bg: "blue.400",
                      p: 1,
                      rounded: "lg",
                      w: "100px",
                      textColor: "white",
                    }}
                  >
                    Contact
                  </Text>
                </Link>
                <HStack spacing={20} fontWeight={"bold"} fontSize={"xl"}>
                  <Link passHref href={"/signup"}>
                    <Text
                      _hover={{
                        bg: "blue.400",
                        p: 1,
                        rounded: "lg",
                        w: "90px",
                        textColor: "white",
                      }}
                    >
                      Sign up
                    </Text>
                  </Link>
                  <Link passHref href={"/login"}>
                    <Text
                      _hover={{
                        bg: "blue.400",
                        p: 1,
                        rounded: "lg",
                        w: "70px",
                        textColor: "white",
                      }}
                    >
                      Log in
                    </Text>
                  </Link>
                </HStack>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
