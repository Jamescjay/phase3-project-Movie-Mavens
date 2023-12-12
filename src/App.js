import { Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Home from "./pages/Home";
import AddReview from "./pages/AddReview";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Container>
<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="add-review" element={<AddReview />}></Route>
</Routes>
</Container>
    </>
  );
}

export default App;
