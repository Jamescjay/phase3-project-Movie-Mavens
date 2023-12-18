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
import { useParams } from "react-router-dom";
import { BASE_URL } from "../Utils/main";

function AddReview() {
  const { movieId } = useParams();
  const initialData = {
    name: '',
    review: '',
    date_posted: '',
    ratings: 0,
    movie_id: parseInt(movieId),
  };

  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const incrementRating = () => {
    if (rating < 10) {
      setRating(rating + 1);
      setFormData({
        ...formData,
        ratings: rating + 1,
      });
    }
  };

  const decrementRating = () => {
    if (rating > 0) {
      setRating(rating - 1);
      setFormData({
        ...formData,
        ratings: rating - 1,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(`${BASE_URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setFormData(initialData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };


  return (
    <Flex align={"center"} justify={"center"}>
      <Stack>
        <Heading fontSize={"4xl"} fontFamily={"Gotham"}>
          Add Review
        </Heading>
        <Box as="form" rotate={"lg"} bg={"white"} p={8} onSubmit={handleSubmit}>
          <Stack>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                placeholder="Name"
                required
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Review</FormLabel>
              <Textarea
                name="review"
                placeholder="Movie review"
                required
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Date Posted</FormLabel>
              <Input
                name="date_posted"
                type="datetime-local"
                required
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Ratings</FormLabel>
              <Button
                variant="ghost"
                colorScheme="red"
                onClick={decrementRating}
              >
                -
              </Button>
              <span style={{ margin: "0 10px" }}>
                {rating}
              </span>
              <Button
                variant="ghost"
                colorScheme="red"
                onClick={incrementRating}
              >
                +
              </Button>
            </FormControl>
            <Stack pt={3}>
              <Button isLoading={isLoading} loadingText="Uploading" colorScheme="blue" type="submit">Submit</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default AddReview;
