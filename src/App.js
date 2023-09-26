import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import {Navbar,Feed,ChannelDetail,SearchFeed,VideoDetail} from "./components";


const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
     
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />}></Route>
        <Route path="/video/:id" element={<VideoDetail />}></Route>
        <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
        <Route path="/channel/:id" element={<ChannelDetail />}></Route>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
