
// // export default function Footer() {
// //   return (
// //     <footer className="border-t py-6 mt-10">
// //       <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
// //         {/* © 2026 SPETTS AI | Medical Project */}
// //         Terms of Use | Privacy Policy |
// //          © 2026 SPETTS AI |
// //          All rights reserved.
// //       </div>
// //     </footer>
// //   );
// // }

// "use client";

// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 text-white mt-10">

//       {/* TOP SECTION */}
//       <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">

//         {/* BRAND */}
//         <div>
//           <h2 className="text-2xl font-bold text-red-400">
//             SPETTS AI AI
//           </h2>

//           <p className="mt-2 text-sm text-slate-300 leading-6">
//             Smart Pre-hospital Emergency
//             Triage & Transport System.
//           </p>

//           <p className="mt-3 text-sm italic text-slate-400">
//             “Care Begins Before Arrival”
//           </p>

//           {/* SOCIAL */}
//           <div className="flex gap-3 mt-5">

//             <Link
//               href="#"
//               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
//             >
//               <Facebook size={18} />
//             </Link>

//             <Link
//               href="#"
//               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
//             >
//               <Instagram size={18} />
//             </Link>

//             <Link
//               href="#"
//               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
//             >
//               <Linkedin size={18} />
//             </Link>

//             <Link
//               href="#"
//               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
//             >
//               <Twitter size={18} />
//             </Link>

//             <Link
//               href="#"
//               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
//             >
//               <Youtube size={18} />
//             </Link>

//           </div>
//         </div>

//         {/* QUICK LINKS */}
//         <div>
//           <h4 className="font-semibold text-lg">
//             Quick Links
//           </h4>

//           <ul className="mt-4 space-y-3 text-sm text-slate-300">

//             <li>
//               <Link href="/" className="hover:text-red-400">
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link href="/triage" className="hover:text-red-400">
//                 Access Triage
//               </Link>
//             </li>

//             <li>
//               <Link href="/guide" className="hover:text-red-400">
//                 Guide
//               </Link>
//             </li>

//             <li>
//               <Link href="/dashboard" className="hover:text-red-400">
//                 Doctor Dashboard
//               </Link>
//             </li>

//           </ul>
//         </div>

//         {/* FEATURES */}
//         <div>
//           <h4 className="font-semibold text-lg">
//             Features
//           </h4>

//           <ul className="mt-4 space-y-3 text-sm text-slate-300">
//             <li>AI Emergency Triage</li>
//             <li>Patient Registration</li>
//             <li>Live Dashboard</li>
//             <li>Emergency Alerts</li>
//             <li>Ambulance Routing</li>
//           </ul>
//         </div>

//         {/* CONTACT */}
//         <div>
//           <h4 className="font-semibold text-lg">
//             Contact Us
//           </h4>

//           <ul className="mt-4 space-y-4 text-sm text-slate-300">

//             <li className="flex gap-2">
//               <Mail size={16} className="mt-0.5" />
//               <span>SPETTS AIindia@gmail.com</span>
//             </li>

//             <li className="flex gap-2">
//               <MapPin size={16} className="mt-0.5" />
//               <span>Hyderabad, Telangana, India</span>
//             </li>

//             <li className="flex gap-2">
//               <Phone size={16} className="mt-0.5" />
//               <span>+91 XXXXX XXXXX</span>
//             </li>

//           </ul>
//         </div>

//       </div>

//       {/* BOTTOM SECTION */}
//       <div className="border-t border-white/10">
//         <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-400">

//           <div className="flex gap-4 flex-wrap justify-center">

//             <Link href="/terms" className="hover:text-white">
//               Terms of Use
//             </Link>

//             <Link href="/privacy" className="hover:text-white">
//               Privacy Policy
//             </Link>

//           </div>

//           <span>
//             © {new Date().getFullYear()} SPETTS AI AI |
//             All rights reserved.
//           </span>

//         </div>
//       </div>

//     </footer>
//   );
// }


"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-10">

      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-red-400">
            SPETTS AI AI
          </h2>

          <p className="mt-2 text-sm text-slate-300 leading-6">
            Smart Pre-hospital Emergency Triage &
            Transport System.
          </p>

          <p className="mt-3 text-sm italic text-slate-400">
            “Care Begins Before Arrival”
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-5 text-xl">

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              📘
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              📷
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              💼
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              🐦
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              ▶️
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold text-lg">
            Quick Links
          </h4>

          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <Link href="/" className="hover:text-red-400">
                Home
              </Link>
            </li>

            <li>
              <Link href="/triage" className="hover:text-red-400">
                Access Triage
              </Link>
            </li>

            <li>
              <Link href="/guide" className="hover:text-red-400">
                Guide
              </Link>
            </li>

            <li>
              <Link href="/dashboard" className="hover:text-red-400">
                Doctor Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* FEATURES */}
        <div>
          <h4 className="font-semibold text-lg">
            Features
          </h4>

          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>AI Emergency Triage</li>
            <li>Patient Registration</li>
            <li>Live Dashboard</li>
            <li>Emergency Alerts</li>
            <li>Ambulance Routing</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-lg">
            Contact Us
          </h4>

          <ul className="mt-4 space-y-4 text-sm text-slate-300">

            <li>
              📧 SPETTS AIindia@gmail.com
            </li>

            <li>
              📍 Hyderabad, Telangana, India
            </li>

            <li>
              📞 +91 XXXXX XXXXX
            </li>

          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-400">

          <div className="flex gap-4">

            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>

            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>

          </div>

          <span>
            © {new Date().getFullYear()} SPETTS AI AI |
            All rights reserved.
          </span>

        </div>
      </div>

    </footer>
  );
}