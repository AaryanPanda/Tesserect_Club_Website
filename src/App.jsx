import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Tesserex from "./pages/tesserex";
import PastEvents from "./pages/pastEvents";
import Team from "./pages/team";
import Helpdesk from "./pages/helpdesk";
import Login from "./pages/Login";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Analytics } from './firebase';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    Analytics.logPageView(location.pathname);
  }, [location]);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#1a0000] via-[#000919] to-[#1a0019]">
        <Navbar />
        <main className="pt-20 pb-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tesserex" element={<Tesserex />} />
              <Route path="/past-events" element={<PastEvents />} />
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
          </div>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
