import { Card, CardHeader, CardBody, Heading,Stack, Box, Text, StackDivider, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function Review({movies}) {
const { id } = useParams();
const selectedMovie = movies.find((movie) => movie.id === id);


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
          <Heading size="md">John Doe</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Movie Review
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Ratings
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Date Posted
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default Review