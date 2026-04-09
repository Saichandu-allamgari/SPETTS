
// // // "use client";
// // // import { useState } from "react";

// // // export default function Triage() {
// // //   const [data, setData] = useState({
// // //     age: "Adult",
// // //     conscious: "Yes",
// // //     breathing: "Normal",
// // //     pulse: "Normal",
// // //     injury: "Minor",
// // //     pain: "No",
// // //     neuro: "No",
// // //     burn: "<10%",
// // //     smokeInhalation: "No", // ✅ updated
// // //   });

// // //   const [result, setResult] = useState("");
// // //   const [alerts, setAlerts] = useState("");
// // //   const [action, setAction] = useState("");

// // //   function triage() {
// // //     const {
// // //       age,
// // //       conscious,
// // //       breathing,
// // //       pulse,
// // //       injury,
// // //       pain,
// // //       neuro,
// // //       burn,
// // //       smokeInhalation,
// // //     } = data;

// // //     let res = "";
// // //     let alertText = "";
// // //     let act = "";

// // //     // 🔴 TRIAGE
// // //     if (conscious === "No" && breathing === "Absent") {
// // //       res = "⚫ BLACK - No Survival";
// // //       act = "Focus on other patients";
// // //     } else if (
// // //       conscious === "No" ||
// // //       breathing === "Irregular" ||
// // //       pulse === "Weak" ||
// // //       burn === ">30%" ||
// // //       smokeInhalation === "Yes"
// // //     ) {
// // //       res = "🔴 RED - Critical";
// // //       act = "Airway + Oxygen + IV + Rapid transport";
// // //     } else if (burn === "10-30%") {
// // //       res = "🟡 YELLOW - Urgent";
// // //       act = "Monitor + Fluids + Dressing";
// // //     } else {
// // //       res = "🟢 GREEN - Stable";
// // //       act = "Basic care";
// // //     }

// // //     // ⚠️ ALERTS

// // //     if (
// // //       ((injury === "High-speed accident" || injury === "Fall") &&
// // //         (pain === "Yes" || neuro !== "No")) ||
// // //       conscious === "No"
// // //     ) {
// // //       alertText += "⚠️ Spinal Injury – Immobilize spine\n";
// // //     }

// // //     if (breathing !== "Normal" || smokeInhalation === "Yes") {
// // //       alertText += "⚠️ Airway Alert – Provide oxygen\n";
// // //     }

// // //     if (pulse === "Weak" || burn === ">30%") {
// // //       alertText += "⚠️ Shock Alert – Start IV fluids\n";
// // //     }

// // //     // 🧠 AGE LOGIC
// // //     if (age === "Child") {
// // //       alertText += "👶 Pediatric Case – Adjust drug dosage carefully\n";
// // //     }

// // //     if (age === "Elderly") {
// // //       alertText += "👴 Geriatric Risk – Monitor vitals closely\n";
// // //     }

// // //     setResult(res);
// // //     setAlerts(alertText);
// // //     setAction(act);
// // //   }

// // //   return (
// // //     <section id="logic" className="bg-white py-16">
// // //       <div className="max-w-6xl mx-auto px-4">

// // //         <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
// // //           Intelligent Triage System
// // //         </h2>

// // //         <div className="max-w-md mx-auto bg-gray-50 border rounded-2xl p-6 shadow-sm">

// // //           {Object.keys(data).map((key) => (
// // //             <div key={key} className="mb-4">
// // //               <label className="block mb-1 text-sm font-medium text-gray-700">
// // //                 {getLabel(key)}
// // //               </label>

// // //               <select
// // //                 className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
// // //                 value={data[key as keyof typeof data]}
// // //                 onChange={(e) =>
// // //                   setData({ ...data, [key]: e.target.value })
// // //                 }
// // //               >
// // //                 {getOptions(key).map((opt) => (
// // //                   <option key={opt}>{opt}</option>
// // //                 ))}
// // //               </select>
// // //             </div>
// // //           ))}

// // //           <button
// // //             onClick={triage}
// // //             className="w-full bg-red-600 text-white py-2 rounded-lg mt-4 hover:bg-red-700 transition"
// // //           >
// // //             🚑 TRIAGE NOW
// // //           </button>

// // //           {result && (
// // //             <div className="mt-6 border-t pt-4">

// // //               <h3
// // //                 className={`text-xl font-bold ${
// // //                   result.includes("RED")
// // //                     ? "text-red-600"
// // //                     : result.includes("YELLOW")
// // //                     ? "text-yellow-600"
// // //                     : result.includes("GREEN")
// // //                     ? "text-green-600"
// // //                     : "text-gray-600"
// // //                 }`}
// // //               >
// // //                 {result}
// // //               </h3>

// // //               <p className="text-orange-600 mt-2 whitespace-pre-line text-sm">
// // //                 {alerts}
// // //               </p>

// // //               <p className="text-gray-700 mt-2 text-sm">
// // //                 {action}
// // //               </p>

// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // // // 🧠 LABELS
// // // function getLabel(key: string) {
// // //   switch (key) {
// // //     case "age": return "Age Group";
// // //     case "conscious": return "Conscious?";
// // //     case "breathing": return "Breathing Status";
// // //     case "pulse": return "Pulse Status";
// // //     case "injury": return "Mechanism of Injury";
// // //     case "pain": return "Neck / Back Pain";
// // //     case "neuro": return "Neurological Deficits";
// // //     case "burn": return "Burn Severity";
// // //     case "smokeInhalation": return "Smoke Inhalation"; // ✅ updated
// // //     default: return key;
// // //   }
// // // }


// // // // ⚙️ OPTIONS
// // // function getOptions(key: string) {
// // //   switch (key) {
// // //     case "age": return ["Child", "Adult", "Elderly"];
// // //     case "conscious": return ["Yes", "No"];
// // //     case "breathing": return ["Normal", "Irregular", "Absent"];
// // //     case "pulse": return ["Normal", "Weak", "Absent"];
// // //     case "injury": return ["Minor", "High-speed accident", "Fall", "Fire burn"];
// // //     case "pain": return ["No", "Yes"];
// // //     case "neuro":
// // //       return ["No", "Limb Weakness", "Numbness", "Paralysis", "Altered Sensation"];
// // //     case "burn": return ["<10%", "10-30%", ">30%"];
// // //     case "smokeInhalation": return ["No", "Yes"]; // ✅ updated
// // //     default: return [];
// // //   }
// // // }


// // "use client";
// // import { useState } from "react";

// // export default function Triage() {
// //   const [data, setData] = useState({
// //     name: "",
// //     gender: "Male",
// //     age: "Adult",
// //     pregnant: "No",
// //     conscious: "Yes",
// //     breathing: "Normal",
// //     pulse: "Normal",
// //     injury: "Minor",
// //     pain: "No",
// //     neuro: "No",
// //     burn: "<10%",
// //     smokeInhalation: "No",
// //   });

// //   const [result, setResult] = useState("");
// //   const [alerts, setAlerts] = useState("");
// //   const [action, setAction] = useState("");

// //   function triage() {
// //     const {
// //       name,
// //       gender,
// //       age,
// //       pregnant,
// //       conscious,
// //       breathing,
// //       pulse,
// //       injury,
// //       pain,
// //       neuro,
// //       burn,
// //       smokeInhalation,
// //     } = data;

// //     // ⭐ REQUIRED VALIDATION
// //     if (!name || !gender || !age) {
// //       alert("Please fill required fields (*)");
// //       return;
// //     }

// //     let res = "";
// //     let alertText = "";
// //     let act = "";

// //     // 🔴 TRIAGE
// //     if (conscious === "No" && breathing === "Absent") {
// //       res = "⚫ BLACK - No Survival";
// //       act = "Focus on other patients";
// //     } else if (
// //       conscious === "No" ||
// //       breathing === "Irregular" ||
// //       pulse === "Weak" ||
// //       burn === ">30%" ||
// //       smokeInhalation === "Yes"
// //     ) {
// //       res = "🔴 RED - Critical";
// //       act = "Airway + Oxygen + IV + Rapid transport";
// //     } else if (burn === "10-30%") {
// //       res = "🟡 YELLOW - Urgent";
// //       act = "Monitor + Fluids + Dressing";
// //     } else {
// //       res = "🟢 GREEN - Stable";
// //       act = "Basic care";
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

// //     if (gender === "Female" && pregnant === "Yes") {
// //       alertText += "🤰 Pregnancy Alert – Special care required\n";
// //     }

// //     if (age === "Child") {
// //       alertText += "👶 Pediatric Case – Adjust dosage\n";
// //     }

// //     if (age === "Elderly") {
// //       alertText += "👴 Geriatric Risk – Monitor closely\n";
// //     }

// //     // ⏱ ETA
// //     const eta = Math.floor(Math.random() * 10) + 5;
// //     act += `\n🚑 ETA: ${eta} minutes`;

// //     // 💾 SAVE TO LOCAL STORAGE
// //     const newPatient = {
// //       name,
// //       age,
// //       result: res,
// //       time: new Date().toLocaleTimeString(),
// //     };

// //     const existing = JSON.parse(localStorage.getItem("patients") || "[]");
// //     existing.push(newPatient);
// //     localStorage.setItem("patients", JSON.stringify(existing));

// //     setResult(res);
// //     setAlerts(alertText);
// //     setAction(act);
// //   }

// //   return (
// //     <section className="bg-white py-16">
// //       <div className="max-w-6xl mx-auto px-4">

// //         <h2 className="text-3xl font-bold text-center mb-10">
// //           🚑 Triage System
// //         </h2>

// //         <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl border">

// //           {Object.keys(data).map((key) => (
// //             <div key={key} className="mb-3">
// //               <label className="text-sm">{getLabel(key)}</label>
// //               <select
// //                 className="w-full border p-2 rounded"
// //                 onChange={(e) =>
// //                   setData({ ...data, [key]: e.target.value })
// //                 }
// //               >
// //                 {getOptions(key).map((opt) => (
// //                   <option key={opt}>{opt}</option>
// //                 ))}
// //               </select>
// //             </div>
// //           ))}

// //           <button
// //             onClick={triage}
// //             className="w-full bg-red-600 text-white py-2 mt-4 rounded"
// //           >
// //             TRIAGE NOW
// //           </button>

// //           {result && (
// //             <div className="mt-6">
// //               <h3 className="text-xl font-bold">{result}</h3>
// //               <p className="text-orange-600 whitespace-pre-line">{alerts}</p>
// //               <p className="text-gray-700 whitespace-pre-line">{action}</p>

// //               {/* 🩺 STABILISATION */}
// //               <div className="mt-4 text-sm">
// //                 <p>🧠 Neck Stabilization</p>
// //                 <p>🛏 Spine Board</p>
// //                 <p>💉 IV Fluids</p>
// //                 <p>😮‍💨 Oxygen Support</p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// // // LABELS
// // function getLabel(key: string) {
// //   const map: any = {
// //     name: "Name *",
// //     gender: "Gender *",
// //     age: "Age Group *",
// //     pregnant: "Pregnant",
// //     conscious: "Conscious?",
// //     breathing: "Breathing",
// //     pulse: "Pulse",
// //     injury: "Injury Type",
// //     pain: "Neck/Back Pain",
// //     neuro: "Neurological Deficits",
// //     burn: "Burn %",
// //     smokeInhalation: "Smoke Inhalation",
// //   };
// //   return map[key];
// // }


// // // OPTIONS
// // function getOptions(key: string) {
// //   const map: any = {
// //     name: [""],
// //     gender: ["Male", "Female"],
// //     age: ["Child", "Adult", "Elderly"],
// //     pregnant: ["No", "Yes"],
// //     conscious: ["Yes", "No"],
// //     breathing: ["Normal", "Irregular", "Absent"],
// //     pulse: ["Normal", "Weak", "Absent"],
// //     injury: ["Minor", "High-speed accident", "Fall", "Fire burn"],
// //     pain: ["No", "Yes"],
// //     neuro: ["No", "Weakness", "Numbness", "Paralysis"],
// //     burn: ["<10%", "10-30%", ">30%"],
// //     smokeInhalation: ["No", "Yes"],
// //   };
// //   return map[key];
// // }


// "use client";
// import { useState } from "react";

// export default function Triage({ patient }: any) {

//   const [data, setData] = useState({
//     conscious: "Yes",
//     breathing: "Normal",
//     pulse: "Normal",
//     injury: "Minor",
//     pain: "No",
//     neuro: "No",
//     burn: "<10%",
//     smokeInhalation: "No",
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
//       smokeInhalation,
//     } = data;

//     const { name, gender, age, pregnant } = patient;

//     let res = "";
//     let alertText = "";
//     let act = "";

//     // 🔴 TRIAGE LOGIC
//     if (conscious === "No" && breathing === "Absent") {
//       res = "⚫ BLACK - No Survival";
//       act = "Focus on other patients";
//     } else if (
//       conscious === "No" ||
//       breathing === "Irregular" ||
//       pulse === "Weak" ||
//       burn === ">30%" ||
//       smokeInhalation === "Yes"
//     ) {
//       res = "🔴 RED - Critical";
//       act = "Airway + Oxygen + IV + Rapid transport";
//     } else if (burn === "10-30%") {
//       res = "🟡 YELLOW - Urgent";
//       act = "Monitor + Fluids + Dressing";
//     } else {
//       res = "🟢 GREEN - Stable";
//       act = "Basic care";
//     }

//     // ⚠️ ALERTS

//     // Spinal
//     if (
//       ((injury === "High-speed accident" || injury === "Fall") &&
//         (pain === "Yes" || neuro !== "No")) ||
//       conscious === "No"
//     ) {
//       alertText += "⚠️ Spinal Injury – Immobilize spine\n";
//     }

//     // Airway
//     if (breathing !== "Normal" || smokeInhalation === "Yes") {
//       alertText += "⚠️ Airway Alert – Provide oxygen / ventilation\n";
//     }

//     // Shock
//     if (pulse === "Weak" || burn === ">30%") {
//       alertText += "⚠️ Shock Alert – Start IV fluids\n";
//     }

//     // Special groups
//     if (gender === "Female" && pregnant === "Yes") {
//       alertText += "🤰 Pregnancy Alert – Special care required\n";
//     }

//     if (age === "Child") {
//       alertText += "👶 Pediatric Case – Adjust dosage\n";
//     }

//     if (age === "Elderly") {
//       alertText += "👴 Geriatric Risk – Monitor closely\n";
//     }

//     // ⏱ ETA
//     const eta = Math.floor(Math.random() * 10) + 5;
//     act += `\n🚑 ETA: ${eta} minutes`;

//     // 💾 SAVE TO LOCAL STORAGE
//     const newPatient = {
//       name,
//       gender,
//       age,
//       result: res,
//       alerts: alertText,
//       time: new Date().toLocaleTimeString(),
//     };

//     const existing = JSON.parse(localStorage.getItem("patients") || "[]");
//     existing.push(newPatient);
//     localStorage.setItem("patients", JSON.stringify(existing));

//     // UPDATE UI
//     setResult(res);
//     setAlerts(alertText);
//     setAction(act);
//   }

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* HEADER */}
//         <h2 className="text-3xl font-bold text-center mb-6">
//           🚑 Clinical Triage
//         </h2>

//         {/* PATIENT SUMMARY */}
//         <div className="max-w-md mx-auto bg-blue-50 border p-4 rounded mb-6">
//           <p><strong>Name:</strong> {patient.name}</p>
//           <p><strong>Gender:</strong> {patient.gender}</p>
//           <p><strong>Age:</strong> {patient.age}</p>
//           {patient.gender === "Female" && (
//             <p><strong>Pregnant:</strong> {patient.pregnant}</p>
//           )}
//         </div>

//         {/* FORM */}
//         <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl border">

//           {Object.keys(data).map((key) => (
//             <div key={key} className="mb-3">
//               <label className="text-sm">{getLabel(key)}</label>
//               <select
//                 className="w-full border p-2 rounded"
//                 onChange={(e) =>
//                   setData({ ...data, [key]: e.target.value })
//                 }
//               >
//                 {getOptions(key).map((opt) => (
//                   <option key={opt}>{opt}</option>
//                 ))}
//               </select>
//             </div>
//           ))}

//           <button
//             onClick={triage}
//             className="w-full bg-red-600 text-white py-2 mt-4 rounded"
//           >
//             🚑 TRIAGE NOW
//           </button>

//           {/* RESULT */}
//           {result && (
//             <div className="mt-6">
//               <h3 className="text-xl font-bold">{result}</h3>

//               <p className="text-orange-600 whitespace-pre-line mt-2">
//                 {alerts}
//               </p>

//               <p className="text-gray-700 whitespace-pre-line mt-2">
//                 {action}
//               </p>

//               {/* 🩺 STABILISATION GUIDE */}
//               <div className="mt-4 text-sm border-t pt-3">
//                 <p>🧠 Neck Stabilization</p>
//                 <p>🛏 Spine Board Immobilization</p>
//                 <p>💉 IV Fluids</p>
//                 <p>😮‍💨 Oxygen Support</p>
//               </div>
//             </div>
//           )}

//         </div>
//       </div>
//     </section>
//   );
// }


// // LABELS
// function getLabel(key: string) {
//   const map: any = {
//     conscious: "Conscious?",
//     breathing: "Breathing",
//     pulse: "Pulse",
//     injury: "Mechanism of Injury",
//     pain: "Neck/Back Pain",
//     neuro: "Neurological Deficits",
//     burn: "Burn %",
//     smokeInhalation: "Smoke Inhalation",
//   };
//   return map[key];
// }


// // OPTIONS
// function getOptions(key: string) {
//   const map: any = {
//     conscious: ["Yes", "No"],
//     breathing: ["Normal", "Irregular", "Absent"],
//     pulse: ["Normal", "Weak", "Absent"],
//     injury: ["Minor", "High-speed accident", "Fall", "Fire burn"],
//     pain: ["No", "Yes"],
//     neuro: ["No", "Weakness", "Numbness", "Paralysis"],
//     burn: ["<10%", "10-30%", ">30%"],
//     smokeInhalation: ["No", "Yes"],
//   };
//   return map[key];
// }



"use client";
import { useState } from "react";

export default function Triage({ patient }: any) {

  if (!patient) return null;

  const [data, setData] = useState({
    conscious: "",
    breathing: "",
    pulse: "",
    injury: "",
    pain: "",
    neuro: "",
    burn: "",
    smokeInhalation: "",
  });

  const [result, setResult] = useState("");
  const [alerts, setAlerts] = useState("");
  const [reason, setReason] = useState("");
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
      smokeInhalation,
    } = data;

    if (
      !conscious ||
      !breathing ||
      !pulse ||
      !injury ||
      !pain ||
      !neuro ||
      !burn ||
      !smokeInhalation
    ) {
      alert("Please fill all fields");
      return;
    }

    let res = "";
    let alertText = "";
    let act = "";
    let reasons: string[] = [];

    // 🔴 TRIAGE LOGIC
    if (conscious === "No" && breathing === "Absent") {
      res = "⚫ BLACK - No Survival";
      act = "Focus on other patients";
      reasons.push("No breathing", "Unconscious patient");

    } else if (
      conscious === "No" ||
      breathing === "Irregular" ||
      pulse === "Weak" ||
      burn === ">30%" ||
      smokeInhalation === "Yes"
    ) {
      res = "🔴 RED - Critical";
      act = "Airway + Oxygen + IV + Rapid transport";

      if (conscious === "No") reasons.push("Unconscious");
      if (breathing === "Irregular") reasons.push("Irregular breathing");
      if (pulse === "Weak") reasons.push("Weak pulse");
      if (burn === ">30%") reasons.push("Severe burns");
      if (smokeInhalation === "Yes") reasons.push("Smoke inhalation");

    } else if (burn === "10-30%") {
      res = "🟡 YELLOW - Urgent";
      act = "Monitor + Fluids + Dressing";
      reasons.push("Moderate burns");

    } else {
      res = "🟢 GREEN - Stable";
      act = "Basic care";
      reasons.push("Vitals stable");
    }

    // ⚠️ ALERTS
    if (
      ((injury === "High-speed accident" || injury === "Fall") &&
        (pain === "Yes" || neuro !== "No")) ||
      conscious === "No"
    ) {
      alertText += "⚠️ Spinal Injury – Immobilize spine\n";
    }

    if (breathing !== "Normal" || smokeInhalation === "Yes") {
      alertText += "⚠️ Airway Alert – Provide oxygen\n";
    }

    if (pulse === "Weak" || burn === ">30%") {
      alertText += "⚠️ Shock Alert – Start IV fluids\n";
    }

    // ⏱ ETA
    const eta = Math.floor(Math.random() * 10) + 5;
    act += `\n🚑 ETA: ${eta} mins`;

    // 💾 SAVE
    const newPatient = {
      name: patient.name,
      result: res,
      time: new Date().toLocaleTimeString(),
    };

    const existing = JSON.parse(localStorage.getItem("patients") || "[]");
    existing.push(newPatient);
    localStorage.setItem("patients", JSON.stringify(existing));

    // SET STATE
    setResult(res);
    setAlerts(alertText);
    setReason(reasons.join("\n"));
    setAction(act);
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-2xl font-bold text-center mb-6">
          🚑 Intelligent Triage System
        </h2>

        {/* PATIENT INFO */}
        <div className="max-w-md mx-auto bg-blue-50 p-4 rounded mb-6">
          <p><strong>Name:</strong> {patient.name}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Age:</strong> {patient.age}</p>
        </div>

        {/* FORM */}
        <div className="max-w-md mx-auto border p-6 rounded">

          {fields.map((f) => (
            <div key={f.key} className="mb-3">
              <label className="text-sm block mb-1">{f.label}</label>

              <select
                defaultValue=""
                className="w-full border p-2 rounded"
                onChange={(e) =>
                  setData({ ...data, [f.key]: e.target.value })
                }
              >
                <option value="" disabled>Select</option>
                {f.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          ))}

          <button
            onClick={triage}
            className="w-full bg-red-600 text-white py-2 mt-4 rounded hover:bg-red-700"
          >
            🚑 TRIAGE NOW
          </button>

          {/* RESULT */}
          {result && (
            <div className="mt-6 space-y-3">

              <h3 className="text-xl font-bold">{result}</h3>

              {/* ✅ FIXED REASON UI */}
              <div>
                <p className="text-blue-600 font-semibold">🧠 Reason:</p>
                <ul className="list-disc ml-5 text-blue-600">
                  {reason.split("\n").map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <p className="text-orange-600 whitespace-pre-line">
                {alerts}
              </p>

              <p className="text-gray-700 whitespace-pre-line">
                {action}
              </p>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}

const fields = [
  { key: "conscious", label: "Conscious?", options: ["Yes", "No"] },
  { key: "breathing", label: "Breathing", options: ["Normal", "Irregular", "Absent"] },
  { key: "pulse", label: "Pulse", options: ["Normal", "Weak", "Absent"] },
  { key: "injury", label: "Mechanism of Injury", options: ["Minor", "High-speed accident", "Fall", "Fire burn"] },
  { key: "pain", label: "Neck/Back Pain", options: ["No", "Yes"] },
  { key: "neuro", label: "Neurological Deficits", options: ["No", "Weakness", "Numbness", "Paralysis"] },
  { key: "burn", label: "Burn %", options: ["<10%", "10-30%", ">30%"] },
  { key: "smokeInhalation", label: "Smoke Inhalation", options: ["No", "Yes"] },
];