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
  Flex,
  CardFooter,
  Button,
  ButtonGroup
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";
import UpdateReview from "../components/UpdateReview";
import { formatDate } from "../Utils/main";

function Review({ movies, reviews, deleteReview }) {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const MovieId = parseInt(movieId);
    const selectedMovie = movies.find((movie) => movie.id === MovieId);

    if (!selectedMovie) {
      console.error("Movie not found with ID:", MovieId);
      return;
    }

    const reviewsForMovie = reviews.filter(
      (review) => review.movie_id === MovieId
    );

    setMovieReviews(reviewsForMovie);
  }, [movieId, movies, reviews]);

  if (movieReviews.length === 0) {
    return (
      <h5 style={{ fontWeight: "bold" }}>
        No Reviews Available yet for{" "}
        {movies.find((movie) => movie.id === parseInt(movieId))?.Title}
      </h5>
    );
  }

  const selectedMovie = movies.find((movie) => movie.id === parseInt(movieId));

  const handleDeleteReview = (reviewId) => {
    deleteReview(reviewId);
  };

  return (
    <Flex direction="column" p={1}>
      <Card m={4} maxW="4xl" mx="auto" mt={8}>
        <Card key={selectedMovie.id}>
          <CardHeader>
            <Heading size="md">{selectedMovie.Title}</Heading>
          </CardHeader>
          <Image p={8} objectFit="cover" src={selectedMovie.Poster} h={600} />
        </Card>

        <Stack spacing="4">
          {movieReviews.map((review) => (
            <Card key={review.id} m={4} bg={"gray.200"}>
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
                      {formatDate(review.date_posted)}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="10">
                  <UpdateReview
                    reviewId={review.id}
                    existingReview={review}
                  />
                  <Button
                    colorScheme="red"
                    onClick={() => handleDeleteReview(review.id)}
                    variant="ghost"
                    leftIcon={<DeleteIcon color="red" />}
                  >
                    Delete Review
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </Stack>
      </Card>
    </Flex>
  );
}

export default Review;
