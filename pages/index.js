import { ChakraProvider, VStack, Box, Button } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";

export default function Home() {
  const colors = Object.entries(theme.colors)
    .filter(([k, v]) => typeof v === "object")
    .map(([k]) => k);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <VStack>
        {colors.map((color) => (
          <Box key={color}>
            <Button colorScheme={color}>{`${color} button`}</Button>
          </Box>
        ))}
      </VStack>
    </ChakraProvider>
  );
}
