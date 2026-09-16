"use client";

import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="white" px={6} py={6} mt="auto">
      <Text textAlign="center" fontSize="sm">
        &copy; {new Date().getFullYear()} Dispatch University. Creative Commons
      </Text>
    </Box>
  );
}
