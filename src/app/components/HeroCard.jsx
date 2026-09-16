import { Center, Box, Button, Card, Link } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"

const HeroCard = () => {
  return (
    <Card.Root width="320px">
      <Card.Body gap="2" padding="6">
        <Box borderRadius="md">
          <Center>
            <Box px="4" py="2" borderRadius="md">
              <Image
                src="./images/flambae.jpg"
                boxSize="150px"
                borderRadius="full"
                fit="cover"
                alt="Flambae"
              />
            </Box>
          </Center>
        </Box>
        <Card.Title mt="2">Flambae (Pyrokinesis) </Card.Title>
        <Card.Description>
          All boob and all brawn, this hero is hot headed.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end" paddingX="6" paddingY="4">
        <Box>
       <ChakraLink asChild>
      <NextLink href="/flambae">View File</NextLink>
    </ChakraLink>
</Box>
      </Card.Footer>
    </Card.Root>
  )
}

export default HeroCard
