import React from "react"
import PastEventsGallery from "../components/pastEvents/pastEventGallery"
import Footer from "../components/footer"

export default function PastEvents() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0000] via-[#000919] to-[#1a0000] text-white pt-20">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#4d9fff] font-poppins">
              Past Events
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-[#b3b3b3]">
              Take a look at our previous events and the amazing memories we've created together!
            </p>
          </div>

          <PastEventsGallery />
        </div>
      </section>
      <Footer />
    </main>
  )
}
