// "use client";

// import { useState } from "react";
// import Image from "next/image";

// type GuideKey =
//   | "overview"
//   | "cpr"
//   | "ivfluid"
//   | "airway"
//   | "spinal";

// export default function GuidePage() {
//   const [active, setActive] =
//     useState<GuideKey>("overview");

//   const guides = {
//     overview: {
//       title: "Emergency Guide Center",
//       image: "/guide/overview.jpg",
//       desc: `This section provides quick emergency response guides for first responders, nurses, paramedics, and emergency teams. 
// Choose a guide below to instantly view step-by-step emergency actions during critical situations.`,
//       points: [
//         "✔ CPR Emergency Response",
//         "✔ IV Fluid Resuscitation",
//         "✔ Airway Alert Management",
//         "✔ Spinal Immobilization",
//       ],
//     },

//     cpr: {
//       title: "CPR Guide",
//       image: "/CPR-2.jpeg",
//       desc: `CPR (Cardiopulmonary Resuscitation) is performed when a person is unconscious and not breathing normally.`,
//       points: [
//         "1. Check response",
//         "2. Call emergency support",
//         "3. Start chest compressions",
//         "4. Open airway",
//         "5. Give rescue breaths",
//         "6. Continue 30:2 cycle",
//       ],
//     },

//     ivfluid: {
//       title: "IV Fluid Resuscitation",
//       image: "/IV-Fluid.jpeg",
//       desc: `Used for dehydration, blood loss, shock, or low blood pressure patients.`,
//       points: [
//         "1. Prepare IV equipment",
//         "2. Insert IV line",
//         "3. Start normal saline / RL",
//         "4. Monitor pulse & BP",
//         "5. Continue as advised",
//       ],
//     },

//     airway: {
//       title: "Airway Alert",
//       image: "/Airway-alert.jpeg",
//       desc: `Maintain airway immediately if patient has breathing difficulty or obstruction.`,
//       points: [
//         "1. Check airway blockage",
//         "2. Head tilt / jaw thrust",
//         "3. Insert airway adjunct",
//         "4. Give oxygen support",
//         "5. Prepare advanced airway",
//       ],
//     },

//     spinal: {
//       title: "Spinal Immobilization",
//       image: "/spinal.jpeg",
//       desc: `Used during trauma, road accidents, falls, or suspected neck/back injury.`,
//       points: [
//         "1. Manual neck stabilization",
//         "2. Apply cervical collar",
//         "3. Use spine board",
//         "4. Secure straps firmly",
//         "5. Avoid unnecessary movement",
//       ],
//     },
//   };

//   const current = guides[active];

//   return (
//     <section className="min-h-screen bg-slate-50 py-14">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* HEADER */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold text-slate-800">
//             🚑 Emergency Medical Guides
//           </h1>

//           <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
//             Quick reference guides for life-saving
//             emergency interventions.
//           </p>
//         </div>

//         {/* MENU */}
//         <div className="grid md:grid-cols-5 gap-3 mb-10">

//           <button
//             onClick={() =>
//               setActive("overview")
//             }
//             className={`p-3 rounded-xl font-medium ${
//               active === "overview"
//                 ? "bg-blue-600 text-white"
//                 : "bg-white border"
//             }`}
//           >
//             Overview
//           </button>

//           <button
//             onClick={() =>
//               setActive("cpr")
//             }
//             className={`p-3 rounded-xl font-medium ${
//               active === "cpr"
//                 ? "bg-red-600 text-white"
//                 : "bg-white border"
//             }`}
//           >
//             CPR
//           </button>

//           <button
//             onClick={() =>
//               setActive("ivfluid")
//             }
//             className={`p-3 rounded-xl font-medium ${
//               active === "ivfluid"
//                 ? "bg-green-600 text-white"
//                 : "bg-white border"
//             }`}
//           >
//             IV Fluid
//           </button>

//           <button
//             onClick={() =>
//               setActive("airway")
//             }
//             className={`p-3 rounded-xl font-medium ${
//               active === "airway"
//                 ? "bg-orange-600 text-white"
//                 : "bg-white border"
//             }`}
//           >
//             Airway Alert
//           </button>

//           <button
//             onClick={() =>
//               setActive("spinal")
//             }
//             className={`p-3 rounded-xl font-medium ${
//               active === "spinal"
//                 ? "bg-purple-600 text-white"
//                 : "bg-white border"
//             }`}
//           >
//             Spinal Care
//           </button>

//         </div>

//         {/* CONTENT */}
//         <div className="grid md:grid-cols-2 gap-10 items-start">

//           {/* IMAGE */}
//           <div className="bg-white rounded-2xl shadow p-4">
//             <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
//               <Image
//                 src={current.image}
//                 alt={current.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           {/* INFO */}
//           <div className="bg-white rounded-2xl shadow p-8">

//             <h2 className="text-3xl font-bold text-slate-800 mb-4">
//               {current.title}
//             </h2>

//             <p className="text-slate-600 leading-7 mb-6">
//               {current.desc}
//             </p>

//             <div className="space-y-3">
//               {current.points.map(
//                 (item, i) => (
//                   <div
//                     key={i}
//                     className="p-3 rounded-xl bg-slate-50 border"
//                   >
//                     {item}
//                   </div>
//                 )
//               )}
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";

type GuideKey =
  | "overview"
  | "cpr"
  | "ivfluid"
  | "airway"
  | "spinal";

export default function GuidePage() {
  const [active, setActive] =
    useState<GuideKey>("overview");

  const guides = {
    overview: {
      title: "Emergency Guide Center",
      image: "/guide/overview.jpg",
      desc: `This section provides quick emergency response guides for first responders, nurses, paramedics, and emergency teams.
Choose a guide below to instantly view step-by-step emergency actions during critical situations.`,
      points: [
        "✔ CPR Emergency Response",
        "✔ IV Fluid Resuscitation",
        "✔ Airway Alert Management",
        "✔ Spinal Immobilization",
      ],
    },

    cpr: {
      title: "CPR Guide",
      image: "/CPR-2.jpeg",
      desc: `CPR (Cardiopulmonary Resuscitation) is performed when a person is unconscious and not breathing normally.`,
      points: [
        "1. Check response",
        "2. Call emergency support",
        "3. Start chest compressions",
        "4. Open airway",
        "5. Give rescue breaths",
        "6. Continue 30:2 cycle",
      ],
    },

    ivfluid: {
      title: "IV Fluid Resuscitation",
      image: "/IV-Fluid.jpeg",
      desc: `Used for dehydration, blood loss, shock, or low blood pressure patients.`,
      points: [
        "1. Prepare IV equipment",
        "2. Insert IV line",
        "3. Start normal saline / RL",
        "4. Monitor pulse & BP",
        "5. Continue as advised",
      ],
    },

    airway: {
      title: "Airway Alert",
      image: "/Airway-alert.jpeg",
      desc: `Maintain airway immediately if patient has breathing difficulty or obstruction.`,
      points: [
        "1. Check airway blockage",
        "2. Head tilt / jaw thrust",
        "3. Insert airway adjunct",
        "4. Give oxygen support",
        "5. Prepare advanced airway",
      ],
    },

    spinal: {
      title: "Spinal Immobilization",
      image: "/spinal.jpeg",
      desc: `Used during trauma, road accidents, falls, or suspected neck/back injury.`,
      points: [
        "1. Manual neck stabilization",
        "2. Apply cervical collar",
        "3. Use spine board",
        "4. Secure straps firmly",
        "5. Avoid unnecessary movement",
      ],
    },
  };

  const current = guides[active];

  return (
    <section className="min-h-screen bg-slate-50 py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800">
            🚑 Emergency Medical Guides
          </h1>

          <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
            Quick reference guides for life-saving
            emergency interventions.
          </p>
        </div>

        {/* MENU */}
        <div className="grid md:grid-cols-5 gap-3 mb-10">

          {[
            ["overview", "Overview", "bg-blue-600"],
            ["cpr", "CPR", "bg-red-600"],
            ["ivfluid", "IV Fluid", "bg-green-600"],
            ["airway", "Airway Alert", "bg-orange-600"],
            ["spinal", "Spinal Care", "bg-purple-600"],
          ].map(([key, label, color]) => (
            <button
              key={key}
              onClick={() =>
                setActive(
                  key as GuideKey
                )
              }
              className={`p-3 rounded-xl font-medium transition ${
                active === key
                  ? `${color} text-white`
                  : "bg-white border"
              }`}
            >
              {label}
            </button>
          ))}

        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* IMAGE */}
          <div className="bg-white rounded-2xl shadow p-4">

            {/* Auto height image */}
            <div className="relative w-full min-h-[300px] flex justify-center items-center">
              <Image
                src={current.image}
                alt={current.title}
                width={900}
                height={700}
                className="w-full h-auto max-h-[650px] object-contain rounded-xl"
                priority
              />
            </div>

          </div>

          {/* INFO */}
          <div className="bg-white rounded-2xl shadow p-8">

            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              {current.title}
            </h2>

            <p className="text-slate-600 leading-7 mb-6">
              {current.desc}
            </p>

            <div className="space-y-3">
              {current.points.map(
                (item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 border"
                  >
                    {item}
                  </div>
                )
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}