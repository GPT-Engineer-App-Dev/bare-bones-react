import { Container, VStack, Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SupabaseAuthUI, useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { session, logout } = useSupabaseAuth();

  if (session) {
    navigate("/");
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box width="100%">
          <SupabaseAuthUI />
        </Box>
        {session && (
          <Button onClick={logout} colorScheme="blue">
            Logout
          </Button>
        )}
      </VStack>
    </Container>
  );
};

export default Login;