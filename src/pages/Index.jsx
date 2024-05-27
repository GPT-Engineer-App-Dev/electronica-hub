import { useState } from "react";
import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, Button, Input, InputGroup, InputRightElement, IconButton, Select } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 199.99, brand: "Brand A", type: "Laptop", image: "https://via.placeholder.com/250" },
    { id: 2, name: "Product 2", price: 299.99, brand: "Brand B", type: "Phone", image: "https://via.placeholder.com/250" },
    { id: 3, name: "Product 3", price: 399.99, brand: "Brand A", type: "Tablet", image: "https://via.placeholder.com/250" },
    { id: 4, name: "Product 4", price: 499.99, brand: "Brand C", type: "Laptop", image: "https://via.placeholder.com/250" },
  ]);

  const [filters, setFilters] = useState({
    price: "",
    brand: "",
    type: ""
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const filteredProducts = products.filter(product => {
    return (
      (filters.price === "" || product.price <= parseFloat(filters.price)) &&
      (filters.brand === "" || product.brand === filters.brand) &&
      (filters.type === "" || product.type === filters.type)
    );
  });

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">ElectroShop</Heading>
        <InputGroup maxW="400px" mr={4}>
          <Input placeholder="Search for products..." />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              onClick={() => console.log("Search functionality to be implemented")}
            />
          </InputRightElement>
        </InputGroup>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">About Us</Link>
          <Link href="#" color="white">Contact Us</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Featured Product</Heading>
        <Text fontSize="xl" mb={4}>Check out our latest and greatest electronic gadgets!</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Filter Section */}
      <Box as="section" py={10}>
        <Heading size="lg" mb={6} textAlign="center">Filter Products</Heading>
        <Flex justify="center" mb={6}>
          <Select placeholder="Select Price" name="price" onChange={handleFilterChange} maxW="200px" mr={4}>
            <option value="200">Under $200</option>
            <option value="300">Under $300</option>
            <option value="400">Under $400</option>
            <option value="500">Under $500</option>
          </Select>
          <Select placeholder="Select Brand" name="brand" onChange={handleFilterChange} maxW="200px" mr={4}>
            <option value="Brand A">Brand A</option>
            <option value="Brand B">Brand B</option>
            <option value="Brand C">Brand C</option>
          </Select>
          <Select placeholder="Select Type" name="type" onChange={handleFilterChange} maxW="200px">
            <option value="Laptop">Laptop</option>
            <option value="Phone">Phone</option>
            <option value="Tablet">Tablet</option>
          </Select>
        </Flex>
      </Box>

      {/* Product Grid */}
      <Box as="section" py={10}>
        <Heading size="lg" mb={6} textAlign="center">Our Products</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          {filteredProducts.map(product => (
            <GridItem key={product.id}>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={6}>
                  <Heading size="md" mb={2}>{product.name}</Heading>
                  <Text>${product.price}</Text>
                </Box>
              </Box>
            </GridItem>
          ))}
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