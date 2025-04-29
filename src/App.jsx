import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Analytics } from "./firebase";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Tesserex from "./pages/tesserex";
import PastEvents from "./pages/pastEvents";
import Team from "./pages/team";
import Helpdesk from "./pages/helpdesk";

function App() {
  const location = useLocation();
  useEffect(() => {
    // Track page views
    Analytics.logPageView(location.pathname);
  }, [location]);

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/tesserex"
          element={
            // <ProtectedRoute>
            // </ProtectedRoute>
              <Tesserex />
          }
        />
        <Route
          path="/past-events"
          element={
              <PastEvents />
            // <ProtectedRoute>
            // </ProtectedRoute>
          }
        />
        <Route
          path="/team"
          element={
            <ProtectedRoute>
              <Team />
            </ProtectedRoute>
          }
        />
        <Route
          path="/helpdesk"
          element={
            <ProtectedRoute>
              <Helpdesk />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
