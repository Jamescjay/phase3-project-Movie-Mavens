import {
  Flex,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";



function Home({data}) {
  const [movies, setMovies] = useState(data)
  return (
    <Flex direction="column" p={4}>
      <Input placeholder="Search" bg={"white"} />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default Home;
