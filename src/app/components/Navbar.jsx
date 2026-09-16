"use client";
//no idea what that means, i guess it uses the client's system to load instead of preloading on "my" server

import { Box, Flex, HStack, Link as ChakraLink, Heading } from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "./logo";
// Logo is just avatar component

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <Box bg="green.800" color="white" px={6} py={3}>
      <Flex align="center" justify="space-between" maxW="7xl" mx="auto">
        <HStack gap={3}>
          <Logo />
          {/* I just changed the strings, the rest came from component library and docs */}
          <Heading size="md">Dispatch University</Heading>
        </HStack>
        <HStack as="ul" gap={6} listStyleType="none">
          {NAV_ITEMS.map((item) => (
            <Box as="li" key={item.href}>
              <ChakraLink asChild _hover={{ color: "green.300" }}>
                <NextLink href={item.href}>{item.label}</NextLink>
              </ChakraLink>
            </Box>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
