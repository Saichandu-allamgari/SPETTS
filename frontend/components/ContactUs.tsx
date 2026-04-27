
"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  Ambulance,
} from "lucide-react";

export default function CTABand() {
  const phoneNumber = "+919999999999";
  const whatsappNumber = "919999999999";
  const email = "SPETTS AIindia@gmail.com";

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-red-700" />

      <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-blue-700 to-red-700 opacity-80 animate-pulse" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-16 text-white">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="flex justify-center mb-4">
            <Ambulance
              size={42}
              className="animate-bounce"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Need Emergency Support?
          </h2>

          <p className="mt-3 text-white/90">
            Contact SPETTS AI AI for emergency
            triage assistance, ambulance
            coordination, and hospital support.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-10">

          {/* Call */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">

            <div className="flex items-center gap-2 font-semibold">
              <Phone size={18} />
              Call Us
            </div>

            <a
              href={`tel:${phoneNumber}`}
              className="block mt-3 text-lg font-bold hover:text-yellow-300"
            >
              +91 99999 99999
            </a>

            <p className="text-sm text-white/80 mt-1">
              24/7 Emergency Line
            </p>

          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">

            <div className="flex items-center gap-2 font-semibold">
              <Mail size={18} />
              Email Us
            </div>

            <a
              href={`mailto:${email}`}
              className="block mt-3 text-lg font-bold hover:text-yellow-300 break-all"
            >
              {email}
            </a>

            <p className="text-sm text-white/80 mt-1">
              For partnerships & support
            </p>

          </div>

          {/* WhatsApp */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">

            <div className="flex items-center gap-2 font-semibold">
              <MessageCircle size={18} />
              WhatsApp
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hi SPETTS AI AI, I need emergency support."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-lg font-bold hover:text-yellow-300"
            >
              +91 99999 99999
            </a>

            <p className="text-sm text-white/80 mt-1">
              Fast response support
            </p>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">

          <Link
            href="/triage"
            className="inline-block bg-white text-red-700 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition"
          >
            Start Emergency Triage →
          </Link>

        </div>

      </div>
    </section>
  );
}