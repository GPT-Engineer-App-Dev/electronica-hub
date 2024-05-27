import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, Button, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Implement the search functionality here
  };

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">About Us</Link>
          <Link href="#" color="white">Contact Us</Link>
          <InputGroup maxW="300px">
            <Input
              placeholder="Search for products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              bg="white"
              color="black"
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                onClick={handleSearch}
              />
            </InputRightElement>
          </InputGroup>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Featured Product</Heading>
        <Text fontSize="xl" mb={4}>Check out our latest and greatest electronic gadgets!</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Box as="section" py={10}>
        <Heading size="lg" mb={6} textAlign="center">Our Products</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/250" alt="Product 1" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 1</Heading>
                <Text>$199.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/250" alt="Product 2" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 2</Heading>
                <Text>$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/250" alt="Product 3" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 3</Heading>
                <Text>$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/250" alt="Product 4" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 4</Heading>
                <Text>$499.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} textAlign="center">
        <VStack spacing={4}>
          <HStack spacing={8}>
            <Link href="#"><FaFacebook size="24px" /></Link>
            <Link href="#"><FaTwitter size="24px" /></Link>
            <Link href="#"><FaInstagram size="24px" /></Link>
          </HStack>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;