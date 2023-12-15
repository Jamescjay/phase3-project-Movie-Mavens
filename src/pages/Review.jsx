import { Card, CardHeader, CardBody, Heading,Stack, Box, Text, StackDivider, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../Utils/main";

function Review({movies}) {
const { id } = useParams();
const [review, setReview] = useState(null);

const selectedMovie = movies.find((movie) => movie.id === id);

useEffect(() => {
  fetch(`${BASE_URL}/reviews/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setReview(data);
    })
    .catch((err) => {
      console.log(err);
    });
}, [BASE_URL, id]);

if (!review) {
  return (
    <h5 style={{ fontWeight: "bold" }}>
      No Reviews Available yet for {selectedMovie.Title}
    </h5>
  );
}


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

export default Review