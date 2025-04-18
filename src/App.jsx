import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Tesserex from "./pages/tesserex";
import PastEvents from "./pages/pastEvents";
import Team from "./pages/team";
import Helpdesk from "./pages/helpdesk";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tesserex" element={<Tesserex />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/team" element={<Team />} />
        <Route path="/helpdesk" element={<Helpdesk />} />
      </Routes>
    </>
  );
}

export default App;
