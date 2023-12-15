import {
  Button,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MovieCard({movie}) {
  return (
    
      <Card maxW="sm" position={"relative"} m={4}>
        <CardBody>
          <Image src={movie.Poster} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{movie.Title}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link to={"/add-review"}>
              <Button variant="solid" colorScheme="blue">
                Add Review and Ratings
              </Button>
            </Link>
            <Link to={`/movie-review/${movie.id}`}>
              <Button variant="ghost" colorScheme="blue">
                View Review
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    
  );
}

export default MovieCard;
