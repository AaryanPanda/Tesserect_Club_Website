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
import Register from "./pages/register";

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
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tesserex"
          element={
            <ProtectedRoute>
              <Tesserex />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register/:id"
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/past-events"
          element={
            <ProtectedRoute>
              <PastEvents />
            </ProtectedRoute>
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
