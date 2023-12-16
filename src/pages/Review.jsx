import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
  Image,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";


function Review({ movies, reviews }) {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    const MovieId = parseInt(movieId);
    const selectedMovie = movies.find((movie) => movie.id === MovieId);

    if (!selectedMovie) {
      console.error("Movie not found with ID:", MovieId);
      return;
    }

    // Find the review for the selected movie from the reviews array
    const movieReview = reviews.find((review) => review.movie_id === MovieId);

    setReview(movieReview);
  }, [movieId, movies, reviews]);

  if (!review) {
    return (
      <h5 style={{ fontWeight: "bold" }}>
        No Reviews Available yet for{" "}
        {movies.find((movie) => movie.id === parseInt(movieId))?.Title}
      </h5>
    );
  }

  const selectedMovie = movies.find((movie) => movie.id === parseInt(movieId));

  return (
    <>
      <Card key={selectedMovie.id}>
        <CardHeader>
          <Heading size="md">{selectedMovie.Title}</Heading>
        </CardHeader>
        <Image objectFit="cover" src={selectedMovie.Poster} h={500} />
      </Card>

      <Card>
        <CardHeader>
          <Heading size="md">{review.name}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Movie Review
              </Heading>
              <Text pt="2" fontSize="sm">
                {review.review}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Ratings
              </Heading>
              <Text pt="2" fontSize="sm">
                {review.ratings}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Date Posted
              </Heading>
              <Text pt="2" fontSize="sm">
                {review.date_posted}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default Review;
