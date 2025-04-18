import React from "react"
import HelpdeskComingSoon from "../components/helpdesk/HelpdeskComingSoon"
import Footer from "../components/footer"

export default function Helpdesk() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a0000] via-[#000919] to-[#1a0019] text-white pt-20">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#E60000] to-[#0066CC] font-poppins">
              Helpdesk
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Need assistance? Our helpdesk is here to help!
            </p>
          </div>

          <HelpdeskComingSoon />
        </div>
      </section>
      <Footer />
    </main>
  )
}