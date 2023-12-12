import { Box, Flex, HStack } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Box px={4}>
      <Flex justifyContent={"space-between"}></Flex>
      <HStack h={16}>
        <StarIcon w={8} h={8} color="red.500" />
        <HStack>
          <Link to={"/"}>MOVIE-MAVENS</Link>
        </HStack>
      </HStack>
    </Box>
  );
}

export default Navbar