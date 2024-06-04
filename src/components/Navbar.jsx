import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" color="white" fontWeight="bold">
          MyApp
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" color="white" mx={2}>
            Home
          </Link>
          {/* Add more navigation links here */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;