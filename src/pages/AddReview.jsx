import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  Button,
} from "@chakra-ui/react";

function AddReview() {
  const [rating, setRating] = useState(0);

  const incrementRating = () => {
    if (rating < 10) {
      setRating(rating + 1);
    }
  };

  const decrementRating = () => {
    if (rating > 0) {
      setRating(rating - 1);
    }
  };

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack>
        <Heading fontSize={"4xl"} fontFamily={"Gotham"}>
          Add Review
        </Heading>
        <Box rotate={"lg"} bg={"white"} p={8}>
          <Stack>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" placeholder="Name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Review</FormLabel>
              <Textarea name="name" placeholder="Movie review" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Date Posted</FormLabel>
              <Input name="date_posted" type="datetime-local" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Ratings</FormLabel>
              <Button colorScheme="blue" onClick={decrementRating}>
                -
              </Button>
              <span style={{ margin: "0 10px" }}>{rating}</span>
              <Button colorScheme="blue" onClick={incrementRating}>
                +
              </Button>
            </FormControl>
            <Stack pt={3}>
              <Button>Submit</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default AddReview;
