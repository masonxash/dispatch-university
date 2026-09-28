import { Box, Card } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"

const HeroCard = () => {
  return (
    <Box>
     <ChakraLink asChild>
    <NextLink href="/flambae">
    <Card.Root  bgColor="black" width="auto">
      <Card.Body gap="2" padding="6">
        <Box borderRadius="md">
            <Box px="4" py="2" borderRadius="md">
              <Image
                src="./images/flambae.jpg"
                boxSize="150px"
                borderRadius="full"
                fit="cover"
                alt="Flambae"
              />
            </Box>
        </Box>
        <Card.Title color={"white"} mt="2">Flambae (Pyrokinesis) </Card.Title>
        <Card.Description color={"white"}>
          All boob and all brawn, this hero is hot headed. View his file to learn more about the mechanics of his fuego.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end" paddingX="6" paddingY="4">
      </Card.Footer>
    </Card.Root>
    </NextLink>
    </ChakraLink>
    </Box>
  )
}

export default HeroCard
