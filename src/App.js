import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import AddReview from "./pages/AddReview";
import Review from "./pages/Review";
import Navbar from "./components/Navbar";

const data = [
  {
    id: "1",
    Title: "The Lion King",
    Poster:
      "https://allears.net/wp-content/uploads/2019/02/the-lion-king-poster-002.jpg",
  },
  {
    id: "2",
    Title: "Mowgli: Legend of the Jungle",
    Poster: "https://reflector.uindy.edu/wp-content/uploads/2018/12/mowgli.jpg",
  },
  {
    id: "3",
    Title: "Doctor Strange",
    Poster:
      "https://hcmoviereviews.files.wordpress.com/2016/10/doctor-strange-quad-poster.jpg",
  },
  {
    id: "4",
    Title: "John Wick",
    Poster:
      "https://static-prod.adweek.com/wp-content/uploads/2019/05/john-wick-poster-qa-hed-page-2019.jpg",
  },
  {
    id: "5",
    Title: "Zack Snyder's Justice League",
    Poster:
      "https://images.thedirect.com/media/article_full/newpos_QB7hEyO.jpg",
  },
  {
    id: "6",
    Title: "Barbie",
    Poster:
      "https://pyxis.nymag.com/v1/imgs/5af/3b0/c16411171ab1660f356026acb1fd3c6c8c-barbie-poster.1x.rsocial.w1200.jpg",
  },
];

function App() {
  return (
    <main style={{ height: "100vh" }}>
      <Navbar />
      <Box bg={"gray.200"} minHeight="100vh">
        <Routes>
          <Route path="/" element={<Home data={data} />}></Route>
          <Route path="add-review" element={<AddReview />}></Route>
          <Route path="movie-review/:id" element={<Review movies={data} />}></Route>
        </Routes>
      </Box>
    </main>
  );
}

export default App;
