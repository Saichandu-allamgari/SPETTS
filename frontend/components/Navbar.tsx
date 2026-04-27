// // // // // // export default function Navbar() {
// // // // // //   return (
// // // // // //     <nav className="flex justify-between items-center p-4 border-b border-gray-800">
// // // // // //       <h1 className="text-xl font-bold text-red-500">🔥 SPETTS AI</h1>

// // // // // //       <div className="space-x-6 text-sm">
// // // // // //         <a href="#features">Features</a>
// // // // // //         <a href="#about">About</a>
// // // // // //         <a href="#logic">Triage</a>
// // // // // //       </div>
// // // // // //     </nav>
// // // // // //   );
// // // // // // }

// // // // // export default function Navbar() {
// // // // //   return (
// // // // //     <nav className="flex justify-between items-center py-4 border-b border-gray-200">
// // // // //       <h1 className="text-xl font-bold text-red-500">🔥 SPETTS AI</h1>

// // // // //       <div className="space-x-6 text-sm text-gray-600">
// // // // //         <a href="#features" className="hover:text-red-500">Features</a>
// // // // //         <a href="#about" className="hover:text-red-500">About</a>
// // // // //         <a href="#logic" className="hover:text-red-500">Triage</a>
// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // }


// // // // export default function Navbar() {
// // // //   return (
// // // //     <nav className="flex justify-between items-center py-4 border-b max-w-6xl mx-auto px-4">
// // // //       <h1 className="text-xl font-bold text-red-500">🔥 SPETTS AI</h1>

// // // //       <div className="space-x-6 text-gray-600">
// // // //         <a href="#features" className="hover:text-red-500">Features</a>
// // // //         <a href="#logic" className="hover:text-red-500">Triage</a>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // }


// // // export default function Navbar() {
// // //   return (
// // //     <nav className="border-b bg-white">
// // //       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
// // //         <h1 className="text-xl font-bold text-blue-600">
// // //           SPETTS AI
// // //         </h1>

// // //         <div className="space-x-6 text-gray-600">
// // //           <a href="#features" className="hover:text-blue-600">Features</a>
// // //           <a href="#logic" className="hover:text-blue-600">Triage</a>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // }

// // export default function Navbar() {
// //   return (
// //     <nav className="border-b bg-white">
// //       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
// //         <h1 className="text-xl font-bold text-blue-600">
// //           SPETTS AI
// //         </h1>

// //         <div className="space-x-6 text-gray-600">
// //           <a href="/" className="hover:text-blue-600">Home</a>
// //               <a href="#about" className="hover:text-blue-600">About</a>
// //                    <a href="#features" className="hover:text-blue-600">Features</a>
// //            <a href="" className="hover:text-blue-600">Guide</a>

// //           <a href="/triage" className="hover:text-blue-600">Triage</a>
// //            <a href="/login" className="hover:text-blue-600">Login</a>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }


// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const [user, setUser] =
//     useState<any>(null);

//   useEffect(() => {
//     const storedUser =
//       localStorage.getItem("user");

//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   function logout() {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//     window.location.href = "/";
//   }

//   return (
//     <nav className="border-b bg-white shadow-sm">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

//         {/* Logo */}
//         <h1 className="text-xl font-bold text-blue-600">
//           SPETTS AI
//         </h1>

//         {/* Nav Links */}
//         <div className="space-x-6 text-gray-600">

//           {/* Public Navbar */}
//           {!user && (
//             <>
//               <Link
//                 href="/"
//                 className="hover:text-blue-600"
//               >
//                 Home
//               </Link>

//               <a
//                 href="#about"
//                 className="hover:text-blue-600"
//               >
//                 About
//               </a>

//               <a
//                 href="#features"
//                 className="hover:text-blue-600"
//               >
//                 Features
//               </a>

//               <Link
//                 href="/guide"
//                 className="hover:text-blue-600"
//               >
//                 Guide
//               </Link>

//               <Link
//                 href="/login"
//                 className="hover:text-blue-600"
//               >
//                 Login
//               </Link>
//             </>
//           )}

//           {/* After Login */}
//           {user && (
//             <>
//                           <Link
//                 href="/"
//                 className="hover:text-blue-600"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/triage"
//                 className="hover:text-blue-600"
//               >
//                 Access Triage
//               </Link>

//               <Link
//                 href="/guide"
//                 className="hover:text-blue-600"
//               >
//                 Guide
//               </Link>

//               {(user.role ===
//                 "doctor" ||
//                 user.role ===
//                   "admin") && (
//                 <Link
//                   href="/dashboard"
//                   className="hover:text-blue-600"
//                 >
//                   Doctor Dashboard
//                 </Link>
//               )}

//               <span className="text-sm text-gray-500">
//                 {user.name}
//               </span>

//               <button
//                 onClick={logout}
//                 className="text-red-600 hover:text-red-700"
//               >
//                 Logout
//               </button>
//             </>
//           )}

//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] =
    useState<any>(null);

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  }

  return (
    <nav className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
            🚑 SPETTS AI
          </h1>
        </Link>

        {/* Navbar */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">

          {/* PUBLIC NAVBAR */}
          {!user && (
            <>
              <Link
                href="/"
                className="hover:text-blue-600 transition"
              >
                Home
              </Link>

              <a
                href="#about"
                className="hover:text-blue-600 transition"
              >
                About
              </a>

              <a
                href="#features"
                className="hover:text-blue-600 transition"
              >
                Features
              </a>

              <Link
                href="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Login
              </Link>
            </>
          )}

          {/* AFTER LOGIN */}
          {user && (
            <>
              <Link
                href="/"
                className="hover:text-blue-600 transition"
              >
                Home
              </Link>

              <Link
                href="/triage"
                className="hover:text-blue-600 transition"
              >
                Access Triage
              </Link>

              <Link
                href="/guide"
                className="hover:text-blue-600 transition"
              >
                Guide
              </Link>

              {(user.role === "doctor" ||
                user.role === "admin") && (
                <Link
                  href="/doctor-dashboard"
                  className="hover:text-blue-600 transition"
                >
                  Doctor Dashboard
                </Link>
              )}

              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                👤 {user.name}
              </span>

              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}