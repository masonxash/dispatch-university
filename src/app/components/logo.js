import { Avatar} from "@chakra-ui/react"

const Logo = () => {
  return (
      <Avatar.Root colorPalette="green">
        <Avatar.Fallback name="Dispatch University" />
        <Avatar.Image src="https://bit.ly/broken-link" />
      </Avatar.Root>
  )
}
export default Logo
