import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NewUser from "./pages/new-user/NewUser";
import Header from "./components/header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/newuser/:userId?" element=<NewUser /> />
      </Routes>
    </>
  );
};

export default App;
