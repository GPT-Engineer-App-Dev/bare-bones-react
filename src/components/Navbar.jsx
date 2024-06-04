import { Box, Flex, Link, Spacer, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Navbar = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

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
          {session ? (
            <Button onClick={handleLogout} colorScheme="red" mx={2}>
              Logout
            </Button>
          ) : (
            <Link as={RouterLink} to="/login" color="white" mx={2}>
              Login
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;