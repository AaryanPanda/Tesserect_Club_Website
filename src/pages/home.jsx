import React from "react"
import Hero from "../components/home/hero"
import AboutSection from "../components/home/aboutSection"
import JoinSection from "../components/home/joinSection"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a0000] via-[#000919] to-[#1a0019] text-white overflow-hidden">
      <Hero />
      <AboutSection />
      <JoinSection />
      <Footer />
    </main>
  )
}