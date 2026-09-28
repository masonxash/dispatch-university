import { Heading, Text, Box, Link, Stack, StackSeparator, Button } from "@chakra-ui/react";

export default function Flambae() {
  return (
    <Box>
      <Heading size="4xl" mb={4}>
        Flambae
      </Heading>
      <Text fontSize="lg">
        List of Tumblr posts by L, our resident Archivist.
      </Text>
      <Box p="4">
        <Stack separator={<StackSeparator />}>
        <Button colorPalette="orange" rounded="l1" href="https://www.tumblr.com/bastard-eyeless-bigshot/816646052855857152/im-having-enrichment-time-in-my-enclosure-in-the"> Metabolic Fire Conversion </Button>
         <Button rounded="l1" colorPalette="orange"  href="https://www.tumblr.com/bastard-eyeless-bigshot/822622684529754112/welcome-back-to-a-beloved-segment-of-bastard">Endocrine System & Ignition  </Button>
        </Stack>
      </Box>
    </Box>
  );
}
