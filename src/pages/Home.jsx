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

function Home() {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.thedirect.com/media/article_full/newpos_QB7hEyO.jpg"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Zack Snyder's Justice League</Heading>
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
          <Link to={'/movie-review'}>
            <Button variant="ghost" colorScheme="blue">
              View Review
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Home;
