// Home.jsx
import { Center, Flex, Heading, Input, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Flex direction="column" p={4}>
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        bg={"white"}
      />

      {searchMovies.length > 0 ? (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
          {searchMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </SimpleGrid>
      ) : (
        <Center>
          <Heading size={"2xl"}>Oops! Movie not found</Heading>
        </Center>
      )}
    </Flex>
  );
}

export default Home;
