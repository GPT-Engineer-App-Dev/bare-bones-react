import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { session } = useSupabaseAuth();
  const { data: events, isLoading, error } = useEvents();
  const navigate = useNavigate();

  if (!session) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">You need to log in to see the events.</Text>
          <Button colorScheme="blue" onClick={() => navigate("/login")}>Log In</Button>
        </VStack>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Text>Loading events...</Text>
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Text>Error loading events: {error.message}</Text>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Events</Text>
        {events.length === 0 ? (
          <Text>No events available.</Text>
        ) : (
          events.map(event => (
            <VStack key={event.id} spacing={2} alignItems="flex-start">
              <Text fontWeight="bold">{event.name}</Text>
              <Text>{event.description}</Text>
              <Text>{new Date(event.date).toLocaleDateString()}</Text>
            </VStack>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Index;