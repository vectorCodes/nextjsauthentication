import React, { useEffect, useState } from "react";
import { Box, Text, HStack, Spacer, Button } from "@chakra-ui/react";
import Link from "next/link";
import { auth } from "../utilities/firebse-config";
import { onAuthStateChanged } from "firebase/auth";

const navbars = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Product",
    path: "/home",
  },
  {
    title: "Feature",
    path: "/home",
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <Box bg="white">
      <Box>
        <HStack spacing={6}>
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
                _hover={{ transform: isActive ? "scale(1.09)" : "" }}
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
            <Box>
              <Text fontWeight={"semibold"}>{user.email}</Text>
              <Button onClick={signOut}>sign out</Button>
            </Box>
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
                    <Text>{r.title}</Text>
                  </Link>
                </HStack>
              );
            })
          )}
        </HStack>
      </Box>
    </Box>
  );
}

export default Navbar;
