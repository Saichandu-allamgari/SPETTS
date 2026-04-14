// // "use client";
// // import { useState } from "react";

// // export default function Triage({ patient }: any) {

// //   if (!patient) return null;

// //   const [data, setData] = useState({
// //     conscious: "",
// //     breathing: "",
// //     pulse: "",
// //     injury: "",
// //     pain: "",
// //     neuro: "",
// //     burn: "",
// //     smokeInhalation: "",
// //   });

// //   const [result, setResult] = useState("");
// //   const [alerts, setAlerts] = useState("");
// //   const [reason, setReason] = useState("");
// //   const [action, setAction] = useState("");

// //   function triage() {
// //     const {
// //       conscious,
// //       breathing,
// //       pulse,
// //       injury,
// //       pain,
// //       neuro,
// //       burn,
// //       smokeInhalation,
// //     } = data;

// //     if (
// //       !conscious ||
// //       !breathing ||
// //       !pulse ||
// //       !injury ||
// //       !pain ||
// //       !neuro ||
// //       !burn ||
// //       !smokeInhalation
// //     ) {
// //       alert("Please fill all fields");
// //       return;
// //     }

// //     let res = "";
// //     let alertText = "";
// //     let act = "";
// //     let reasons: string[] = [];

// //     // 🔴 TRIAGE LOGIC
// //     if (conscious === "No" && breathing === "Absent") {
// //       res = "⚫ BLACK - No Survival";
// //       act = "Focus on other patients";
// //       reasons.push("No breathing", "Unconscious patient");

// //     } else if (
// //       conscious === "No" ||
// //       breathing === "Irregular" ||
// //       pulse === "Weak" ||
// //       burn === ">30%" ||
// //       smokeInhalation === "Yes"
// //     ) {
// //       res = "🔴 RED - Critical";
// //       act = "Airway + Oxygen + IV + Rapid transport";

// //       if (conscious === "No") reasons.push("Unconscious");
// //       if (breathing === "Irregular") reasons.push("Irregular breathing");
// //       if (pulse === "Weak") reasons.push("Weak pulse");
// //       if (burn === ">30%") reasons.push("Severe burns");
// //       if (smokeInhalation === "Yes") reasons.push("Smoke inhalation");

// //     } else if (burn === "10-30%") {
// //       res = "🟡 YELLOW - Urgent";
// //       act = "Monitor + Fluids + Dressing";
// //       reasons.push("Moderate burns");

// //     } else {
// //       res = "🟢 GREEN - Stable";
// //       act = "Basic care";
// //       reasons.push("Vitals stable");
// //     }

// //     // ⚠️ ALERTS
// //     if (
// //       ((injury === "High-speed accident" || injury === "Fall") &&
// //         (pain === "Yes" || neuro !== "No")) ||
// //       conscious === "No"
// //     ) {
// //       alertText += "⚠️ Spinal Injury – Immobilize spine\n";
// //     }

// //     if (breathing !== "Normal" || smokeInhalation === "Yes") {
// //       alertText += "⚠️ Airway Alert – Provide oxygen\n";
// //     }

// //     if (pulse === "Weak" || burn === ">30%") {
// //       alertText += "⚠️ Shock Alert – Start IV fluids\n";
// //     }

// //     // ⏱ ETA
// //     const eta = Math.floor(Math.random() * 10) + 5;
// //     act += `\n🚑 ETA: ${eta} mins`;

// //     // 💾 SAVE
// //     const newPatient = {
// //       name: patient.name,
// //       result: res,
// //       time: new Date().toLocaleTimeString(),
// //     };

// //     const existing = JSON.parse(localStorage.getItem("patients") || "[]");
// //     existing.push(newPatient);
// //     localStorage.setItem("patients", JSON.stringify(existing));

// //     // SET STATE
// //     setResult(res);
// //     setAlerts(alertText);
// //     setReason(reasons.join("\n"));
// //     setAction(act);
// //   }

// //   return (
// //     <section className="bg-white py-16">
// //       <div className="max-w-6xl mx-auto px-4">

// //         <h2 className="text-2xl font-bold text-center mb-6">
// //           🚑 Intelligent Triage System
// //         </h2>

// //         {/* PATIENT INFO */}
// //         <div className="max-w-md mx-auto bg-blue-50 p-4 rounded mb-6">
// //           <p><strong>Name:</strong> {patient.name}</p>
// //           <p><strong>Gender:</strong> {patient.gender}</p>
// //           <p><strong>Age:</strong> {patient.age}</p>
// //         </div>

// //         {/* FORM */}
// //         <div className="max-w-md mx-auto border p-6 rounded">

// //           {fields.map((f) => (
// //             <div key={f.key} className="mb-3">
// //               <label className="text-sm block mb-1">{f.label}</label>

// //               <select
// //                 defaultValue=""
// //                 className="w-full border p-2 rounded"
// //                 onChange={(e) =>
// //                   setData({ ...data, [f.key]: e.target.value })
// //                 }
// //               >
// //                 <option value="" disabled>Select</option>
// //                 {f.options.map((o) => (
// //                   <option key={o}>{o}</option>
// //                 ))}
// //               </select>
// //             </div>
// //           ))}

// //           <button
// //             onClick={triage}
// //             className="w-full bg-red-600 text-white py-2 mt-4 rounded hover:bg-red-700"
// //           >
// //             🚑 TRIAGE NOW
// //           </button>

// //           {/* RESULT */}
//           // {result && (
//           //   <div className="mt-6 space-y-3">

//           //     <h3 className="text-xl font-bold">{result}</h3>

//           //     {/* ✅ FIXED REASON UI */}
//           //     <div>
//           //       <p className="text-blue-600 font-semibold">🧠 Reason:</p>
//           //       <ul className="list-disc ml-5 text-blue-600">
//           //         {reason.split("\n").map((r, i) => (
//           //           <li key={i}>{r}</li>
//           //         ))}
//           //       </ul>
//           //     </div>

//           //     <p className="text-orange-600 whitespace-pre-line">
//           //       {alerts}
//           //     </p>

//           //     <p className="text-gray-700 whitespace-pre-line">
//           //       {action}
//           //     </p>

//           //   </div>
//           // )}

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // const fields = [
// //   { key: "conscious", label: "Conscious?", options: ["Yes", "No"] },
// //   { key: "breathing", label: "Breathing", options: ["Normal", "Irregular", "Absent"] },
// //   { key: "pulse", label: "Pulse", options: ["Normal", "Weak", "Absent"] },
// //   { key: "injury", label: "Mechanism of Injury", options: ["Minor", "High-speed accident", "Fall", "Fire burn"] },
// //   { key: "pain", label: "Neck/Back Pain", options: ["No", "Yes"] },
// //   { key: "neuro", label: "Neurological Deficits", options: ["No", "Weakness", "Numbness", "Paralysis"] },
// //   { key: "burn", label: "Burn %", options: ["<10%", "10-30%", ">30%"] },
// //   { key: "smokeInhalation", label: "Smoke Inhalation", options: ["No", "Yes"] },
// // ];



// // src/components/Triage.tsx
// "use client";

// import { useState } from "react";

// export default function Triage({ patient, onNext }: any) {
//   const [data, setData] = useState({
//     conscious: "",
//     breathing: "",
//     pulse: "",
//     injury: "",
//     pain: "",
//     neuro: "",
//     burn: "",
//     smoke: "",
//   });

//   const [result, setResult] = useState("");
//   const [alerts, setAlerts] = useState("");
//   const [action, setAction] = useState("");

//   function triage() {
//     const {
//       conscious,
//       breathing,
//       pulse,
//       injury,
//       pain,
//       neuro,
//       burn,
//       smoke,
//     } = data;

//     if (
//       !conscious ||
//       !breathing ||
//       !pulse ||
//       !injury ||
//       !pain ||
//       !neuro ||
//       !burn ||
//       !smoke
//     ) {
//       alert("Please fill all fields");
//       return;
//     }

//     let res = "";
//     let al = "";
//     let act = "";

//     if (conscious === "No" && breathing === "Absent") {
//       res = "⚫ BLACK";
//       act = "No survival";
//     } else if (
//       conscious === "No" ||
//       breathing === "Irregular" ||
//       pulse === "Weak" ||
//       burn === ">30%" ||
//       smoke === "Yes"
//     ) {
//       res = "🔴 RED";
//       act = "Immediate intervention";
//     } else if (burn === "10-30%") {
//       res = "🟡 YELLOW";
//       act = "Urgent treatment";
//     } else {
//       res = "🟢 GREEN";
//       act = "Basic care";
//     }

//     if (
//       ((injury === "High-speed accident" ||
//         injury === "Fall") &&
//         (pain === "Yes" || neuro !== "No")) ||
//       conscious === "No"
//     ) {
//       al += "⚠️ Spinal Alert\n";
//     }

//     if (breathing !== "Normal" || smoke === "Yes") {
//       al += "⚠️ Airway Alert\n";
//     }

//     if (pulse === "Weak") {
//       al += "⚠️ Shock Alert\n";
//     }

//     const eta = Math.floor(Math.random() * 10) + 5;
//     act += ` | ETA ${eta} mins`;

//     const old = JSON.parse(
//       localStorage.getItem("patients") || "[]"
//     );

//     old.push({
//       ...patient,
//       ...data,
//       result: res,
//       alerts: al,
//       time: new Date().toLocaleTimeString(),
//     });

//     localStorage.setItem(
//       "patients",
//       JSON.stringify(old)
//     );

//     setResult(res);
//     setAlerts(al);
//     setAction(act);
//   }

//   return (
//     <section className="bg-slate-50 py-14">
//       <div className="max-w-6xl mx-auto px-4">

//         <h2 className="text-3xl font-bold text-center mb-8">
//           🚑 Clinical Triage
//         </h2>

//         <div className="max-w-xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">

//           <div className="mb-5 text-sm bg-blue-50 p-4 rounded">
//             <p><b>Name:</b> {patient.name}</p>
//             <p><b>Gender:</b> {patient.gender}</p>
//             <p><b>Age Group:</b> {patient.age}</p>
//           </div>

//           {fields.map((item) => (
//             <div key={item.key} className="mb-4">
//               <label className="block mb-1 text-sm font-medium">
//                 {item.label}
//               </label>

//               <select
//                 defaultValue=""
//                 className="w-full border rounded p-3"
//                 onChange={(e) =>
//                   setData({
//                     ...data,
//                     [item.key]: e.target.value,
//                   })
//                 }
//               >
//                 <option value="" disabled>Select</option>
//                 {item.options.map((op) => (
//                   <option key={op}>{op}</option>
//                 ))}
//               </select>
//             </div>
//           ))}

//           <button
//             onClick={triage}
//             className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
//           >
//             TRIAGE NOW
//           </button>

//           {result && (
//             <div className="mt-6 border-t pt-5 space-y-2">

//               <h3 className="text-xl font-bold">
//                 {result}
//               </h3>

//               <p className="whitespace-pre-line text-orange-600">
//                 {alerts}
//               </p>

//               <p>{action}</p>

//               <button
//                 onClick={onNext}
//                 className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
//               >
//                 NEXT PATIENT →
//               </button>

//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// const fields = [
//   {
//     key: "conscious",
//     label: "Conscious?",
//     options: ["Yes", "No"],
//   },
//   {
//     key: "breathing",
//     label: "Breathing",
//     options: ["Normal", "Irregular", "Absent"],
//   },
//   {
//     key: "pulse",
//     label: "Pulse",
//     options: ["Normal", "Weak", "Absent"],
//   },
//   {
//     key: "injury",
//     label: "Mechanism of Injury",
//     options: [
//       "Minor",
//       "High-speed accident",
//       "Fall",
//       "Fire burn",
//     ],
//   },
//   {
//     key: "pain",
//     label: "Neck / Back Pain",
//     options: ["No", "Yes"],
//   },
//   {
//     key: "neuro",
//     label: "Neurological Signs",
//     options: [
//       "No",
//       "Weakness",
//       "Numbness",
//       "Paralysis",
//     ],
//   },
//   {
//     key: "burn",
//     label: "Burn %",
//     options: ["<10%", "10-30%", ">30%"],
//   },
//   {
//     key: "smoke",
//     label: "Smoke Inhalation",
//     options: ["No", "Yes"],
//   },
// ];


"use client";

import { useState } from "react";

export default function Triage({ patient, onNext }: any) {
  const [data, setData] = useState({
    conscious: "",
    breathing: "",
    pulse: "",
    injury: "",
    pain: "",
    neuro: "",
    burn: "",
    smoke: "",
  });

  const [result, setResult] = useState("");
  const [reason, setReason] = useState("");
  const [alerts, setAlerts] = useState("");
  const [action, setAction] = useState("");

  function triage() {
    const {
      conscious,
      breathing,
      pulse,
      injury,
      pain,
      neuro,
      burn,
      smoke,
    } = data;

    if (
      !conscious ||
      !breathing ||
      !pulse ||
      !injury ||
      !pain ||
      !neuro ||
      !burn ||
      !smoke
    ) {
      alert("Please fill all fields");
      return;
    }

    let res = "";
    let why = "";
    let al = "";
    let act = "";

    // TRIAGE RESULT
    if (
      conscious === "No" &&
      breathing === "Absent"
    ) {
      res = "⚫ BLACK";
      why =
        "Unconscious patient\nAbsent breathing";
      act = "No survival signs";
    } else if (
      conscious === "No" ||
      breathing === "Irregular" ||
      pulse === "Weak" ||
      burn === ">30%" ||
      smoke === "Yes"
    ) {
      res = "🔴 RED";

      if (conscious === "No")
        why += "Unconscious\n";

      if (breathing === "Irregular")
        why += "Irregular breathing\n";

      if (pulse === "Weak")
        why += "Weak pulse\n";

      if (burn === ">30%")
        why += "Severe burns >30%\n";

      if (smoke === "Yes")
        why += "Smoke inhalation\n";

      act = "Immediate intervention";
    } else if (burn === "10-30%") {
      res = "🟡 YELLOW";
      why = "Moderate burns 10-30%";
      act = "Urgent treatment";
    } else {
      res = "🟢 GREEN";
      why = "Stable vitals";
      act = "Basic care";
    }

    // ALERTS
    if (
      ((injury === "High-speed accident" ||
        injury === "Fall") &&
        (pain === "Yes" ||
          neuro !== "No")) ||
      conscious === "No"
    ) {
      al += "⚠️ Spinal Alert\n";
    }

    if (
      breathing === "Irregular" ||
      breathing === "Absent" ||
      smoke === "Yes"
    ) {
      al += "⚠️ Airway Alert\n";
    }

    if (
      pulse === "Weak" ||
      burn === ">30%"
    ) {
      al += "⚠️ Shock Alert\n";
    }

    // ETA
    const eta =
      Math.floor(Math.random() * 11) + 5;

    act += ` | ETA ${eta} mins`;

    // SAVE
    const old = JSON.parse(
      localStorage.getItem("patients") ||
        "[]"
    );

    old.push({
      ...patient,
      ...data,
      result: res,
      reason: why,
      alerts: al,
      time: new Date().toLocaleTimeString(),
    });

    localStorage.setItem(
      "patients",
      JSON.stringify(old)
    );

    setResult(res);
    setReason(why);
    setAlerts(al);
    setAction(act);
  }

  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-8">
          🚑 Clinical Triage
        </h2>

        <div className="max-w-xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">

          {/* Patient Info */}
          <div className="mb-5 text-sm bg-blue-50 p-4 rounded">
            <p>
              <b>Name:</b> {patient.name}
            </p>
            <p>
              <b>Gender:</b>{" "}
              {patient.gender}
            </p>
            <p>
              <b>Age Group:</b>{" "}
              {patient.age}
            </p>
          </div>

          {/* Fields */}
          {fields.map((item) => (
            <div
              key={item.key}
              className="mb-4"
            >
              <label className="block mb-1 text-sm font-medium">
                {item.label}
              </label>

              <select
                defaultValue=""
                className="w-full border rounded p-3"
                onChange={(e) =>
                  setData({
                    ...data,
                    [item.key]:
                      e.target.value,
                  })
                }
              >
                <option
                  value=""
                  disabled
                >
                  Select
                </option>

                {item.options.map(
                  (op) => (
                    <option
                      key={op}
                    >
                      {op}
                    </option>
                  )
                )}
              </select>
            </div>
          ))}

          {/* Button */}
          <button
            onClick={triage}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
          >
            TRIAGE NOW
          </button>

          {/* Result */}
          {result && (
            <div className="mt-6 space-y-3">

              <h3 className="text-xl font-bold">
                {result}
              </h3>

              {/* Reason */}
              <div>
                <p className="text-blue-600 font-semibold">
                  🧠 Reason:
                </p>

                <ul className="list-disc ml-5 text-blue-600">
                  {reason
                    .split("\n")
                    .filter(Boolean)
                    .map(
                      (r, i) => (
                        <li key={i}>
                          {r}
                        </li>
                      )
                    )}
                </ul>
              </div>

              {/* Alerts */}
              <p className="text-orange-600 whitespace-pre-line">
                {alerts}
              </p>

              {/* Action */}
              <p className="text-gray-700 whitespace-pre-line">
                {action}
              </p>

              {/* Next */}
              <button
                onClick={onNext}
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
              >
                NEXT PATIENT →
              </button>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}

const fields = [
  {
    key: "conscious",
    label: "Conscious?",
    options: ["Yes", "No"],
  },
  {
    key: "breathing",
    label: "Breathing",
    options: [
      "Normal",
      "Irregular",
      "Absent",
    ],
  },
  {
    key: "pulse",
    label: "Pulse",
    options: [
      "Normal",
      "Weak",
      "Absent",
    ],
  },
  {
    key: "injury",
    label: "Mechanism of Injury",
    options: [
      "Minor",
      "High-speed accident",
      "Fall",
      "Fire burn",
    ],
  },
  {
    key: "pain",
    label: "Neck / Back Pain",
    options: ["No", "Yes"],
  },
  {
    key: "neuro",
    label: "Neurological Signs",
    options: [
      "No",
      "Weakness",
      "Numbness",
      "Paralysis",
    ],
  },
  {
    key: "burn",
    label: "Burn %",
    options: [
      "0%",
      "<10%",
      "10-30%",
      ">30%",
    ],
  },
  {
    key: "smoke",
    label: "Smoke Inhalation",
    options: ["No", "Yes"],
  },
];