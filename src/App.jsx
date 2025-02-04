import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />} />
             <Route path="/login" element={<Login />} />
             <Route path="/profile" element={<Profile />} />
             <Route path="/footer" element={<Footer/ >} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
