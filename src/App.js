// App.js
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import AddReview from "./pages/AddReview";
import Review from "./pages/Review";
import Navbar from "./components/Navbar";
import { BASE_URL } from "./Utils/main";

function App() {
  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch movies
    fetch(`${BASE_URL}/movies`)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });

    // Fetch reviews
    fetch(`${BASE_URL}/reviews`)
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  return (
    <main style={{ height: "100vh" }}>
      <Navbar />
      <Box bg={"gray.200"} minHeight="100vh">
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route
            path="/add-review/:movieId"
            element={<AddReview movies={movies} />}
          />
          <Route
            path="movie-review/:movieId"
            element={<Review movies={movies} reviews={reviews} />}
          />
        </Routes>
      </Box>
    </main>
  );
}

export default App;
