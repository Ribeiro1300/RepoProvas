import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import NewExam from "./pages/newExam/NewExam";
import Search from "./pages/search/Search";
import TopBar from "./components/TopBar";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/newExam" element={<NewExam />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
