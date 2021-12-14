import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./navbar";
function Layout({ children }) {
  return (
    <Box p={4}>
      <Navbar />
      {children}
    </Box>
  );
}

export default Layout;
