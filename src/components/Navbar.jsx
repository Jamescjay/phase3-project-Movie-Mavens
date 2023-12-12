import { Box, Flex, HStack } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Box px={4}>
      <Flex justifyContent={"space-between"}>
        <HStack h={16}>
          <StarIcon w={8} h={8} color="red.500" />
          <HStack fontFamily={"Helvetica"} style={{ fontWeight: "bold" }}>
            <Link to={"/"}>MOVIE-MAVENS</Link>
          </HStack>
        </HStack>
        <Flex>
          <HStack>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar