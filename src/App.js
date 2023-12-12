import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import AddReview from "./pages/AddReview";
import Review from "./pages/Review";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main style={{ height: "100vh" }}>
      <Navbar />
      <Box bg={"gray.200"} style={{ height: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="add-review" element={<AddReview />}></Route>
          <Route path="movie-review" element={<Review/>}></Route>
        </Routes>
      </Box>
    </main>
  );
}

export default App;
