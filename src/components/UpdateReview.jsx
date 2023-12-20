import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  ModalBody,
  ModalHeader,
  ModalContent,
  Modal,
  ModalOverlay,
  Input,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import { BASE_URL } from "../Utils/main";

function UpdateReview({ reviewId, existingReview, onUpdate }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatedReview, setUpdatedReview] = useState({
    ...existingReview,
    ratings: existingReview.ratings,
    review: existingReview.review,
  });

  const handleUpdate = () => {
    fetch(`${BASE_URL}/reviews/${reviewId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((response) => {
        if (response.ok) {
          onUpdate(); 
          onClose(); 
        } else {
        
        }
      })
      .catch((error) => {
      
      });
  };

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Update Review & Ratings
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update your Review & Ratings</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Review</FormLabel>
              <Textarea
                placeholder="Movie review"
                value={updatedReview.review}
                onChange={(e) =>
                  setUpdatedReview({
                    ...updatedReview,
                    review: e.target.value,
                  })
                }
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Ratings</FormLabel>
              <Input
                placeholder="1-10"
                type="number"
                value={updatedReview.ratings}
                onChange={(e) =>
                  setUpdatedReview({
                    ...updatedReview,
                    ratings: e.target.value,
                  })
                }
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UpdateReview;
