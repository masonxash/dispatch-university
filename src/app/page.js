import { Heading, Text, Box } from "@chakra-ui/react";
import HeroCard from "./components/HeroCard";

export default function Home() {
  return (
    <Box>
      <Heading size="2xl" mb={4}>
        Welcome to Dispatch University
      </Heading>
      <Box paddingTop="2rem" paddingBottom="4rem">
      <Text fontSize="lg">
        A wiki for speculative meta-biology for the game Dispatch. By fans for
        fans.
      </Text>
      </Box>
      <Box>
        <HeroCard />
      </Box>
    </Box>
  );
}