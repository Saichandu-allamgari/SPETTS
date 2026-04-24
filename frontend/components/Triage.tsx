// // // // // // // // "use client";
// // // // // // // // import { useState } from "react";

// // // // // // // // export default function Triage({ patient }: any) {

// // // // // // // //   if (!patient) return null;

// // // // // // // //   const [data, setData] = useState({
// // // // // // // //     conscious: "",
// // // // // // // //     breathing: "",
// // // // // // // //     pulse: "",
// // // // // // // //     injury: "",
// // // // // // // //     pain: "",
// // // // // // // //     neuro: "",
// // // // // // // //     burn: "",
// // // // // // // //     smokeInhalation: "",
// // // // // // // //   });

// // // // // // // //   const [result, setResult] = useState("");
// // // // // // // //   const [alerts, setAlerts] = useState("");
// // // // // // // //   const [reason, setReason] = useState("");
// // // // // // // //   const [action, setAction] = useState("");

// // // // // // // //   function triage() {
// // // // // // // //     const {
// // // // // // // //       conscious,
// // // // // // // //       breathing,
// // // // // // // //       pulse,
// // // // // // // //       injury,
// // // // // // // //       pain,
// // // // // // // //       neuro,
// // // // // // // //       burn,
// // // // // // // //       smokeInhalation,
// // // // // // // //     } = data;

// // // // // // // //     if (
// // // // // // // //       !conscious ||
// // // // // // // //       !breathing ||
// // // // // // // //       !pulse ||
// // // // // // // //       !injury ||
// // // // // // // //       !pain ||
// // // // // // // //       !neuro ||
// // // // // // // //       !burn ||
// // // // // // // //       !smokeInhalation
// // // // // // // //     ) {
// // // // // // // //       alert("Please fill all fields");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     let res = "";
// // // // // // // //     let alertText = "";
// // // // // // // //     let act = "";
// // // // // // // //     let reasons: string[] = [];

// // // // // // // //     // 🔴 TRIAGE LOGIC
// // // // // // // //     if (conscious === "No" && breathing === "Absent") {
// // // // // // // //       res = "⚫ BLACK - No Survival";
// // // // // // // //       act = "Focus on other patients";
// // // // // // // //       reasons.push("No breathing", "Unconscious patient");

// // // // // // // //     } else if (
// // // // // // // //       conscious === "No" ||
// // // // // // // //       breathing === "Irregular" ||
// // // // // // // //       pulse === "Weak" ||
// // // // // // // //       burn === ">30%" ||
// // // // // // // //       smokeInhalation === "Yes"
// // // // // // // //     ) {
// // // // // // // //       res = "🔴 RED - Critical";
// // // // // // // //       act = "Airway + Oxygen + IV + Rapid transport";

// // // // // // // //       if (conscious === "No") reasons.push("Unconscious");
// // // // // // // //       if (breathing === "Irregular") reasons.push("Irregular breathing");
// // // // // // // //       if (pulse === "Weak") reasons.push("Weak pulse");
// // // // // // // //       if (burn === ">30%") reasons.push("Severe burns");
// // // // // // // //       if (smokeInhalation === "Yes") reasons.push("Smoke inhalation");

// // // // // // // //     } else if (burn === "10-30%") {
// // // // // // // //       res = "🟡 YELLOW - Urgent";
// // // // // // // //       act = "Monitor + Fluids + Dressing";
// // // // // // // //       reasons.push("Moderate burns");

// // // // // // // //     } else {
// // // // // // // //       res = "🟢 GREEN - Stable";
// // // // // // // //       act = "Basic care";
// // // // // // // //       reasons.push("Vitals stable");
// // // // // // // //     }

// // // // // // // //     // ⚠️ ALERTS
// // // // // // // //     if (
// // // // // // // //       ((injury === "High-speed accident" || injury === "Fall") &&
// // // // // // // //         (pain === "Yes" || neuro !== "No")) ||
// // // // // // // //       conscious === "No"
// // // // // // // //     ) {
// // // // // // // //       alertText += "⚠️ Spinal Injury – Immobilize spine\n";
// // // // // // // //     }

// // // // // // // //     if (breathing !== "Normal" || smokeInhalation === "Yes") {
// // // // // // // //       alertText += "⚠️ Airway Alert – Provide oxygen\n";
// // // // // // // //     }

// // // // // // // //     if (pulse === "Weak" || burn === ">30%") {
// // // // // // // //       alertText += "⚠️ Shock Alert – Start IV fluids\n";
// // // // // // // //     }

// // // // // // // //     // ⏱ ETA
// // // // // // // //     const eta = Math.floor(Math.random() * 10) + 5;
// // // // // // // //     act += `\n🚑 ETA: ${eta} mins`;

// // // // // // // //     // 💾 SAVE
// // // // // // // //     const newPatient = {
// // // // // // // //       name: patient.name,
// // // // // // // //       result: res,
// // // // // // // //       time: new Date().toLocaleTimeString(),
// // // // // // // //     };

// // // // // // // //     const existing = JSON.parse(localStorage.getItem("patients") || "[]");
// // // // // // // //     existing.push(newPatient);
// // // // // // // //     localStorage.setItem("patients", JSON.stringify(existing));

// // // // // // // //     // SET STATE
// // // // // // // //     setResult(res);
// // // // // // // //     setAlerts(alertText);
// // // // // // // //     setReason(reasons.join("\n"));
// // // // // // // //     setAction(act);
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <section className="bg-white py-16">
// // // // // // // //       <div className="max-w-6xl mx-auto px-4">

// // // // // // // //         <h2 className="text-2xl font-bold text-center mb-6">
// // // // // // // //           🚑 Intelligent Triage System
// // // // // // // //         </h2>

// // // // // // // //         {/* PATIENT INFO */}
// // // // // // // //         <div className="max-w-md mx-auto bg-blue-50 p-4 rounded mb-6">
// // // // // // // //           <p><strong>Name:</strong> {patient.name}</p>
// // // // // // // //           <p><strong>Gender:</strong> {patient.gender}</p>
// // // // // // // //           <p><strong>Age:</strong> {patient.age}</p>
// // // // // // // //         </div>

// // // // // // // //         {/* FORM */}
// // // // // // // //         <div className="max-w-md mx-auto border p-6 rounded">

// // // // // // // //           {fields.map((f) => (
// // // // // // // //             <div key={f.key} className="mb-3">
// // // // // // // //               <label className="text-sm block mb-1">{f.label}</label>

// // // // // // // //               <select
// // // // // // // //                 defaultValue=""
// // // // // // // //                 className="w-full border p-2 rounded"
// // // // // // // //                 onChange={(e) =>
// // // // // // // //                   setData({ ...data, [f.key]: e.target.value })
// // // // // // // //                 }
// // // // // // // //               >
// // // // // // // //                 <option value="" disabled>Select</option>
// // // // // // // //                 {f.options.map((o) => (
// // // // // // // //                   <option key={o}>{o}</option>
// // // // // // // //                 ))}
// // // // // // // //               </select>
// // // // // // // //             </div>
// // // // // // // //           ))}

// // // // // // // //           <button
// // // // // // // //             onClick={triage}
// // // // // // // //             className="w-full bg-red-600 text-white py-2 mt-4 rounded hover:bg-red-700"
// // // // // // // //           >
// // // // // // // //             🚑 TRIAGE NOW
// // // // // // // //           </button>

// // // // // // // //           {/* RESULT */}
// // // // // // //           // {result && (
// // // // // // //           //   <div className="mt-6 space-y-3">

// // // // // // //           //     <h3 className="text-xl font-bold">{result}</h3>

// // // // // // //           //     {/* ✅ FIXED REASON UI */}
// // // // // // //           //     <div>
// // // // // // //           //       <p className="text-blue-600 font-semibold">🧠 Reason:</p>
// // // // // // //           //       <ul className="list-disc ml-5 text-blue-600">
// // // // // // //           //         {reason.split("\n").map((r, i) => (
// // // // // // //           //           <li key={i}>{r}</li>
// // // // // // //           //         ))}
// // // // // // //           //       </ul>
// // // // // // //           //     </div>

// // // // // // //           //     <p className="text-orange-600 whitespace-pre-line">
// // // // // // //           //       {alerts}
// // // // // // //           //     </p>

// // // // // // //           //     <p className="text-gray-700 whitespace-pre-line">
// // // // // // //           //       {action}
// // // // // // //           //     </p>

// // // // // // //           //   </div>
// // // // // // //           // )}

// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // const fields = [
// // // // // // // //   { key: "conscious", label: "Conscious?", options: ["Yes", "No"] },
// // // // // // // //   { key: "breathing", label: "Breathing", options: ["Normal", "Irregular", "Absent"] },
// // // // // // // //   { key: "pulse", label: "Pulse", options: ["Normal", "Weak", "Absent"] },
// // // // // // // //   { key: "injury", label: "Mechanism of Injury", options: ["Minor", "High-speed accident", "Fall", "Fire burn"] },
// // // // // // // //   { key: "pain", label: "Neck/Back Pain", options: ["No", "Yes"] },
// // // // // // // //   { key: "neuro", label: "Neurological Deficits", options: ["No", "Weakness", "Numbness", "Paralysis"] },
// // // // // // // //   { key: "burn", label: "Burn %", options: ["<10%", "10-30%", ">30%"] },
// // // // // // // //   { key: "smokeInhalation", label: "Smoke Inhalation", options: ["No", "Yes"] },
// // // // // // // // ];



// // // // // // // // src/components/Triage.tsx
// // // // // // // "use client";

// // // // // // // import { useState } from "react";

// // // // // // // export default function Triage({ patient, onNext }: any) {
// // // // // // //   const [data, setData] = useState({
// // // // // // //     conscious: "",
// // // // // // //     breathing: "",
// // // // // // //     pulse: "",
// // // // // // //     injury: "",
// // // // // // //     pain: "",
// // // // // // //     neuro: "",
// // // // // // //     burn: "",
// // // // // // //     smoke: "",
// // // // // // //   });

// // // // // // //   const [result, setResult] = useState("");
// // // // // // //   const [alerts, setAlerts] = useState("");
// // // // // // //   const [action, setAction] = useState("");

// // // // // // //   function triage() {
// // // // // // //     const {
// // // // // // //       conscious,
// // // // // // //       breathing,
// // // // // // //       pulse,
// // // // // // //       injury,
// // // // // // //       pain,
// // // // // // //       neuro,
// // // // // // //       burn,
// // // // // // //       smoke,
// // // // // // //     } = data;

// // // // // // //     if (
// // // // // // //       !conscious ||
// // // // // // //       !breathing ||
// // // // // // //       !pulse ||
// // // // // // //       !injury ||
// // // // // // //       !pain ||
// // // // // // //       !neuro ||
// // // // // // //       !burn ||
// // // // // // //       !smoke
// // // // // // //     ) {
// // // // // // //       alert("Please fill all fields");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     let res = "";
// // // // // // //     let al = "";
// // // // // // //     let act = "";

// // // // // // //     if (conscious === "No" && breathing === "Absent") {
// // // // // // //       res = "⚫ BLACK";
// // // // // // //       act = "No survival";
// // // // // // //     } else if (
// // // // // // //       conscious === "No" ||
// // // // // // //       breathing === "Irregular" ||
// // // // // // //       pulse === "Weak" ||
// // // // // // //       burn === ">30%" ||
// // // // // // //       smoke === "Yes"
// // // // // // //     ) {
// // // // // // //       res = "🔴 RED";
// // // // // // //       act = "Immediate intervention";
// // // // // // //     } else if (burn === "10-30%") {
// // // // // // //       res = "🟡 YELLOW";
// // // // // // //       act = "Urgent treatment";
// // // // // // //     } else {
// // // // // // //       res = "🟢 GREEN";
// // // // // // //       act = "Basic care";
// // // // // // //     }

// // // // // // //     if (
// // // // // // //       ((injury === "High-speed accident" ||
// // // // // // //         injury === "Fall") &&
// // // // // // //         (pain === "Yes" || neuro !== "No")) ||
// // // // // // //       conscious === "No"
// // // // // // //     ) {
// // // // // // //       al += "⚠️ Spinal Alert\n";
// // // // // // //     }

// // // // // // //     if (breathing !== "Normal" || smoke === "Yes") {
// // // // // // //       al += "⚠️ Airway Alert\n";
// // // // // // //     }

// // // // // // //     if (pulse === "Weak") {
// // // // // // //       al += "⚠️ Shock Alert\n";
// // // // // // //     }

// // // // // // //     const eta = Math.floor(Math.random() * 10) + 5;
// // // // // // //     act += ` | ETA ${eta} mins`;

// // // // // // //     const old = JSON.parse(
// // // // // // //       localStorage.getItem("patients") || "[]"
// // // // // // //     );

// // // // // // //     old.push({
// // // // // // //       ...patient,
// // // // // // //       ...data,
// // // // // // //       result: res,
// // // // // // //       alerts: al,
// // // // // // //       time: new Date().toLocaleTimeString(),
// // // // // // //     });

// // // // // // //     localStorage.setItem(
// // // // // // //       "patients",
// // // // // // //       JSON.stringify(old)
// // // // // // //     );

// // // // // // //     setResult(res);
// // // // // // //     setAlerts(al);
// // // // // // //     setAction(act);
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <section className="bg-slate-50 py-14">
// // // // // // //       <div className="max-w-6xl mx-auto px-4">

// // // // // // //         <h2 className="text-3xl font-bold text-center mb-8">
// // // // // // //           🚑 Clinical Triage
// // // // // // //         </h2>

// // // // // // //         <div className="max-w-xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">

// // // // // // //           <div className="mb-5 text-sm bg-blue-50 p-4 rounded">
// // // // // // //             <p><b>Name:</b> {patient.name}</p>
// // // // // // //             <p><b>Gender:</b> {patient.gender}</p>
// // // // // // //             <p><b>Age Group:</b> {patient.age}</p>
// // // // // // //           </div>

// // // // // // //           {fields.map((item) => (
// // // // // // //             <div key={item.key} className="mb-4">
// // // // // // //               <label className="block mb-1 text-sm font-medium">
// // // // // // //                 {item.label}
// // // // // // //               </label>

// // // // // // //               <select
// // // // // // //                 defaultValue=""
// // // // // // //                 className="w-full border rounded p-3"
// // // // // // //                 onChange={(e) =>
// // // // // // //                   setData({
// // // // // // //                     ...data,
// // // // // // //                     [item.key]: e.target.value,
// // // // // // //                   })
// // // // // // //                 }
// // // // // // //               >
// // // // // // //                 <option value="" disabled>Select</option>
// // // // // // //                 {item.options.map((op) => (
// // // // // // //                   <option key={op}>{op}</option>
// // // // // // //                 ))}
// // // // // // //               </select>
// // // // // // //             </div>
// // // // // // //           ))}

// // // // // // //           <button
// // // // // // //             onClick={triage}
// // // // // // //             className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
// // // // // // //           >
// // // // // // //             TRIAGE NOW
// // // // // // //           </button>

// // // // // // //           {result && (
// // // // // // //             <div className="mt-6 border-t pt-5 space-y-2">

// // // // // // //               <h3 className="text-xl font-bold">
// // // // // // //                 {result}
// // // // // // //               </h3>

// // // // // // //               <p className="whitespace-pre-line text-orange-600">
// // // // // // //                 {alerts}
// // // // // // //               </p>

// // // // // // //               <p>{action}</p>

// // // // // // //               <button
// // // // // // //                 onClick={onNext}
// // // // // // //                 className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
// // // // // // //               >
// // // // // // //                 NEXT PATIENT →
// // // // // // //               </button>

// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // // // const fields = [
// // // // // // //   {
// // // // // // //     key: "conscious",
// // // // // // //     label: "Conscious?",
// // // // // // //     options: ["Yes", "No"],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     key: "breathing",
// // // // // // //     label: "Breathing",
// // // // // // //     options: ["Normal", "Irregular", "Absent"],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     key: "pulse",
// // // // // // //     label: "Pulse",
// // // // // // //     options: ["Normal", "Weak", "Absent"],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     key: "injury",
// // // // // // //     label: "Mechanism of Injury",
// // // // // // //     options: [
// // // // // // //       "Minor",
// // // // // // //       "High-speed accident",
// // // // // // //       "Fall",
// // // // // // //       "Fire burn",
// // // // // // //     ],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     key: "pain",
// // // // // // //     label: "Neck / Back Pain",
// // // // // // //     options: ["No", "Yes"],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     key: "neuro",
// // // // // // //     label: "Neurological Signs",
// // // // // // //     options: [
// // // // // // //       "No",
// // // // // // //       "Weakness",
// // // // // // //       "Numbness",
// // // // // // //       "Paralysis",
// // // // // // //     ],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     key: "burn",
// // // // // // //     label: "Burn %",
// // // // // // //     options: ["<10%", "10-30%", ">30%"],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     key: "smoke",
// // // // // // //     label: "Smoke Inhalation",
// // // // // // //     options: ["No", "Yes"],
// // // // // // //   },
// // // // // // // ];


// // // // // // "use client";

// // // // // // import { useState } from "react";

// // // // // // export default function Triage({ patient, onNext }: any) {
// // // // // //   const [data, setData] = useState({
// // // // // //     conscious: "",
// // // // // //     breathing: "",
// // // // // //     pulse: "",
// // // // // //     injury: "",
// // // // // //     pain: "",
// // // // // //     neuro: "",
// // // // // //     burn: "",
// // // // // //     smoke: "",
// // // // // //   });

// // // // // //   const [result, setResult] = useState("");
// // // // // //   const [reason, setReason] = useState("");
// // // // // //   const [alerts, setAlerts] = useState("");
// // // // // //   const [action, setAction] = useState("");

// // // // // //   function triage() {
// // // // // //     const {
// // // // // //       conscious,
// // // // // //       breathing,
// // // // // //       pulse,
// // // // // //       injury,
// // // // // //       pain,
// // // // // //       neuro,
// // // // // //       burn,
// // // // // //       smoke,
// // // // // //     } = data;

// // // // // //     if (
// // // // // //       !conscious ||
// // // // // //       !breathing ||
// // // // // //       !pulse ||
// // // // // //       !injury ||
// // // // // //       !pain ||
// // // // // //       !neuro ||
// // // // // //       !burn ||
// // // // // //       !smoke
// // // // // //     ) {
// // // // // //       alert("Please fill all fields");
// // // // // //       return;
// // // // // //     }

// // // // // //     let res = "";
// // // // // //     let why = "";
// // // // // //     let al = "";
// // // // // //     let act = "";

// // // // // //     // TRIAGE RESULT
// // // // // //     if (
// // // // // //       conscious === "No" &&
// // // // // //       breathing === "Absent"
// // // // // //     ) {
// // // // // //       res = "⚫ BLACK";
// // // // // //       why =
// // // // // //         "Unconscious patient\nAbsent breathing";
// // // // // //       act = "No survival signs";
// // // // // //     } else if (
// // // // // //       conscious === "No" ||
// // // // // //       breathing === "Irregular" ||
// // // // // //       pulse === "Weak" ||
// // // // // //       burn === ">30%" ||
// // // // // //       smoke === "Yes"
// // // // // //     ) {
// // // // // //       res = "🔴 RED";

// // // // // //       if (conscious === "No")
// // // // // //         why += "Unconscious\n";

// // // // // //       if (breathing === "Irregular")
// // // // // //         why += "Irregular breathing\n";

// // // // // //       if (pulse === "Weak")
// // // // // //         why += "Weak pulse\n";

// // // // // //       if (burn === ">30%")
// // // // // //         why += "Severe burns >30%\n";

// // // // // //       if (smoke === "Yes")
// // // // // //         why += "Smoke inhalation\n";

// // // // // //       act = "Immediate intervention";
// // // // // //     } else if (burn === "10-30%") {
// // // // // //       res = "🟡 YELLOW";
// // // // // //       why = "Moderate burns 10-30%";
// // // // // //       act = "Urgent treatment";
// // // // // //     } else {
// // // // // //       res = "🟢 GREEN";
// // // // // //       why = "Stable vitals";
// // // // // //       act = "Basic care";
// // // // // //     }

// // // // // //     // ALERTS
// // // // // //     if (
// // // // // //       ((injury === "High-speed accident" ||
// // // // // //         injury === "Fall") &&
// // // // // //         (pain === "Yes" ||
// // // // // //           neuro !== "No")) ||
// // // // // //       conscious === "No"
// // // // // //     ) {
// // // // // //       al += "⚠️ Spinal Alert\n";
// // // // // //     }

// // // // // //     if (
// // // // // //       breathing === "Irregular" ||
// // // // // //       breathing === "Absent" ||
// // // // // //       smoke === "Yes"
// // // // // //     ) {
// // // // // //       al += "⚠️ Airway Alert\n";
// // // // // //     }

// // // // // //     if (
// // // // // //       pulse === "Weak" ||
// // // // // //       burn === ">30%"
// // // // // //     ) {
// // // // // //       al += "⚠️ Shock Alert\n";
// // // // // //     }

// // // // // //     // ETA
// // // // // //     const eta =
// // // // // //       Math.floor(Math.random() * 11) + 5;

// // // // // //     act += ` | ETA ${eta} mins`;

// // // // // //     // SAVE
// // // // // //     const old = JSON.parse(
// // // // // //       localStorage.getItem("patients") ||
// // // // // //         "[]"
// // // // // //     );

// // // // // //     old.push({
// // // // // //       ...patient,
// // // // // //       ...data,
// // // // // //       result: res,
// // // // // //       reason: why,
// // // // // //       alerts: al,
// // // // // //       time: new Date().toLocaleTimeString(),
// // // // // //     });

// // // // // //     localStorage.setItem(
// // // // // //       "patients",
// // // // // //       JSON.stringify(old)
// // // // // //     );

// // // // // //     setResult(res);
// // // // // //     setReason(why);
// // // // // //     setAlerts(al);
// // // // // //     setAction(act);
// // // // // //   }

// // // // // //   return (
// // // // // //     <section className="bg-slate-50 py-14">
// // // // // //       <div className="max-w-6xl mx-auto px-4">

// // // // // //         <h2 className="text-3xl font-bold text-center mb-8">
// // // // // //           🚑 Clinical Triage
// // // // // //         </h2>

// // // // // //         <div className="max-w-xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">

// // // // // //           {/* Patient Info */}
// // // // // //           <div className="mb-5 text-sm bg-blue-50 p-4 rounded">
// // // // // //             <p>
// // // // // //               <b>Name:</b> {patient.name}
// // // // // //             </p>
// // // // // //             <p>
// // // // // //               <b>Gender:</b>{" "}
// // // // // //               {patient.gender}
// // // // // //             </p>
// // // // // //             <p>
// // // // // //               <b>Age Group:</b>{" "}
// // // // // //               {patient.age}
// // // // // //             </p>
// // // // // //           </div>

// // // // // //           {/* Fields */}
// // // // // //           {fields.map((item) => (
// // // // // //             <div
// // // // // //               key={item.key}
// // // // // //               className="mb-4"
// // // // // //             >
// // // // // //               <label className="block mb-1 text-sm font-medium">
// // // // // //                 {item.label}
// // // // // //               </label>

// // // // // //               <select
// // // // // //                 defaultValue=""
// // // // // //                 className="w-full border rounded p-3"
// // // // // //                 onChange={(e) =>
// // // // // //                   setData({
// // // // // //                     ...data,
// // // // // //                     [item.key]:
// // // // // //                       e.target.value,
// // // // // //                   })
// // // // // //                 }
// // // // // //               >
// // // // // //                 <option
// // // // // //                   value=""
// // // // // //                   disabled
// // // // // //                 >
// // // // // //                   Select
// // // // // //                 </option>

// // // // // //                 {item.options.map(
// // // // // //                   (op) => (
// // // // // //                     <option
// // // // // //                       key={op}
// // // // // //                     >
// // // // // //                       {op}
// // // // // //                     </option>
// // // // // //                   )
// // // // // //                 )}
// // // // // //               </select>
// // // // // //             </div>
// // // // // //           ))}

// // // // // //           {/* Button */}
// // // // // //           <button
// // // // // //             onClick={triage}
// // // // // //             className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
// // // // // //           >
// // // // // //             TRIAGE NOW
// // // // // //           </button>

// // // // // //           {/* Result */}
// // // // // //           {result && (
// // // // // //             <div className="mt-6 space-y-3">

// // // // // //               <h3 className="text-xl font-bold">
// // // // // //                 {result}
// // // // // //               </h3>

// // // // // //               {/* Reason */}
// // // // // //               <div>
// // // // // //                 <p className="text-blue-600 font-semibold">
// // // // // //                   🧠 Reason:
// // // // // //                 </p>

// // // // // //                 <ul className="list-disc ml-5 text-blue-600">
// // // // // //                   {reason
// // // // // //                     .split("\n")
// // // // // //                     .filter(Boolean)
// // // // // //                     .map(
// // // // // //                       (r, i) => (
// // // // // //                         <li key={i}>
// // // // // //                           {r}
// // // // // //                         </li>
// // // // // //                       )
// // // // // //                     )}
// // // // // //                 </ul>
// // // // // //               </div>

// // // // // //               {/* Alerts */}
// // // // // //               <p className="text-orange-600 whitespace-pre-line">
// // // // // //                 {alerts}
// // // // // //               </p>

// // // // // //               {/* Action */}
// // // // // //               <p className="text-gray-700 whitespace-pre-line">
// // // // // //                 {action}
// // // // // //               </p>

// // // // // //               {/* Next */}
// // // // // //               <button
// // // // // //                 onClick={onNext}
// // // // // //                 className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
// // // // // //               >
// // // // // //                 NEXT PATIENT →
// // // // // //               </button>

// // // // // //             </div>
// // // // // //           )}

// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // const fields = [
// // // // // //   {
// // // // // //     key: "conscious",
// // // // // //     label: "Conscious?",
// // // // // //     options: ["Yes", "No"],
// // // // // //   },
// // // // // //   {
// // // // // //     key: "breathing",
// // // // // //     label: "Breathing",
// // // // // //     options: [
// // // // // //       "Normal",
// // // // // //       "Irregular",
// // // // // //       "Absent",
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     key: "pulse",
// // // // // //     label: "Pulse",
// // // // // //     options: [
// // // // // //       "Normal",
// // // // // //       "Weak",
// // // // // //       "Absent",
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     key: "injury",
// // // // // //     label: "Mechanism of Injury",
// // // // // //     options: [
// // // // // //       "Minor",
// // // // // //       "High-speed accident",
// // // // // //       "Fall",
// // // // // //       "Fire burn",
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     key: "pain",
// // // // // //     label: "Neck / Back Pain",
// // // // // //     options: ["No", "Yes"],
// // // // // //   },
// // // // // //   {
// // // // // //     key: "neuro",
// // // // // //     label: "Neurological Signs",
// // // // // //     options: [
// // // // // //       "No",
// // // // // //       "Weakness",
// // // // // //       "Numbness",
// // // // // //       "Paralysis",
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     key: "burn",
// // // // // //     label: "Burn %",
// // // // // //     options: [
// // // // // //       "0%",
// // // // // //       "<10%",
// // // // // //       "10-30%",
// // // // // //       ">30%",
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     key: "smoke",
// // // // // //     label: "Smoke Inhalation",
// // // // // //     options: ["No", "Yes"],
// // // // // //   },
// // // // // // ];

// // // // // "use client";

// // // // // import { useState } from "react";

// // // // // export default function Triage({ patient, onNext }: any) {
// // // // //   const [data, setData] = useState({
// // // // //     conscious: "",
// // // // //     breathing: "",
// // // // //     pulse: "",
// // // // //     injury: "",
// // // // //     pain: "",
// // // // //     neuro: "",
// // // // //     burn: "",
// // // // //     smoke: "",
// // // // //   });

// // // // //   const [result, setResult] = useState("");
// // // // //   const [reason, setReason] = useState("");
// // // // //   const [alerts, setAlerts] = useState<string[]>([]);
// // // // //   const [action, setAction] = useState("");

// // // // //   const [showSpinal, setShowSpinal] =
// // // // //     useState(false);
// // // // //   const [showAirway, setShowAirway] =
// // // // //     useState(false);
// // // // //   const [showShock, setShowShock] =
// // // // //     useState(false);

// // // // //   function triage() {
// // // // //     const {
// // // // //       conscious,
// // // // //       breathing,
// // // // //       pulse,
// // // // //       injury,
// // // // //       pain,
// // // // //       neuro,
// // // // //       burn,
// // // // //       smoke,
// // // // //     } = data;

// // // // //     if (
// // // // //       !conscious ||
// // // // //       !breathing ||
// // // // //       !pulse ||
// // // // //       !injury ||
// // // // //       !pain ||
// // // // //       !neuro ||
// // // // //       !burn ||
// // // // //       !smoke
// // // // //     ) {
// // // // //       alert("Please fill all fields");
// // // // //       return;
// // // // //     }

// // // // //     let res = "";
// // // // //     let why = "";
// // // // //     let act = "";
// // // // //     let alertList: string[] = [];

// // // // //     // TRIAGE
// // // // //     if (
// // // // //       conscious === "No" &&
// // // // //       breathing === "Absent"
// // // // //     ) {
// // // // //       res = "⚫ BLACK";
// // // // //       why =
// // // // //         "Unconscious patient\nAbsent breathing";
// // // // //       act = "No survival signs";
// // // // //     } else if (
// // // // //       conscious === "No" ||
// // // // //       breathing === "Irregular" ||
// // // // //       pulse === "Weak" ||
// // // // //       burn === ">30%" ||
// // // // //       smoke === "Yes"
// // // // //     ) {
// // // // //       res = "🔴 RED";

// // // // //       if (conscious === "No")
// // // // //         why += "Unconscious\n";

// // // // //       if (breathing === "Irregular")
// // // // //         why += "Irregular breathing\n";

// // // // //       if (pulse === "Weak")
// // // // //         why += "Weak pulse\n";

// // // // //       if (burn === ">30%")
// // // // //         why += "Burns >30%\n";

// // // // //       if (smoke === "Yes")
// // // // //         why += "Smoke inhalation\n";

// // // // //       act = "Immediate intervention";
// // // // //     } else if (burn === "10-30%") {
// // // // //       res = "🟡 YELLOW";
// // // // //       why = "Moderate burns";
// // // // //       act = "Urgent treatment";
// // // // //     } else {
// // // // //       res = "🟢 GREEN";
// // // // //       why = "Stable vitals";
// // // // //       act = "Basic care";
// // // // //     }

// // // // //     // ALERTS
// // // // //     if (
// // // // //       ((injury ===
// // // // //         "High-speed accident" ||
// // // // //         injury === "Fall") &&
// // // // //         (pain === "Yes" ||
// // // // //           neuro !== "No")) ||
// // // // //       conscious === "No"
// // // // //     ) {
// // // // //       alertList.push("Spinal Alert");
// // // // //     }

// // // // //     if (
// // // // //       breathing === "Irregular" ||
// // // // //       breathing === "Absent" ||
// // // // //       smoke === "Yes"
// // // // //     ) {
// // // // //       alertList.push("Airway Alert");
// // // // //     }

// // // // //     if (
// // // // //       pulse === "Weak" ||
// // // // //       burn === ">30%"
// // // // //     ) {
// // // // //       alertList.push("Shock Alert");
// // // // //     }

// // // // //     // ETA
// // // // //     const eta =
// // // // //       Math.floor(Math.random() * 11) + 5;

// // // // //     act += ` | ETA ${eta} mins`;

// // // // //     // SAVE TO LOCALSTORAGE
// // // // //     const old = JSON.parse(
// // // // //       localStorage.getItem("patients") ||
// // // // //         "[]"
// // // // //     );

// // // // //     old.push({
// // // // //       ...patient,
// // // // //       ...data,
// // // // //       result: res,
// // // // //       reason: why,
// // // // //       alerts: alertList.join(", "),
// // // // //       time: new Date().toLocaleTimeString(),
// // // // //     });

// // // // //     localStorage.setItem(
// // // // //       "patients",
// // // // //       JSON.stringify(old)
// // // // //     );

// // // // //     setResult(res);
// // // // //     setReason(why);
// // // // //     setAlerts(alertList);
// // // // //     setAction(act);
// // // // //   }

// // // // //   return (
// // // // //     <section className="bg-slate-50 py-14">
// // // // //       <div className="max-w-6xl mx-auto px-4">

// // // // //         <h2 className="text-3xl font-bold text-center mb-8">
// // // // //           🚑 Clinical Triage
// // // // //         </h2>

// // // // //         <div className="max-w-xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">

// // // // //           {/* Patient Info */}
// // // // //           <div className="mb-5 text-sm bg-blue-50 p-4 rounded">
// // // // //             <p>
// // // // //               <b>Name:</b> {patient.name}
// // // // //             </p>
// // // // //             <p>
// // // // //               <b>Gender:</b>{" "}
// // // // //               {patient.gender}
// // // // //             </p>
// // // // //             <p>
// // // // //               <b>Age Group:</b>{" "}
// // // // //               {patient.age}
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* Fields */}
// // // // //           {fields.map((item) => (
// // // // //             <div
// // // // //               key={item.key}
// // // // //               className="mb-4"
// // // // //             >
// // // // //               <label className="block mb-1 text-sm font-medium">
// // // // //                 {item.label}
// // // // //               </label>

// // // // //               <select
// // // // //                 defaultValue=""
// // // // //                 className="w-full border rounded p-3"
// // // // //                 onChange={(e) =>
// // // // //                   setData({
// // // // //                     ...data,
// // // // //                     [item.key]:
// // // // //                       e.target.value,
// // // // //                   })
// // // // //                 }
// // // // //               >
// // // // //                 <option
// // // // //                   value=""
// // // // //                   disabled
// // // // //                 >
// // // // //                   Select
// // // // //                 </option>

// // // // //                 {item.options.map(
// // // // //                   (op) => (
// // // // //                     <option
// // // // //                       key={op}
// // // // //                     >
// // // // //                       {op}
// // // // //                     </option>
// // // // //                   )
// // // // //                 )}
// // // // //               </select>
// // // // //             </div>
// // // // //           ))}

// // // // //           <button
// // // // //             onClick={triage}
// // // // //             className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
// // // // //           >
// // // // //             TRIAGE NOW
// // // // //           </button>

// // // // //           {/* Result */}
// // // // //           {result && (
// // // // //             <div className="mt-6 space-y-3">

// // // // //               <h3 className="text-xl font-bold">
// // // // //                 {result}
// // // // //               </h3>

// // // // //               {/* Reason */}
// // // // //               <div>
// // // // //                 <p className="text-blue-600 font-semibold">
// // // // //                   🧠 Reason:
// // // // //                 </p>

// // // // //                 <ul className="list-disc ml-5 text-blue-600">
// // // // //                   {reason
// // // // //                     .split("\n")
// // // // //                     .filter(Boolean)
// // // // //                     .map(
// // // // //                       (r, i) => (
// // // // //                         <li key={i}>
// // // // //                           {r}
// // // // //                         </li>
// // // // //                       )
// // // // //                     )}
// // // // //                 </ul>
// // // // //               </div>

// // // // //               {/* Alerts */}
// // // // //               <div className="space-y-3">

// // // // //                 {alerts.includes(
// // // // //                   "Spinal Alert"
// // // // //                 ) && (
// // // // //                   <div className="bg-orange-50 p-3 rounded">
// // // // //                     ⚠️ Spinal Alert

// // // // //                     <button
// // // // //                       className="ml-2 text-blue-600 underline"
// // // // //                       onClick={() =>
// // // // //                         setShowSpinal(
// // // // //                           !showSpinal
// // // // //                         )
// // // // //                       }
// // // // //                     >
// // // // //                       Click Here
// // // // //                     </button>

// // // // //                     {showSpinal && (
// // // // //                       <ul className="ml-5 mt-2 list-disc text-sm">
// // // // //                         <li>
// // // // //                           Cervical collar
// // // // //                         </li>
// // // // //                         <li>
// // // // //                           Spine board
// // // // //                         </li>
// // // // //                         <li>
// // // // //                           Avoid movement
// // // // //                         </li>
// // // // //                       </ul>
// // // // //                     )}
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {alerts.includes(
// // // // //                   "Airway Alert"
// // // // //                 ) && (
// // // // //                   <div className="bg-orange-50 p-3 rounded">
// // // // //                     ⚠️ Airway Alert

// // // // //                     <button
// // // // //                       className="ml-2 text-blue-600 underline"
// // // // //                       onClick={() =>
// // // // //                         setShowAirway(
// // // // //                           !showAirway
// // // // //                         )
// // // // //                       }
// // // // //                     >
// // // // //                       Click Here
// // // // //                     </button>

// // // // //                     {showAirway && (
// // // // //                       <ul className="ml-5 mt-2 list-disc text-sm">
// // // // //                         <li>Oxygen</li>
// // // // //                         <li>
// // // // //                           Airway
// // // // //                           positioning
// // // // //                         </li>
// // // // //                         <li>
// // // // //                           Ventilation if
// // // // //                           needed
// // // // //                         </li>
// // // // //                       </ul>
// // // // //                     )}
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {alerts.includes(
// // // // //                   "Shock Alert"
// // // // //                 ) && (
// // // // //                   <div className="bg-orange-50 p-3 rounded">
// // // // //                     ⚠️ Shock Alert

// // // // //                     <button
// // // // //                       className="ml-2 text-blue-600 underline"
// // // // //                       onClick={() =>
// // // // //                         setShowShock(
// // // // //                           !showShock
// // // // //                         )
// // // // //                       }
// // // // //                     >
// // // // //                       Click Here
// // // // //                     </button>

// // // // //                     {showShock && (
// // // // //                       <ul className="ml-5 mt-2 list-disc text-sm">
// // // // //                         <li>
// // // // //                           IV fluids
// // // // //                         </li>
// // // // //                         <li>
// // // // //                           Control
// // // // //                           bleeding
// // // // //                         </li>
// // // // //                         <li>
// // // // //                           Rapid
// // // // //                           transport
// // // // //                         </li>
// // // // //                       </ul>
// // // // //                     )}
// // // // //                   </div>
// // // // //                 )}

// // // // //               </div>

// // // // //               {/* Action */}
// // // // //               <p className="text-gray-700">
// // // // //                 {action}
// // // // //               </p>

// // // // //               {/* Next */}
// // // // //               <button
// // // // //                 onClick={onNext}
// // // // //                 className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
// // // // //               >
// // // // //                 NEXT PATIENT →
// // // // //               </button>

// // // // //             </div>
// // // // //           )}

// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // // const fields = [
// // // // //   {
// // // // //     key: "conscious",
// // // // //     label: "Conscious?",
// // // // //     options: ["Yes", "No"],
// // // // //   },
// // // // //   {
// // // // //     key: "breathing",
// // // // //     label: "Breathing",
// // // // //     options: [
// // // // //       "Normal",
// // // // //       "Irregular",
// // // // //       "Absent",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     key: "pulse",
// // // // //     label: "Pulse",
// // // // //     options: [
// // // // //       "Normal",
// // // // //       "Weak",
// // // // //       "Absent",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     key: "injury",
// // // // //     label: "Mechanism of Injury",
// // // // //     options: [
// // // // //       "Minor",
// // // // //       "High-speed accident",
// // // // //       "Fall",
// // // // //       "Fire burn",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     key: "pain",
// // // // //     label: "Neck / Back Pain",
// // // // //     options: ["No", "Yes"],
// // // // //   },
// // // // //   {
// // // // //     key: "neuro",
// // // // //     label: "Neurological Signs",
// // // // //     options: [
// // // // //       "No",
// // // // //       "Weakness",
// // // // //       "Numbness",
// // // // //       "Paralysis",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     key: "burn",
// // // // //     label: "Burn %",
// // // // //     options: [
// // // // //       "0%",
// // // // //       "<10%",
// // // // //       "10-30%",
// // // // //       ">30%",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     key: "smoke",
// // // // //     label: "Smoke Inhalation",
// // // // //     options: ["No", "Yes"],
// // // // //   },
// // // // // ];

// // // // // "use client";

// // // // // import { useState } from "react";

// // // // // export default function Triage({ patient, onNext }: any) {
// // // // //   const [data, setData] = useState({
// // // // //     conscious: "",
// // // // //     breathing: "",
// // // // //     pulse: "",
// // // // //     injury: "",
// // // // //     pain: "",
// // // // //     neuro: "",
// // // // //     burn: "",
// // // // //     smoke: "",

// // // // //     // NEW VITALS
// // // // //     bp: "",
// // // // //     spo2: "",
// // // // //     rr: "",
// // // // //     temp: "",
// // // // //     sugar: "",
// // // // //   });

// // // // //   const [result, setResult] = useState("");
// // // // //   const [reason, setReason] = useState("");
// // // // //   const [alerts, setAlerts] = useState<string[]>([]);
// // // // //   const [action, setAction] = useState("");

// // // // //   const [showSpinal, setShowSpinal] =
// // // // //     useState(false);
// // // // //   const [showAirway, setShowAirway] =
// // // // //     useState(false);
// // // // //   const [showShock, setShowShock] =
// // // // //     useState(false);

// // // // //   function triage() {
// // // // //     const {
// // // // //       conscious,
// // // // //       breathing,
// // // // //       pulse,
// // // // //       injury,
// // // // //       pain,
// // // // //       neuro,
// // // // //       burn,
// // // // //       smoke,
// // // // //     } = data;

// // // // //     if (
// // // // //       !conscious ||
// // // // //       !breathing ||
// // // // //       !pulse ||
// // // // //       !injury ||
// // // // //       !pain ||
// // // // //       !neuro ||
// // // // //       !burn ||
// // // // //       !smoke
// // // // //     ) {
// // // // //       alert("Please fill all fields");
// // // // //       return;
// // // // //     }

// // // // //     let res = "";
// // // // //     let why = "";
// // // // //     let act = "";
// // // // //     let alertList: string[] = [];

// // // // //     // TRIAGE
// // // // //     if (
// // // // //       conscious === "No" &&
// // // // //       breathing === "Absent"
// // // // //     ) {
// // // // //       res = "⚫ BLACK";
// // // // //       why =
// // // // //         "Unconscious patient\nAbsent breathing";
// // // // //       act = "No survival signs";
// // // // //     } else if (
// // // // //       conscious === "No" ||
// // // // //       breathing === "Irregular" ||
// // // // //       pulse === "Weak" ||
// // // // //       burn === ">30%" ||
// // // // //       smoke === "Yes"
// // // // //     ) {
// // // // //       res = "🔴 RED";

// // // // //       if (conscious === "No")
// // // // //         why += "Unconscious\n";

// // // // //       if (breathing === "Irregular")
// // // // //         why += "Irregular breathing\n";

// // // // //       if (pulse === "Weak")
// // // // //         why += "Weak pulse\n";

// // // // //       if (burn === ">30%")
// // // // //         why += "Burns >30%\n";

// // // // //       if (smoke === "Yes")
// // // // //         why += "Smoke inhalation\n";

// // // // //       act = "Immediate intervention";
// // // // //     } else if (burn === "10-30%") {
// // // // //       res = "🟡 YELLOW";
// // // // //       why = "Moderate burns";
// // // // //       act = "Urgent treatment";
// // // // //     } else {
// // // // //       res = "🟢 GREEN";
// // // // //       why = "Stable vitals";
// // // // //       act = "Basic care";
// // // // //     }

// // // // //     // ALERTS
// // // // //     if (
// // // // //       ((injury ===
// // // // //         "High-speed accident" ||
// // // // //         injury === "Fall") &&
// // // // //         (pain === "Yes" ||
// // // // //           neuro !== "No")) ||
// // // // //       conscious === "No"
// // // // //     ) {
// // // // //       alertList.push("Spinal Alert");
// // // // //     }

// // // // //     if (
// // // // //       breathing === "Irregular" ||
// // // // //       breathing === "Absent" ||
// // // // //       smoke === "Yes"
// // // // //     ) {
// // // // //       alertList.push("Airway Alert");
// // // // //     }

// // // // //     if (
// // // // //       pulse === "Weak" ||
// // // // //       burn === ">30%"
// // // // //     ) {
// // // // //       alertList.push("Shock Alert");
// // // // //     }

// // // // //     const eta =
// // // // //       Math.floor(Math.random() * 11) + 5;

// // // // //     act += ` | ETA ${eta} mins`;

// // // // //     // SAVE
// // // // //     const old = JSON.parse(
// // // // //       localStorage.getItem("patients") ||
// // // // //         "[]"
// // // // //     );

// // // // //     old.push({
// // // // //       ...patient,
// // // // //       ...data,
// // // // //       result: res,
// // // // //       reason: why,
// // // // //       alerts: alertList.join(", "),
// // // // //       time: new Date().toLocaleTimeString(),
// // // // //     });

// // // // //     localStorage.setItem(
// // // // //       "patients",
// // // // //       JSON.stringify(old)
// // // // //     );

// // // // //     setResult(res);
// // // // //     setReason(why);
// // // // //     setAlerts(alertList);
// // // // //     setAction(act);
// // // // //   }

// // // // //   return (
// // // // //     <section className="bg-slate-50 py-14">
// // // // //       <div className="max-w-6xl mx-auto px-4">

// // // // //         <h2 className="text-3xl font-bold text-center mb-8">
// // // // //           🚑 Clinical Triage
// // // // //         </h2>

// // // // //         <div className="max-w-xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">

// // // // //           {/* Patient Info */}
// // // // //           <div className="mb-5 text-sm bg-blue-50 p-4 rounded">
// // // // //             <p><b>Name:</b> {patient.name}</p>
// // // // //             <p><b>Gender:</b> {patient.gender}</p>
// // // // //             <p><b>Age Group:</b> {patient.age}</p>
// // // // //             <p><b>Blood Group:</b> {patient.blood || "N/A"}</p>
// // // // //           </div>

// // // // //           {/* TRIAGE FIELDS */}
// // // // //           {fields.map((item) => (
// // // // //             <div
// // // // //               key={item.key}
// // // // //               className="mb-4"
// // // // //             >
// // // // //               <label className="block mb-1 text-sm font-medium">
// // // // //                 {item.label}
// // // // //               </label>

// // // // //               <select
// // // // //                 defaultValue=""
// // // // //                 className="w-full border rounded p-3"
// // // // //                 onChange={(e) =>
// // // // //                   setData({
// // // // //                     ...data,
// // // // //                     [item.key]:
// // // // //                       e.target.value,
// // // // //                   })
// // // // //                 }
// // // // //               >
// // // // //                 <option
// // // // //                   value=""
// // // // //                   disabled
// // // // //                 >
// // // // //                   Select
// // // // //                 </option>

// // // // //                 {item.options.map(
// // // // //                   (op) => (
// // // // //                     <option key={op}>
// // // // //                       {op}
// // // // //                     </option>
// // // // //                   )
// // // // //                 )}
// // // // //               </select>
// // // // //             </div>
// // // // //           ))}

// // // // //           {/* NEW VITALS */}
// // // // //           <h3 className="font-bold text-lg mt-6 mb-4 text-blue-700">
// // // // //             🩺 Vitals (Optional)
// // // // //           </h3>

// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Blood Pressure (120/80)"
// // // // //             className="w-full border rounded p-3 mb-4"
// // // // //             onChange={(e) =>
// // // // //               setData({
// // // // //                 ...data,
// // // // //                 bp: e.target.value,
// // // // //               })
// // // // //             }
// // // // //           />

// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="SpO2 %"
// // // // //             className="w-full border rounded p-3 mb-4"
// // // // //             onChange={(e) =>
// // // // //               setData({
// // // // //                 ...data,
// // // // //                 spo2:
// // // // //                   e.target.value,
// // // // //               })
// // // // //             }
// // // // //           />

// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Respiratory Rate"
// // // // //             className="w-full border rounded p-3 mb-4"
// // // // //             onChange={(e) =>
// // // // //               setData({
// // // // //                 ...data,
// // // // //                 rr: e.target.value,
// // // // //               })
// // // // //             }
// // // // //           />

// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Temperature °C"
// // // // //             className="w-full border rounded p-3 mb-4"
// // // // //             onChange={(e) =>
// // // // //               setData({
// // // // //                 ...data,
// // // // //                 temp:
// // // // //                   e.target.value,
// // // // //               })
// // // // //             }
// // // // //           />

// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Blood Sugar"
// // // // //             className="w-full border rounded p-3 mb-4"
// // // // //             onChange={(e) =>
// // // // //               setData({
// // // // //                 ...data,
// // // // //                 sugar:
// // // // //                   e.target.value,
// // // // //               })
// // // // //             }
// // // // //           />

// // // // //           <button
// // // // //             onClick={triage}
// // // // //             className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
// // // // //           >
// // // // //             TRIAGE NOW
// // // // //           </button>

// // // // //           {/* Result */}
// // // // //           {result && (
// // // // //             <div className="mt-6 space-y-3">

// // // // //               <h3 className="text-xl font-bold">
// // // // //                 {result}
// // // // //               </h3>

// // // // //               {/* Reason */}
// // // // //               <div>
// // // // //                 <p className="text-blue-600 font-semibold">
// // // // //                   🧠 Reason:
// // // // //                 </p>

// // // // //                 <ul className="list-disc ml-5 text-blue-600">
// // // // //                   {reason
// // // // //                     .split("\n")
// // // // //                     .filter(Boolean)
// // // // //                     .map(
// // // // //                       (r, i) => (
// // // // //                         <li key={i}>
// // // // //                           {r}
// // // // //                         </li>
// // // // //                       )
// // // // //                     )}
// // // // //                 </ul>
// // // // //               </div>

// // // // //               {/* Alerts */}
// // // // //               <div className="space-y-3">

// // // // //                 {alerts.includes(
// // // // //                   "Spinal Alert"
// // // // //                 ) && (
// // // // //                   <div className="bg-orange-50 p-3 rounded">
// // // // //                     ⚠️ Spinal Alert

// // // // //                     <button
// // // // //                       className="ml-2 text-blue-600 underline"
// // // // //                       onClick={() =>
// // // // //                         setShowSpinal(
// // // // //                           !showSpinal
// // // // //                         )
// // // // //                       }
// // // // //                     >
// // // // //                       Click Here
// // // // //                     </button>

// // // // //                     {showSpinal && (
// // // // //                       <ul className="ml-5 mt-2 list-disc text-sm">
// // // // //                         <li>Cervical collar</li>
// // // // //                         <li>Spine board</li>
// // // // //                         <li>Avoid movement</li>
// // // // //                       </ul>
// // // // //                     )}
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {alerts.includes(
// // // // //                   "Airway Alert"
// // // // //                 ) && (
// // // // //                   <div className="bg-orange-50 p-3 rounded">
// // // // //                     ⚠️ Airway Alert

// // // // //                     <button
// // // // //                       className="ml-2 text-blue-600 underline"
// // // // //                       onClick={() =>
// // // // //                         setShowAirway(
// // // // //                           !showAirway
// // // // //                         )
// // // // //                       }
// // // // //                     >
// // // // //                       Click Here
// // // // //                     </button>

// // // // //                     {showAirway && (
// // // // //                       <ul className="ml-5 mt-2 list-disc text-sm">
// // // // //                         <li>Oxygen</li>
// // // // //                         <li>Airway positioning</li>
// // // // //                         <li>Ventilation if needed</li>
// // // // //                       </ul>
// // // // //                     )}
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {alerts.includes(
// // // // //                   "Shock Alert"
// // // // //                 ) && (
// // // // //                   <div className="bg-orange-50 p-3 rounded">
// // // // //                     ⚠️ Shock Alert

// // // // //                     <button
// // // // //                       className="ml-2 text-blue-600 underline"
// // // // //                       onClick={() =>
// // // // //                         setShowShock(
// // // // //                           !showShock
// // // // //                         )
// // // // //                       }
// // // // //                     >
// // // // //                       Click Here
// // // // //                     </button>

// // // // //                     {showShock && (
// // // // //                       <ul className="ml-5 mt-2 list-disc text-sm">
// // // // //                         <li>IV fluids</li>
// // // // //                         <li>Control bleeding</li>
// // // // //                         <li>Rapid transport</li>
// // // // //                       </ul>
// // // // //                     )}
// // // // //                   </div>
// // // // //                 )}

// // // // //               </div>

// // // // //               {/* Action */}
// // // // //               <p className="text-gray-700">
// // // // //                 {action}
// // // // //               </p>

// // // // //               {/* Next */}
// // // // //               <button
// // // // //                 onClick={onNext}
// // // // //                 className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
// // // // //               >
// // // // //                 NEXT PATIENT →
// // // // //               </button>

// // // // //             </div>
// // // // //           )}

// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // // const fields = [
// // // // //   {
// // // // //     key: "conscious",
// // // // //     label: "Conscious?",
// // // // //     options: ["Yes", "No"],
// // // // //   },
// // // // //   {
// // // // //     key: "breathing",
// // // // //     label: "Breathing",
// // // // //     options: [
// // // // //       "Normal",
// // // // //       "Irregular",
// // // // //       "Absent",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     key: "pulse",
// // // // //     label: "Pulse",
// // // // //     options: [
// // // // //       "Normal",
// // // // //       "Weak",
// // // // //       "Absent",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     key: "injury",
// // // // //     label: "Mechanism of Injury",
// // // // //     options: [
// // // // //       "Minor",
// // // // //       "High-speed accident",
// // // // //       "Fall",
// // // // //       "Fire burn",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     key: "pain",
// // // // //     label: "Neck / Back Pain",
// // // // //     options: ["No", "Yes"],
// // // // //   },
// // // // //   {
// // // // //     key: "neuro",
// // // // //     label: "Neurological Signs",
// // // // //     options: [
// // // // //       "No",
// // // // //       "Weakness",
// // // // //       "Numbness",
// // // // //       "Paralysis",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     key: "burn",
// // // // //     label: "Burn %",
// // // // //     options: [
// // // // //       "0%",
// // // // //       "<10%",
// // // // //       "10-30%",
// // // // //       ">30%",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     key: "smoke",
// // // // //     label: "Smoke Inhalation",
// // // // //     options: ["No", "Yes"],
// // // // //   },
// // // // // ];

// // // // "use client";

// // // // import { useState } from "react";

// // // // export default function Triage({ patient, onNext }: any) {
// // // //   const [data, setData] = useState({
// // // //     conscious: "",
// // // //     orientation: "",
// // // //     mobility: "",
// // // //     injury: "",
// // // //     otherInjury: "",
// // // //     bleeding: "",
// // // //     burn: "",
// // // //     injuryTime: "",

// // // //     // vitals
// // // //     bp: "",
// // // //     spo2: "",
// // // //     rr: "",
// // // //     temp: "",
// // // //     sugar: "",
// // // //     pulse: "",
// // // //   });

// // // //   const [result, setResult] = useState("");
// // // //   const [reason, setReason] = useState("");
// // // //   const [alerts, setAlerts] = useState<string[]>([]);
// // // //   const [action, setAction] = useState("");

// // // //   const [showSpinal, setShowSpinal] =
// // // //     useState(false);
// // // //   const [showAirway, setShowAirway] =
// // // //     useState(false);
// // // //   const [showShock, setShowShock] =
// // // //     useState(false);

// // // //   function triage() {
// // // //     const {
// // // //       conscious,
// // // //       orientation,
// // // //       mobility,
// // // //       injury,
// // // //       bleeding,
// // // //       burn,
// // // //       pulse,
// // // //     } = data;

// // // //     if (
// // // //       !conscious ||
// // // //       !orientation ||
// // // //       !mobility ||
// // // //       !injury ||
// // // //       !bleeding ||
// // // //       !pulse
// // // //     ) {
// // // //       alert("Please fill required fields");
// // // //       return;
// // // //     }

// // // //     let res = "";
// // // //     let why = "";
// // // //     let act = "";
// // // //     let alertList: string[] = [];

// // // //     // TRIAGE
// // // //     if (
// // // //       conscious === "No" &&
// // // //       mobility === "No"
// // // //     ) {
// // // //       res = "⚫ BLACK";
// // // //       why =
// // // //         "Unconscious patient\nNo mobility";
// // // //       act = "No survival signs";
// // // //     } else if (
// // // //       conscious === "No" ||
// // // //       orientation ===
// // // //         "Not Oriented" ||
// // // //       mobility === "Paralysis" ||
// // // //       bleeding === "Major" ||
// // // //       burn === ">10%" ||
// // // //       pulse === "Weak"
// // // //     ) {
// // // //       res = "🔴 RED";

// // // //       if (conscious === "No")
// // // //         why += "Unconscious\n";

// // // //       if (
// // // //         orientation ===
// // // //         "Not Oriented"
// // // //       )
// // // //         why +=
// // // //           "Disoriented patient\n";

// // // //       if (
// // // //         mobility ===
// // // //         "Paralysis"
// // // //       )
// // // //         why += "Paralysis\n";

// // // //       if (
// // // //         bleeding === "Major"
// // // //       )
// // // //         why +=
// // // //           "Major bleeding\n";

// // // //       if (burn === ">10%")
// // // //         why +=
// // // //           "Significant burns\n";

// // // //       if (pulse === "Weak")
// // // //         why += "Weak pulse\n";

// // // //       act = "Immediate intervention";
// // // //     } else if (
// // // //       bleeding === "Minor" ||
// // // //       burn === "0-10%"
// // // //     ) {
// // // //       res = "🟡 YELLOW";
// // // //       why =
// // // //         "Moderate injury / minor bleeding";
// // // //       act = "Urgent treatment";
// // // //     } else {
// // // //       res = "🟢 GREEN";
// // // //       why = "Stable patient";
// // // //       act = "Basic care";
// // // //     }

// // // //     // ALERTS
// // // //     if (
// // // //       injury === "RTA" ||
// // // //       injury === "Fall/Collapse"
// // // //     ) {
// // // //       alertList.push(
// // // //         "Spinal Alert"
// // // //       );
// // // //     }

// // // //     if (
// // // //       conscious === "No"
// // // //     ) {
// // // //       alertList.push(
// // // //         "Airway Alert"
// // // //       );
// // // //     }

// // // //     if (
// // // //       bleeding === "Major"
// // // //     ) {
// // // //       alertList.push(
// // // //         "Shock Alert"
// // // //       );
// // // //     }

// // // //     const eta =
// // // //       Math.floor(
// // // //         Math.random() * 11
// // // //       ) + 5;

// // // //     act += ` | ETA ${eta} mins`;

// // // //     // SAVE
// // // //     const old = JSON.parse(
// // // //       localStorage.getItem(
// // // //         "patients"
// // // //       ) || "[]"
// // // //     );

// // // //     old.push({
// // // //       ...patient,
// // // //       ...data,
// // // //       result: res,
// // // //       reason: why,
// // // //       alerts:
// // // //         alertList.join(", "),
// // // //       time:
// // // //         new Date().toLocaleTimeString(
// // // //           "en-IN",
// // // //           {
// // // //             hour: "2-digit",
// // // //             minute:
// // // //               "2-digit",
// // // //             hour12: true,
// // // //           }
// // // //         ) + " IST",
// // // //     });

// // // //     localStorage.setItem(
// // // //       "patients",
// // // //       JSON.stringify(old)
// // // //     );

// // // //     setResult(res);
// // // //     setReason(why);
// // // //     setAlerts(alertList);
// // // //     setAction(act);
// // // //   }

// // // //   return (
// // // //     <section className="bg-slate-50 py-14">
// // // //       <div className="max-w-6xl mx-auto px-4">

// // // //         <h2 className="text-3xl font-bold text-center mb-8">
// // // //           🚑 Clinical Triage
// // // //         </h2>

// // // //         <div className="max-w-xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">

// // // //           {/* PATIENT */}
// // // //           <div className="mb-5 text-sm bg-blue-50 p-4 rounded">
// // // //             <p>
// // // //               <b>Name:</b>{" "}
// // // //               {patient.name ||
// // // //                 "N/A"}
// // // //             </p>
// // // //             <p>
// // // //               <b>Gender:</b>{" "}
// // // //               {patient.gender ||
// // // //                 "N/A"}
// // // //             </p>
// // // //             <p>
// // // //               <b>Age:</b>{" "}
// // // //               {patient.age ||
// // // //                 "N/A"}
// // // //             </p>
// // // //             <p>
// // // //               <b>Blood:</b>{" "}
// // // //               {patient.blood ||
// // // //                 "N/A"}
// // // //             </p>
// // // //           </div>

// // // //           {/* DROPDOWNS */}
// // // //           {fields.map((item) => (
// // // //             <div
// // // //               key={item.key}
// // // //               className="mb-4"
// // // //             >
// // // //               <label className="block mb-1 text-sm font-medium">
// // // //                 {item.label}
// // // //               </label>

// // // //               <select
// // // //                 defaultValue=""
// // // //                 className="w-full border rounded p-3"
// // // //                 onChange={(e) =>
// // // //                   setData({
// // // //                     ...data,
// // // //                     [item.key]:
// // // //                       e.target
// // // //                         .value,
// // // //                   })
// // // //                 }
// // // //               >
// // // //                 <option
// // // //                   value=""
// // // //                   disabled
// // // //                 >
// // // //                   Select
// // // //                 </option>

// // // //                 {item.options.map(
// // // //                   (op) => (
// // // //                     <option
// // // //                       key={op}
// // // //                     >
// // // //                       {op}
// // // //                     </option>
// // // //                   )
// // // //                 )}
// // // //               </select>
// // // //             </div>
// // // //           ))}

// // // //           {/* OTHER INJURY */}
// // // //           {data.injury ===
// // // //             "Other" && (
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Describe Injury"
// // // //               className="w-full border rounded p-3 mb-4"
// // // //               onChange={(e) =>
// // // //                 setData({
// // // //                   ...data,
// // // //                   otherInjury:
// // // //                     e.target
// // // //                       .value,
// // // //                 })
// // // //               }
// // // //             />
// // // //           )}

// // // //           {/* TIME */}
// // // //           <input
// // // //             type="time"
// // // //             className="w-full border rounded p-3 mb-4"
// // // //             onChange={(e) =>
// // // //               setData({
// // // //                 ...data,
// // // //                 injuryTime:
// // // //                   e.target
// // // //                     .value,
// // // //               })
// // // //             }
// // // //           />

// // // //           {/* VITALS */}
// // // //           <h3 className="font-bold text-lg text-blue-700 mb-4">
// // // //             🩺 Vitals
// // // //           </h3>

// // // //           {vitals.map((v) => (
// // // //             <input
// // // //               key={v.key}
// // // //               type="text"
// // // //               placeholder={
// // // //                 v.label
// // // //               }
// // // //               className="w-full border rounded p-3 mb-4"
// // // //               onChange={(e) =>
// // // //                 setData({
// // // //                   ...data,
// // // //                   [v.key]:
// // // //                     e.target
// // // //                       .value,
// // // //                 })
// // // //               }
// // // //             />
// // // //           ))}

// // // //           <button
// // // //             onClick={triage}
// // // //             className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
// // // //           >
// // // //             TRIAGE NOW
// // // //           </button>

// // // //           {/* RESULT */}
// // // //           {result && (
// // // //             <div className="mt-6 space-y-3">

// // // //               <h3 className="text-xl font-bold">
// // // //                 {result}
// // // //               </h3>

// // // //               <div>
// // // //                 <p className="text-blue-600 font-semibold">
// // // //                   🧠 Reason:
// // // //                 </p>

// // // //                 <ul className="list-disc ml-5 text-blue-600">
// // // //                   {reason
// // // //                     .split(
// // // //                       "\n"
// // // //                     )
// // // //                     .filter(
// // // //                       Boolean
// // // //                     )
// // // //                     .map(
// // // //                       (
// // // //                         r,
// // // //                         i
// // // //                       ) => (
// // // //                         <li
// // // //                           key={
// // // //                             i
// // // //                           }
// // // //                         >
// // // //                           {r}
// // // //                         </li>
// // // //                       )
// // // //                     )}
// // // //                 </ul>
// // // //               </div>

// // // //               {/* ALERTS */}
// // // //               <div className="space-y-2">

// // // //                 {alerts.includes(
// // // //                   "Spinal Alert"
// // // //                 ) && (
// // // //                   <div className="bg-orange-50 p-3 rounded">
// // // //                     ⚠️ Spinal Alert

// // // //                     <button
// // // //                       className="ml-2 text-blue-600 underline"
// // // //                       onClick={() =>
// // // //                         setShowSpinal(
// // // //                           !showSpinal
// // // //                         )
// // // //                       }
// // // //                     >
// // // //                       Click Here
// // // //                     </button>

// // // //                     {showSpinal && (
// // // //                       <ul className="ml-5 mt-2 text-sm list-disc">
// // // //                         <li>
// // // //                           Cervical collar
// // // //                         </li>
// // // //                         <li>
// // // //                           Avoid movement
// // // //                         </li>
// // // //                       </ul>
// // // //                     )}
// // // //                   </div>
// // // //                 )}

// // // //                 {alerts.includes(
// // // //                   "Airway Alert"
// // // //                 ) && (
// // // //                   <div className="bg-orange-50 p-3 rounded">
// // // //                     ⚠️ Airway Alert

// // // //                     <button
// // // //                       className="ml-2 text-blue-600 underline"
// // // //                       onClick={() =>
// // // //                         setShowAirway(
// // // //                           !showAirway
// // // //                         )
// // // //                       }
// // // //                     >
// // // //                       Click Here
// // // //                     </button>

// // // //                     {showAirway && (
// // // //                       <ul className="ml-5 mt-2 text-sm list-disc">
// // // //                         <li>
// // // //                           Oxygen
// // // //                         </li>
// // // //                         <li>
// // // //                           Airway support
// // // //                         </li>
// // // //                       </ul>
// // // //                     )}
// // // //                   </div>
// // // //                 )}

// // // //                 {alerts.includes(
// // // //                   "Shock Alert"
// // // //                 ) && (
// // // //                   <div className="bg-orange-50 p-3 rounded">
// // // //                     ⚠️ Shock Alert

// // // //                     <button
// // // //                       className="ml-2 text-blue-600 underline"
// // // //                       onClick={() =>
// // // //                         setShowShock(
// // // //                           !showShock
// // // //                         )
// // // //                       }
// // // //                     >
// // // //                       Click Here
// // // //                     </button>

// // // //                     {showShock && (
// // // //                       <ul className="ml-5 mt-2 text-sm list-disc">
// // // //                         <li>
// // // //                           IV fluids
// // // //                         </li>
// // // //                         <li>
// // // //                           Stop bleeding
// // // //                         </li>
// // // //                       </ul>
// // // //                     )}
// // // //                   </div>
// // // //                 )}
// // // //               </div>

// // // //               <p>{action}</p>

// // // //               <button
// // // //                 onClick={onNext}
// // // //                 className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
// // // //               >
// // // //                 NEXT PATIENT →
// // // //               </button>
// // // //             </div>
// // // //           )}

// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // const fields = [
// // // //   {
// // // //     key: "conscious",
// // // //     label: "Consciousness",
// // // //     options: [
// // // //       "Yes",
// // // //       "No",
// // // //     ],
// // // //   },
// // // //   {
// // // //     key: "orientation",
// // // //     label: "Orientation",
// // // //     options: [
// // // //       "Oriented",
// // // //       "Not Oriented",
// // // //     ],
// // // //   },
// // // //   {
// // // //     key: "mobility",
// // // //     label: "Mobility",
// // // //     options: [
// // // //       "Yes",
// // // //       "No",
// // // //       "Paralysis",
// // // //     ],
// // // //   },
// // // //   {
// // // //     key: "injury",
// // // //     label:
// // // //       "Mechanism of Injury",
// // // //     options: [
// // // //       "RTA",
// // // //       "Fire Burn",
// // // //       "Fall/Collapse",
// // // //       "Other",
// // // //     ],
// // // //   },
// // // //   {
// // // //     key: "bleeding",
// // // //     label: "Bleeding",
// // // //     options: [
// // // //       "None",
// // // //       "Minor",
// // // //       "Major",
// // // //     ],
// // // //   },
// // // //   {
// // // //     key: "burn",
// // // //     label: "Burn %",
// // // //     options: [
// // // //       "0%",
// // // //       "0-10%",
// // // //       ">10%",
// // // //     ],
// // // //   },
// // // //   {
// // // //     key: "pulse",
// // // //     label: "Pulse",
// // // //     options: [
// // // //       "Normal",
// // // //       "Weak",
// // // //       "Absent",
// // // //     ],
// // // //   },
// // // // ];

// // // // const vitals = [
// // // //   {
// // // //     key: "bp",
// // // //     label:
// // // //       "Blood Pressure",
// // // //   },
// // // //   {
// // // //     key: "spo2",
// // // //     label: "SpO2 %",
// // // //   },
// // // //   {
// // // //     key: "rr",
// // // //     label:
// // // //       "Respiratory Rate",
// // // //   },
// // // //   {
// // // //     key: "temp",
// // // //     label:
// // // //       "Temperature °C",
// // // //   },
// // // //   {
// // // //     key: "sugar",
// // // //     label:
// // // //       "Blood Sugar",
// // // //   },
// // // // ];


// // // "use client";

// // // import { useState } from "react";

// // // export default function Triage({ patient, onNext }: any) {
// // //   const [data, setData] = useState({
// // //     conscious: "",
// // //     orientation: "",
// // //     mobility: "",
// // //     injury: "",
// // //     otherInjury: "",
// // //     burn: "",
// // //     bleeding: "",
// // //     pulse: "",
// // //     bp: "",
// // //     spo2: "",
// // //     rr: "",
// // //     temp: "",
// // //     sugar: "",
// // //   });

// // //   const [result, setResult] = useState("");
// // //   const [reason, setReason] = useState("");
// // //   const [alerts, setAlerts] = useState<string[]>([]);
// // //   const [action, setAction] = useState("");

// // //   function triage() {
// // //     if (
// // //       !data.conscious ||
// // //       !data.orientation ||
// // //       !data.mobility ||
// // //       !data.injury ||
// // //       !data.bleeding ||
// // //       !data.pulse
// // //     ) {
// // //       alert("Please fill required fields");
// // //       return;
// // //     }

// // //     let res = "";
// // //     let why = "";
// // //     let act = "";
// // //     let alertList: string[] = [];

// // //     if (
// // //       data.conscious === "No" &&
// // //       data.mobility === "No"
// // //     ) {
// // //       res = "⚫ BLACK";
// // //       why = "Unconscious\nNo mobility";
// // //       act = "No survival signs";
// // //     } else if (
// // //       data.conscious === "No" ||
// // //       data.orientation === "Not Oriented" ||
// // //       data.mobility === "Paralysis" ||
// // //       data.bleeding === "Major" ||
// // //       data.pulse === "Weak" ||
// // //       data.burn === ">10%"
// // //     ) {
// // //       res = "🔴 RED";

// // //       if (data.conscious === "No")
// // //         why += "Unconscious\n";

// // //       if (
// // //         data.orientation ===
// // //         "Not Oriented"
// // //       )
// // //         why += "Disoriented\n";

// // //       if (
// // //         data.mobility ===
// // //         "Paralysis"
// // //       )
// // //         why += "Paralysis\n";

// // //       if (
// // //         data.bleeding === "Major"
// // //       )
// // //         why += "Major bleeding\n";

// // //       if (data.pulse === "Weak")
// // //         why += "Weak pulse\n";

// // //       if (data.burn === ">10%")
// // //         why += "Severe burn\n";

// // //       act = "Immediate intervention";
// // //     } else if (
// // //       data.bleeding === "Minor" ||
// // //       data.burn === "0-10%"
// // //     ) {
// // //       res = "🟡 YELLOW";
// // //       why = "Moderate injury";
// // //       act = "Urgent treatment";
// // //     } else {
// // //       res = "🟢 GREEN";
// // //       why = "Stable vitals";
// // //       act = "Basic care";
// // //     }

// // //     if (
// // //       data.injury === "RTA" ||
// // //       data.injury === "Fall/Collapse"
// // //     ) {
// // //       alertList.push("Spinal Alert");
// // //     }

// // //     if (
// // //       data.conscious === "No"
// // //     ) {
// // //       alertList.push("Airway Alert");
// // //     }

// // //     if (
// // //       data.bleeding === "Major"
// // //     ) {
// // //       alertList.push("Shock Alert");
// // //     }

// // //     const eta =
// // //       Math.floor(
// // //         Math.random() * 10
// // //       ) + 5;

// // //     act += ` | ETA ${eta} mins`;

// // //     const old = JSON.parse(
// // //       localStorage.getItem(
// // //         "patients"
// // //       ) || "[]"
// // //     );

// // //     old.push({
// // //       ...patient,
// // //       ...data,
// // //       result: res,
// // //       reason: why,
// // //       alerts:
// // //         alertList.join(", "),
// // //       time:
// // //         new Date().toLocaleTimeString(),
// // //     });

// // //     localStorage.setItem(
// // //       "patients",
// // //       JSON.stringify(old)
// // //     );

// // //     setResult(res);
// // //     setReason(why);
// // //     setAlerts(alertList);
// // //     setAction(act);
// // //   }

// // //   return (
// // //     <section className="bg-slate-50 py-14">
// // //       <div className="max-w-5xl mx-auto px-4">

// // //         <h2 className="text-3xl font-bold text-center mb-8">
// // //           🚑 Clinical Triage
// // //         </h2>

// // //         <div className="max-w-xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">

// // //           {/* Patient Info */}
// // //           <div className="bg-blue-50 p-4 rounded mb-5 text-sm">
// // //             <p>
// // //               <b>Name:</b>{" "}
// // //               {patient.name ||
// // //                 "N/A"}
// // //             </p>
// // //             <p>
// // //               <b>Gender:</b>{" "}
// // //               {patient.gender ||
// // //                 "N/A"}
// // //             </p>
// // //             <p>
// // //               <b>Age:</b>{" "}
// // //               {patient.age ||
// // //                 "N/A"}
// // //             </p>
// // //             <p>
// // //               <b>Blood:</b>{" "}
// // //               {patient.blood ||
// // //                 "N/A"}
// // //             </p>
// // //           </div>

// // //           {/* Conscious */}
// // //           <SelectField
// // //             label="Consciousness"
// // //             options={[
// // //               "Yes",
// // //               "No",
// // //             ]}
// // //             onChange={(v) =>
// // //               setData({
// // //                 ...data,
// // //                 conscious: v,
// // //               })
// // //             }
// // //           />

// // //           {/* Orientation */}
// // //           <SelectField
// // //             label="Orientation"
// // //             options={[
// // //               "Oriented",
// // //               "Not Oriented",
// // //             ]}
// // //             onChange={(v) =>
// // //               setData({
// // //                 ...data,
// // //                 orientation:
// // //                   v,
// // //               })
// // //             }
// // //           />

// // //           {/* Mobility */}
// // //           <SelectField
// // //             label="Mobility"
// // //             options={[
// // //               "Yes",
// // //               "No",
// // //               "Paralysis",
// // //             ]}
// // //             onChange={(v) =>
// // //               setData({
// // //                 ...data,
// // //                 mobility: v,
// // //               })
// // //             }
// // //           />

// // //           {/* Mechanism */}
// // //           <div className="mb-4">
// // //             <label className="block mb-1 text-sm font-medium">
// // //               Mechanism of Injury
// // //             </label>

// // //             <select
// // //               defaultValue=""
// // //               className="w-full border rounded p-3"
// // //               onChange={(e) =>
// // //                 setData({
// // //                   ...data,
// // //                   injury:
// // //                     e.target
// // //                       .value,
// // //                   burn: "",
// // //                 })
// // //               }
// // //             >
// // //               <option
// // //                 value=""
// // //                 disabled
// // //               >
// // //                 Select
// // //               </option>
// // //               <option>
// // //                 RTA
// // //               </option>
// // //               <option>
// // //                 Fire Burn
// // //               </option>
// // //               <option>
// // //                 Fall/Collapse
// // //               </option>
// // //               <option>
// // //                 Other
// // //               </option>
// // //             </select>
// // //           </div>

// // //           {/* If Fire Burn */}
// // //           {data.injury ===
// // //             "Fire Burn" && (
// // //             <SelectField
// // //               label="Burn %"
// // //               options={[
// // //                 "0%",
// // //                 "0-10%",
// // //                 ">10%",
// // //               ]}
// // //               onChange={(v) =>
// // //                 setData({
// // //                   ...data,
// // //                   burn: v,
// // //                 })
// // //               }
// // //             />
// // //           )}

// // //           {/* If Other */}
// // //           {data.injury ===
// // //             "Other" && (
// // //             <input
// // //               type="text"
// // //               placeholder="Describe Injury"
// // //               className="w-full border rounded p-3 mb-4"
// // //               onChange={(e) =>
// // //                 setData({
// // //                   ...data,
// // //                   otherInjury:
// // //                     e.target
// // //                       .value,
// // //                 })
// // //               }
// // //             />
// // //           )}

// // //           {/* Bleeding */}
// // //           <SelectField
// // //             label="Bleeding"
// // //             options={[
// // //               "None",
// // //               "Minor",
// // //               "Major",
// // //             ]}
// // //             onChange={(v) =>
// // //               setData({
// // //                 ...data,
// // //                 bleeding: v,
// // //               })
// // //             }
// // //           />

// // //           {/* Pulse */}
// // //           <SelectField
// // //             label="Pulse"
// // //             options={[
// // //               "Normal",
// // //               "Weak",
// // //               "Absent",
// // //             ]}
// // //             onChange={(v) =>
// // //               setData({
// // //                 ...data,
// // //                 pulse: v,
// // //               })
// // //             }
// // //           />

// // //           {/* Vitals */}
// // //           <h3 className="font-bold text-blue-700 mt-6 mb-4">
// // //             🩺 Vitals
// // //           </h3>

// // //           <InputField
// // //             placeholder="Blood Pressure"
// // //             onChange={(v) =>
// // //               setData({
// // //                 ...data,
// // //                 bp: v,
// // //               })
// // //             }
// // //           />

// // //           <InputField
// // //             placeholder="SpO2 %"
// // //             onChange={(v) =>
// // //               setData({
// // //                 ...data,
// // //                 spo2: v,
// // //               })
// // //             }
// // //           />

// // //           <InputField
// // //             placeholder="Respiratory Rate"
// // //             onChange={(v) =>
// // //               setData({
// // //                 ...data,
// // //                 rr: v,
// // //               })
// // //             }
// // //           />

// // //           <InputField
// // //             placeholder="Temperature °C"
// // //             onChange={(v) =>
// // //               setData({
// // //                 ...data,
// // //                 temp: v,
// // //               })
// // //             }
// // //           />

// // //           <InputField
// // //             placeholder="Blood Sugar"
// // //             onChange={(v) =>
// // //               setData({
// // //                 ...data,
// // //                 sugar: v,
// // //               })
// // //             }
// // //           />

// // //           <button
// // //             onClick={triage}
// // //             className="w-full bg-red-600 text-white py-3 rounded-xl mt-3"
// // //           >
// // //             TRIAGE NOW
// // //           </button>

// // //           {/* Result */}
// // //           {result && (
// // //             <div className="mt-6 space-y-3">

// // //               <h3 className="text-xl font-bold">
// // //                 {result}
// // //               </h3>

// // //               <div>
// // //                 <p className="font-semibold text-blue-600">
// // //                   🧠 Reason:
// // //                 </p>

// // //                 <ul className="list-disc ml-5 text-blue-600">
// // //                   {reason
// // //                     .split(
// // //                       "\n"
// // //                     )
// // //                     .filter(
// // //                       Boolean
// // //                     )
// // //                     .map(
// // //                       (
// // //                         item,
// // //                         i
// // //                       ) => (
// // //                         <li
// // //                           key={
// // //                             i
// // //                           }
// // //                         >
// // //                           {item}
// // //                         </li>
// // //                       )
// // //                     )}
// // //                 </ul>
// // //               </div>

// // //               {alerts.map(
// // //                 (
// // //                   item,
// // //                   i
// // //                 ) => (
// // //                   <div
// // //                     key={i}
// // //                     className="bg-orange-50 p-3 rounded"
// // //                   >
// // //                     ⚠️ {item}
// // //                     <span className="ml-2 text-blue-600 underline cursor-pointer">
// // //                       Click Here
// // //                     </span>
// // //                   </div>
// // //                 )
// // //               )}

// // //               <p>{action}</p>

// // //               <button
// // //                 onClick={onNext}
// // //                 className="w-full bg-green-600 text-white py-3 rounded-xl"
// // //               >
// // //                 NEXT PATIENT →
// // //               </button>
// // //             </div>
// // //           )}

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // function SelectField({
// // //   label,
// // //   options,
// // //   onChange,
// // // }: any) {
// // //   return (
// // //     <div className="mb-4">
// // //       <label className="block mb-1 text-sm font-medium">
// // //         {label}
// // //       </label>

// // //       <select
// // //         defaultValue=""
// // //         className="w-full border rounded p-3"
// // //         onChange={(e) =>
// // //           onChange(
// // //             e.target.value
// // //           )
// // //         }
// // //       >
// // //         <option
// // //           value=""
// // //           disabled
// // //         >
// // //           Select
// // //         </option>

// // //         {options.map(
// // //           (
// // //             item: string
// // //           ) => (
// // //             <option
// // //               key={item}
// // //             >
// // //               {item}
// // //             </option>
// // //           )
// // //         )}
// // //       </select>
// // //     </div>
// // //   );
// // // }

// // // function InputField({
// // //   placeholder,
// // //   onChange,
// // // }: any) {
// // //   return (
// // //     <input
// // //       type="text"
// // //       placeholder={
// // //         placeholder
// // //       }
// // //       className="w-full border rounded p-3 mb-4"
// // //       onChange={(e) =>
// // //         onChange(
// // //           e.target.value
// // //         )
// // //       }
// // //     />
// // //   );
// // // }


// // "use client";

// // import { useState } from "react";

// // export default function Triage({ patient, onNext }: any) {
// //   const [data, setData] = useState({
// //     conscious: "",
// //     orientation: "",
// //     mobility: "",
// //     injury: "",
// //     otherInjury: "",
// //     burn: "",
// //     bleeding: "",
// //     timeInjury: "",

// //     bp: "",
// //     spo2: "",
// //     rr: "",
// //     temp: "",
// //     sugar: "",
// //     pulse: "",
// //     breathing: "",
// //   });

// //   const [result, setResult] = useState("");
// //   const [reason, setReason] = useState("");
// //   const [alerts, setAlerts] = useState<string[]>([]);
// //   const [action, setAction] = useState("");

// //   const [showSpinal, setShowSpinal] = useState(false);
// //   const [showAirway, setShowAirway] = useState(false);
// //   const [showShock, setShowShock] = useState(false);

// //   function triage() {
// //     let res = "";
// //     let why = "";
// //     let act = "";
// //     let alertList: string[] = [];

// //     const {
// //       conscious,
// //       orientation,
// //       mobility,
// //       injury,
// //       burn,
// //       bleeding,
// //       pulse,
// //       breathing,
// //       spo2,
// //     } = data;

// //     /* RESET OLD RESULT EVERY CLICK */
// //     setResult("");
// //     setReason("");
// //     setAlerts([]);
// //     setAction("");

// //     /* TRIAGE DECISION */

// //     if (
// //       conscious === "No" &&
// //       breathing === "Absent"
// //     ) {
// //       res = "⚫ BLACK";
// //       why += "Patient unconscious\n";
// //       why += "Breathing absent\n";
// //       act = "No survival signs";
// //     }

// //     else if (
// //       conscious === "No" ||
// //       orientation === "Not Oriented" ||
// //       mobility === "Paralysis" ||
// //       bleeding === "Major" ||
// //       pulse === "Weak" ||
// //       breathing === "Irregular" ||
// //       breathing === "Absent" ||
// //       burn === ">30%" ||
// //       Number(spo2) < 90
// //     ) {
// //       res = "🔴 RED";

// //       if (conscious === "No")
// //         why += "Patient unconscious\n";

// //       if (orientation === "Not Oriented")
// //         why += "Mental confusion\n";

// //       if (mobility === "Paralysis")
// //         why += "Paralysis present\n";

// //       if (bleeding === "Major")
// //         why += "Major bleeding\n";

// //       if (pulse === "Weak")
// //         why += "Weak pulse\n";

// //       if (breathing === "Irregular")
// //         why += "Irregular breathing\n";

// //       if (breathing === "Absent")
// //         why += "Breathing absent\n";

// //       if (burn === ">30%")
// //         why += "Severe burns >30%\n";

// //       if (Number(spo2) < 90 && spo2)
// //         why += "Low oxygen saturation\n";

// //       act = "Immediate intervention";
// //     }

// //     else if (
// //       burn === "10-30%" ||
// //       bleeding === "Minor" ||
// //       mobility === "No"
// //     ) {
// //       res = "🟡 YELLOW";

// //       if (burn === "10-30%")
// //         why += "Moderate burns\n";

// //       if (bleeding === "Minor")
// //         why += "Minor bleeding\n";

// //       if (mobility === "No")
// //         why += "Unable to walk\n";

// //       act = "Urgent treatment";
// //     }

// //     else {
// //       res = "🟢 GREEN";
// //       why += "Stable condition\n";
// //       why += "Vitals acceptable\n";
// //       act = "Basic care";
// //     }

// //     /* ALERTS */

// //     if (
// //       injury === "RTA" ||
// //       injury === "Fall / Collapse"
// //     ) {
// //       alertList.push("Spinal Alert");
// //     }

// //     if (
// //       breathing === "Irregular" ||
// //       breathing === "Absent" ||
// //       Number(spo2) < 92
// //     ) {
// //       alertList.push("Airway Alert");
// //     }

// //     if (
// //       bleeding === "Major" ||
// //       pulse === "Weak"
// //     ) {
// //       alertList.push("Shock Alert");
// //     }

// //     const eta =
// //       Math.floor(Math.random() * 11) + 5;

// //     act += ` | ETA ${eta} mins`;

// //     /* SAVE UPDATED DATA */
// //     const old = JSON.parse(
// //       localStorage.getItem("patients") || "[]"
// //     );

// //     old.push({
// //       ...patient,
// //       ...data,
// //       result: res,
// //       reason: why,
// //       alerts: alertList.join(", "),
// //       action: act,
// //       time: new Date().toLocaleTimeString(),
// //     });

// //     localStorage.setItem(
// //       "patients",
// //       JSON.stringify(old)
// //     );

// //     setResult(res);
// //     setReason(why);
// //     setAlerts(alertList);
// //     setAction(act);
// //   }

// //   return (
// //     <section className="bg-slate-50 py-14">
// //       <div className="max-w-6xl mx-auto px-4">

// //         <h2 className="text-3xl font-bold text-center mb-8">
// //           🚑 Clinical Triage
// //         </h2>

// //         <div className="max-w-3xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">

// //           {/* PATIENT DETAILS */}
// //           <div className="bg-blue-50 rounded p-4 mb-6 text-sm grid md:grid-cols-2 gap-2">
// //             <p><b>Name:</b> {patient.name || "N/A"}</p>
// //             <p><b>Gender:</b> {patient.gender || "N/A"}</p>
// //             <p><b>Age:</b> {patient.age || "N/A"}</p>
// //             <p><b>Blood:</b> {patient.blood || "N/A"}</p>
// //           </div>

// //           {/* FIELDS */}
// //           {fields.map((item) => (
// //             <div key={item.key} className="mb-4">
// //               <label className="block mb-1 font-medium text-sm">
// //                 {item.label}
// //               </label>

// //               <select
// //                 value={(data as any)[item.key]}
// //                 className="w-full border rounded p-3"
// //                 onChange={(e) =>
// //                   setData({
// //                     ...data,
// //                     [item.key]: e.target.value,
// //                   })
// //                 }
// //               >
// //                 <option value="">Select</option>

// //                 {item.options.map((op) => (
// //                   <option key={op}>
// //                     {op}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //           ))}

// //           {/* CONDITIONAL INPUTS */}

// //           {data.injury === "Fire Burn" && (
// //             <div className="mb-4">
// //               <label className="block mb-1 text-sm font-medium">
// //                 Burn %
// //               </label>

// //               <select
// //                 value={data.burn}
// //                 className="w-full border rounded p-3"
// //                 onChange={(e) =>
// //                   setData({
// //                     ...data,
// //                     burn: e.target.value,
// //                   })
// //                 }
// //               >
// //                 <option value="">Select</option>
// //                 <option>0%</option>
// //                 <option>&lt;10%</option>
// //                 <option>10-30%</option>
// //                 <option>&gt;30%</option>
// //               </select>
// //             </div>
// //           )}

// //           {data.injury === "Other" && (
// //             <input
// //               type="text"
// //               placeholder="Describe Injury"
// //               className="w-full border rounded p-3 mb-4"
// //               value={data.otherInjury}
// //               onChange={(e) =>
// //                 setData({
// //                   ...data,
// //                   otherInjury: e.target.value,
// //                 })
// //               }
// //             />
// //           )}

// //           {/* VITALS */}
// //           <h3 className="font-bold text-blue-700 mt-6 mb-4">
// //             🩺 Vitals
// //           </h3>

// //           {vitals.map((v) => (
// //             <input
// //               key={v.key}
// //               type="text"
// //               placeholder={v.label}
// //               value={(data as any)[v.key]}
// //               className="w-full border rounded p-3 mb-4"
// //               onChange={(e) =>
// //                 setData({
// //                   ...data,
// //                   [v.key]: e.target.value,
// //                 })
// //               }
// //             />
// //           ))}

// //           <button
// //             onClick={triage}
// //             className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
// //           >
// //             TRIAGE NOW
// //           </button>

// //           {/* RESULT */}
// //           {result && (
// //             <div className="mt-6 space-y-4">

// //               <h3 className="text-2xl font-bold">
// //                 {result}
// //               </h3>

// //               {/* REASON */}
// //               <div>
// //                 <p className="text-blue-700 font-semibold">
// //                   🧠 Reason:
// //                 </p>

// //                 <ul className="list-disc ml-6 text-blue-700">
// //                   {reason
// //                     .split("\n")
// //                     .filter(Boolean)
// //                     .map((r, i) => (
// //                       <li key={i}>{r}</li>
// //                     ))}
// //                 </ul>
// //               </div>

// //               {/* ALERTS */}
// //               <div className="space-y-3">

// //                 {alerts.includes("Spinal Alert") && (
// //                   <div className="bg-orange-50 p-3 rounded">
// //                     ⚠️ Spinal Alert

// //                     <button
// //                       className="ml-2 text-blue-600 underline"
// //                       onClick={() =>
// //                         setShowSpinal(!showSpinal)
// //                       }
// //                     >
// //                       Click Here
// //                     </button>

// //                     {showSpinal && (
// //                       <ul className="list-disc ml-5 mt-2 text-sm">
// //                         <li>Cervical collar</li>
// //                         <li>Spine board</li>
// //                         <li>Minimal movement</li>
// //                       </ul>
// //                     )}
// //                   </div>
// //                 )}

// //                 {alerts.includes("Airway Alert") && (
// //                   <div className="bg-orange-50 p-3 rounded">
// //                     ⚠️ Airway Alert

// //                     <button
// //                       className="ml-2 text-blue-600 underline"
// //                       onClick={() =>
// //                         setShowAirway(!showAirway)
// //                       }
// //                     >
// //                       Click Here
// //                     </button>

// //                     {showAirway && (
// //                       <ul className="list-disc ml-5 mt-2 text-sm">
// //                         <li>Oxygen support</li>
// //                         <li>Position airway</li>
// //                         <li>Ventilate if needed</li>
// //                       </ul>
// //                     )}
// //                   </div>
// //                 )}

// //                 {alerts.includes("Shock Alert") && (
// //                   <div className="bg-orange-50 p-3 rounded">
// //                     ⚠️ Shock Alert

// //                     <button
// //                       className="ml-2 text-blue-600 underline"
// //                       onClick={() =>
// //                         setShowShock(!showShock)
// //                       }
// //                     >
// //                       Click Here
// //                     </button>

// //                     {showShock && (
// //                       <ul className="list-disc ml-5 mt-2 text-sm">
// //                         <li>IV fluids</li>
// //                         <li>Control bleeding</li>
// //                         <li>Rapid transport</li>
// //                       </ul>
// //                     )}
// //                   </div>
// //                 )}

// //               </div>

// //               <p className="text-gray-700 font-medium">
// //                 {action}
// //               </p>

// //               <button
// //                 onClick={onNext}
// //                 className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
// //               >
// //                 NEXT PATIENT →
// //               </button>

// //             </div>
// //           )}

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // const fields = [
// //   {
// //     key: "conscious",
// //     label: "Consciousness",
// //     options: ["Yes", "No"],
// //   },
// //   {
// //     key: "orientation",
// //     label: "Orientation",
// //     options: ["Oriented", "Not Oriented"],
// //   },
// //   {
// //     key: "mobility",
// //     label: "Mobility",
// //     options: ["Yes", "No", "Paralysis"],
// //   },
// //   {
// //     key: "injury",
// //     label: "Mechanism of Injury",
// //     options: [
// //       "RTA",
// //       "Fire Burn",
// //       "Fall / Collapse",
// //       "Other",
// //     ],
// //   },
// //   {
// //     key: "bleeding",
// //     label: "Bleeding",
// //     options: ["None", "Minor", "Major"],
// //   },
// //   {
// //     key: "timeInjury",
// //     label: "Time of Injury",
// //     options: [
// //       "12 AM","1 AM","2 AM","3 AM",
// //       "4 AM","5 AM","6 AM","7 AM",
// //       "8 AM","9 AM","10 AM","11 AM",
// //       "12 PM","1 PM","2 PM","3 PM",
// //       "4 PM","5 PM","6 PM","7 PM",
// //       "8 PM","9 PM","10 PM","11 PM",
// //     ],
// //   },
// // ];

// // const vitals = [
// //   { key: "pulse", label: "Pulse" },
// //   { key: "rr", label: "Respiratory Rate" },
// //   { key: "bp", label: "Blood Pressure" },
// //   { key: "spo2", label: "SpO2 %" },
// //   { key: "sugar", label: "Blood Sugar" },
// // ];

// "use client";

// import { useState } from "react";

// export default function Triage({ patient, onNext }: any) {
//   const [data, setData] = useState({
//     conscious: "",
//     orientation: "",
//     mobility: "",
//     injury: "",
//     otherInjury: "",
//     burn: "",
//     bleeding: "",
//     timeInjury: "",

//     bp: "",
//     spo2: "",
//     rr: "",
//     temp: "",
//     sugar: "",
//     pulse: "",
//     breathing: "",
//   });

//   const [result, setResult] = useState("");
//   const [reason, setReason] = useState("");
//   const [alerts, setAlerts] = useState<string[]>([]);
//   const [action, setAction] = useState("");

//   const [showSpinal, setShowSpinal] = useState(false);
//   const [showAirway, setShowAirway] = useState(false);
//   const [showShock, setShowShock] = useState(false);

//   function triage() {
//     let res = "";
//     let why = "";
//     let act = "";
//     let alertList: string[] = [];

//     const {
//       conscious,
//       orientation,
//       mobility,
//       injury,
//       burn,
//       bleeding,
//       pulse,
//       breathing,
//       spo2,
//       rr,
//       bp,
//     } = data;

//     const pulseNum = Number(pulse);
//     const spo2Num = Number(spo2);
//     const rrNum = Number(rr);

//     /* RESET */
//     setResult("");
//     setReason("");
//     setAlerts([]);
//     setAction("");

//     /* ⚫ BLACK = DEAD / NO SIGNS */
//     if (
//       conscious === "No" &&
//       breathing === "Absent" &&
//       (pulse === "0" ||
//         pulse === "Absent" ||
//         pulseNum === 0) &&
//       (spo2 === "0" || spo2Num === 0)
//     ) {
//       res = "⚫ BLACK";

//       why += "Unconscious patient\n";
//       why += "No breathing\n";
//       why += "No pulse detected\n";
//       why += "SpO2 zero\n";

//       act = "No survival signs / Confirm CPR protocol";
//     }

//     /* 🔴 RED */
//     else if (
//       conscious === "No" ||
//       orientation === "Not Oriented" ||
//       mobility === "Paralysis" ||
//       bleeding === "Major" ||
//       breathing === "Irregular" ||
//       breathing === "Absent" ||
//       burn === ">30%" ||
//       spo2Num < 90 ||
//       rrNum > 30 ||
//       rrNum < 10 ||
//       pulseNum > 130 ||
//       pulseNum < 40
//     ) {
//       res = "🔴 RED";

//       if (conscious === "No")
//         why += "Patient unconscious\n";

//       if (orientation === "Not Oriented")
//         why += "Mental confusion\n";

//       if (mobility === "Paralysis")
//         why += "Paralysis present\n";

//       if (bleeding === "Major")
//         why += "Major bleeding\n";

//       if (breathing === "Irregular")
//         why += "Irregular breathing\n";

//       if (breathing === "Absent")
//         why += "Breathing absent\n";

//       if (burn === ">30%")
//         why += "Severe burns >30%\n";

//       if (spo2Num < 90 && spo2)
//         why += "Low oxygen saturation\n";

//       if (rrNum > 30 || rrNum < 10)
//         why += "Abnormal respiratory rate\n";

//       if (pulseNum > 130 || pulseNum < 40)
//         why += "Critical pulse rate\n";

//       act = "Immediate intervention";
//     }

//     /* 🟡 YELLOW */
//     else if (
//       burn === "10-30%" ||
//       bleeding === "Minor" ||
//       mobility === "No"
//     ) {
//       res = "🟡 YELLOW";

//       if (burn === "10-30%")
//         why += "Moderate burns\n";

//       if (bleeding === "Minor")
//         why += "Minor bleeding\n";

//       if (mobility === "No")
//         why += "Unable to walk\n";

//       act = "Urgent treatment";
//     }

//     /* 🟢 GREEN */
//     else {
//       res = "🟢 GREEN";

//       why += "Stable condition\n";
//       why += "Vitals acceptable\n";

//       act = "Basic care";
//     }

//     /* ALERTS */
//     if (
//       injury === "RTA" ||
//       injury === "Fall / Collapse"
//     ) {
//       alertList.push("Spinal Alert");
//     }

//     if (
//       breathing === "Irregular" ||
//       breathing === "Absent" ||
//       spo2Num < 92
//     ) {
//       alertList.push("Airway Alert");
//     }

//     if (
//       bleeding === "Major" ||
//       pulseNum > 130 ||
//       pulseNum < 40
//     ) {
//       alertList.push("Shock Alert");
//     }

//     const eta =
//       Math.floor(Math.random() * 11) + 5;

//     act += ` | ETA ${eta} mins`;

//     /* SAVE */
//     const old = JSON.parse(
//       localStorage.getItem("patients") || "[]"
//     );

//     old.push({
//       ...patient,
//       ...data,
//       result: res,
//       reason: why,
//       alerts: alertList.join(", "),
//       action: act,
//       time: new Date().toLocaleTimeString(),
//     });

//     localStorage.setItem(
//       "patients",
//       JSON.stringify(old)
//     );

//     setResult(res);
//     setReason(why);
//     setAlerts(alertList);
//     setAction(act);
//   }

//   return (
//     <section className="bg-slate-50 py-14">
//       <div className="max-w-6xl mx-auto px-4">

//         <h2 className="text-3xl font-bold text-center mb-8">
//           🚑 Clinical Triage
//         </h2>

//         <div className="max-w-3xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">

//           {/* Patient */}
//           <div className="bg-blue-50 rounded p-4 mb-6 text-sm grid md:grid-cols-2 gap-2">
//             <p><b>Name:</b> {patient.name || "N/A"}</p>
//             <p><b>Gender:</b> {patient.gender || "N/A"}</p>
//             <p><b>Age:</b> {patient.age || "N/A"}</p>
//             <p><b>Blood:</b> {patient.blood || "N/A"}</p>
//           </div>

//           {/* Fields */}
//           {fields.map((item) => (
//             <div key={item.key} className="mb-4">
//               <label className="block mb-1 text-sm font-medium">
//                 {item.label}
//               </label>

//               <select
//                 value={(data as any)[item.key]}
//                 className="w-full border rounded p-3"
//                 onChange={(e) =>
//                   setData({
//                     ...data,
//                     [item.key]: e.target.value,
//                   })
//                 }
//               >
//                 <option value="">Select</option>

//                 {item.options.map((op) => (
//                   <option key={op}>
//                     {op}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           ))}

//           {/* Fire Burn Only */}
//           {data.injury === "Fire Burn" && (
//             <div className="mb-4">
//               <label className="block mb-1 text-sm font-medium">
//                 Burn %
//               </label>

//               <select
//                 value={data.burn}
//                 className="w-full border rounded p-3"
//                 onChange={(e) =>
//                   setData({
//                     ...data,
//                     burn: e.target.value,
//                   })
//                 }
//               >
//                 <option value="">Select</option>
//                 <option>0%</option>
//                 <option>&lt;10%</option>
//                 <option>10-30%</option>
//                 <option>&gt;30%</option>
//               </select>
//             </div>
//           )}

//           {/* Other Injury */}
//           {data.injury === "Other" && (
//             <input
//               type="text"
//               placeholder="Describe injury"
//               className="w-full border rounded p-3 mb-4"
//               value={data.otherInjury}
//               onChange={(e) =>
//                 setData({
//                   ...data,
//                   otherInjury: e.target.value,
//                 })
//               }
//             />
//           )}

//           {/* Vitals */}
//           <h3 className="font-bold text-blue-700 mt-6 mb-4">
//             🩺 Vitals
//           </h3>

//           {vitals.map((v) => (
//             <input
//               key={v.key}
//               type="text"
//               placeholder={v.label}
//               value={(data as any)[v.key]}
//               className="w-full border rounded p-3 mb-4"
//               onChange={(e) =>
//                 setData({
//                   ...data,
//                   [v.key]: e.target.value,
//                 })
//               }
//             />
//           ))}

//           <button
//             onClick={triage}
//             className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
//           >
//             TRIAGE NOW
//           </button>

//           {/* RESULT */}
//           {result && (
//             <div className="mt-6 space-y-4">

//               <h3 className="text-2xl font-bold">
//                 {result}
//               </h3>

//               <div>
//                 <p className="text-blue-700 font-semibold">
//                   🧠 Reason:
//                 </p>

//                 <ul className="list-disc ml-6 text-blue-700">
//                   {reason
//                     .split("\n")
//                     .filter(Boolean)
//                     .map((r, i) => (
//                       <li key={i}>{r}</li>
//                     ))}
//                 </ul>
//               </div>

//               {/* Alerts */}
//               <div className="space-y-3">

//                 {alerts.includes("Spinal Alert") && (
//                   <div className="bg-orange-50 p-3 rounded">
//                     ⚠️ Spinal Alert
//                   </div>
//                 )}

//                 {alerts.includes("Airway Alert") && (
//                   <div className="bg-orange-50 p-3 rounded">
//                     ⚠️ Airway Alert
//                   </div>
//                 )}

//                 {alerts.includes("Shock Alert") && (
//                   <div className="bg-orange-50 p-3 rounded">
//                     ⚠️ Shock Alert
//                   </div>
//                 )}
//               </div>

//               <p className="text-gray-700 font-medium">
//                 {action}
//               </p>

//               <button
//                 onClick={onNext}
//                 className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
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
//     label: "Consciousness",
//     options: ["Yes", "No"],
//   },
//   {
//     key: "orientation",
//     label: "Orientation",
//     options: ["Oriented", "Not Oriented"],
//   },
//   {
//     key: "mobility",
//     label: "Mobility",
//     options: ["Yes", "No", "Paralysis"],
//   },
//   {
//     key: "injury",
//     label: "Mechanism of Injury",
//     options: [
//       "RTA",
//       "Fire Burn",
//       "Fall / Collapse",
//       "Other",
//     ],
//   },
//   {
//     key: "bleeding",
//     label: "Bleeding",
//     options: ["None", "Minor", "Major"],
//   },
//   {
//     key: "timeInjury",
//     label: "Time of Injury",
//     options: [
//       "12 AM","1 AM","2 AM","3 AM",
//       "4 AM","5 AM","6 AM","7 AM",
//       "8 AM","9 AM","10 AM","11 AM",
//       "12 PM","1 PM","2 PM","3 PM",
//       "4 PM","5 PM","6 PM","7 PM",
//       "8 PM","9 PM","10 PM","11 PM",
//     ],
//   },
//   {
//     key: "breathing",
//     label: "Breathing",
//     options: ["Normal", "Irregular", "Absent"],
//   },
// ];

// const vitals = [
//   { key: "pulse", label: "Pulse Rate" },
//   { key: "rr", label: "Respiratory Rate" },
//   { key: "bp", label: "Blood Pressure" },
//   { key: "spo2", label: "SpO2 %" },
//   { key: "temp", label: "Temperature °C" },
//   { key: "sugar", label: "Blood Sugar" },
// ];


"use client";

import { useState } from "react";

export default function Triage({ patient, onNext }: any) {
  const [data, setData] = useState({
    conscious: "",
    orientation: "",
    mobility: "",
    injury: "",
    otherInjury: "",
    burn: "",
    bleeding: "",
    timeInjury: "",

    bp: "",
    spo2: "",
    rr: "",
    temp: "",
    sugar: "",
    pulse: "",
    breathing: "",
  });

  const [result, setResult] = useState("");
  const [reason, setReason] = useState("");
  const [alerts, setAlerts] = useState<string[]>([]);
  const [action, setAction] = useState("");

  function triage() {
    let res = "";
    let why: string[] = [];
    let act = "";
    let alertList: string[] = [];

    const {
      conscious,
      orientation,
      mobility,
      injury,
      burn,
      bleeding,
      pulse,
      breathing,
      spo2,
      rr,
    } = data;

    const pulseNum = Number(pulse);
    const spo2Num = Number(spo2);
    const rrNum = Number(rr);

    /* RESET */
    setResult("");
    setReason("");
    setAlerts([]);
    setAction("");

    /* ⚫ BLACK */
    if (
      conscious === "No" &&
      breathing === "Absent" &&
      pulseNum === 0 &&
      spo2Num === 0
    ) {
      res = "⚫ BLACK";

      why.push("Patient unconscious");
      why.push("No breathing");
      why.push("No pulse detected");
      why.push("SpO2 is zero");

      act = "No survival signs / CPR protocol";
    }

    /* 🔴 RED */
    else if (
      conscious === "No" ||
      orientation === "Not Oriented" ||
      mobility === "Paralysis" ||
      bleeding === "Major" ||
      breathing === "Irregular" ||
      breathing === "Absent" ||
      burn === ">30%" ||
      spo2Num < 90 ||
      rrNum > 30 ||
      rrNum < 10 ||
      pulseNum > 130 ||
      pulseNum < 40
    ) {
      res = "🔴 RED";

      if (conscious === "No") why.push("Patient unconscious");
      if (orientation === "Not Oriented")
        why.push("Mental confusion / disorientation");
      if (mobility === "Paralysis")
        why.push("Paralysis present");
      if (bleeding === "Major")
        why.push("Major bleeding");
      if (breathing === "Irregular")
        why.push("Irregular breathing");
      if (breathing === "Absent")
        why.push("Breathing absent");
      if (burn === ">30%")
        why.push("Severe burns >30%");
      if (spo2Num < 90 && spo2)
        why.push("Low oxygen saturation");
      if (rrNum > 30 || rrNum < 10)
        why.push("Abnormal respiratory rate");
      if (pulseNum > 130 || pulseNum < 40)
        why.push("Critical pulse rate");

      act = "Immediate intervention required";
    }

    /* 🟡 YELLOW */
    else if (
      burn === "10-30%" ||
      bleeding === "Minor" ||
      mobility === "No"
    ) {
      res = "🟡 YELLOW";

      if (burn === "10-30%")
        why.push("Moderate burns");
      if (bleeding === "Minor")
        why.push("Minor bleeding");
      if (mobility === "No")
        why.push("Unable to walk");

      act = "Urgent treatment required";
    }

    /* 🟢 GREEN */
    else {
      res = "🟢 GREEN";

      why.push("Stable condition");
      why.push("Vitals acceptable");

      act = "Basic care / outpatient care";
    }

    /* ALERTS */
    if (
      injury === "RTA" ||
      injury === "Fall / Collapse"
    ) {
      alertList.push("Spinal Alert");
    }

    if (
      breathing === "Irregular" ||
      breathing === "Absent" ||
      spo2Num < 92
    ) {
      alertList.push("Airway Alert");
    }

    if (
      bleeding === "Major" ||
      pulseNum > 130 ||
      pulseNum < 40
    ) {
      alertList.push("Shock Alert");
    }

    const eta =
      Math.floor(Math.random() * 11) + 5;

    act += ` | ETA ${eta} mins`;

    /* SAVE */
    const old = JSON.parse(
      localStorage.getItem("patients") || "[]"
    );

    old.push({
      ...patient,
      ...data,
      result: res,
      reason: why.join(", "),
      alerts: alertList.join(", "),
      action: act,
      createdAt: new Date().toLocaleString(),
    });

    localStorage.setItem(
      "patients",
      JSON.stringify(old)
    );

    setResult(res);
    setReason(why.join("\n"));
    setAlerts(alertList);
    setAction(act);
  }

  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-8">
          🚑 Clinical Triage
        </h2>

        <div className="max-w-3xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">

          {/* PATIENT DETAILS */}
          <div className="bg-blue-50 rounded p-4 mb-6 text-sm grid md:grid-cols-2 gap-2">
            <p>
              <b>Name:</b>{" "}
              {patient?.name || "N/A"}
            </p>

            <p>
              <b>Gender:</b>{" "}
              {patient?.gender || "N/A"}
            </p>

            <p>
              <b>Age:</b>{" "}
              {patient?.ageInput ||
                patient?.ageGroup ||
                "N/A"}
            </p>

            {patient?.pregnant && (
              <p>
                <b>Pregnant:</b>{" "}
                {patient.pregnant}
              </p>
            )}
          </div>

          {/* SELECT FIELDS */}
          {fields.map((item) => (
            <div
              key={item.key}
              className="mb-4"
            >
              <label className="block mb-1 text-sm font-medium">
                {item.label}
              </label>

              <select
                value={(data as any)[item.key]}
                className="w-full border rounded p-3"
                onChange={(e) =>
                  setData({
                    ...data,
                    [item.key]:
                      e.target.value,
                  })
                }
              >
                <option value="">
                  Select
                </option>

                {item.options.map(
                  (op) => (
                    <option key={op}>
                      {op}
                    </option>
                  )
                )}
              </select>
            </div>
          ))}

          {/* FIRE BURN */}
          {data.injury ===
            "Fire Burn" && (
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">
                Burn %
              </label>

              <select
                value={data.burn}
                className="w-full border rounded p-3"
                onChange={(e) =>
                  setData({
                    ...data,
                    burn:
                      e.target.value,
                  })
                }
              >
                <option value="">
                  Select
                </option>
                <option>0%</option>
                <option>
                  &lt;10%
                </option>
                <option>
                  10-30%
                </option>
                <option>
                  &gt;30%
                </option>
              </select>
            </div>
          )}

          {/* OTHER INJURY */}
          {data.injury ===
            "Other" && (
            <input
              type="text"
              placeholder="Describe injury"
              className="w-full border rounded p-3 mb-4"
              value={
                data.otherInjury
              }
              onChange={(e) =>
                setData({
                  ...data,
                  otherInjury:
                    e.target.value,
                })
              }
            />
          )}

          {/* DATE TIME */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">
              Time of Injury
            </label>

            <input
              type="datetime-local"
              className="w-full border rounded p-3"
              value={data.timeInjury}
              onChange={(e) =>
                setData({
                  ...data,
                  timeInjury:
                    e.target.value,
                })
              }
            />
          </div>

          {/* VITALS */}
          <h3 className="font-bold text-blue-700 mt-6 mb-4">
            🩺 Vitals
          </h3>

          {vitals.map((v) => (
            <input
              key={v.key}
              type="number"
              placeholder={v.label}
              value={(data as any)[v.key]}
              className="w-full border rounded p-3 mb-4"
              onChange={(e) =>
                setData({
                  ...data,
                  [v.key]:
                    e.target.value,
                })
              }
            />
          ))}

          <button
            onClick={triage}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
          >
            TRIAGE NOW
          </button>

          {/* RESULT */}
          {result && (
            <div className="mt-6 space-y-4">

              <h3 className="text-2xl font-bold">
                {result}
              </h3>

              <div>
                <p className="text-blue-700 font-semibold">
                  🧠 Reason:
                </p>

                <ul className="list-disc ml-6 text-blue-700">
                  {reason
                    .split("\n")
                    .map(
                      (r, i) => (
                        <li key={i}>
                          {r}
                        </li>
                      )
                    )}
                </ul>
              </div>

              {alerts.map(
                (a, i) => (
                  <div
                    key={i}
                    className="bg-orange-50 p-3 rounded"
                  >
                    ⚠️ {a}
                  </div>
                )
              )}

              <p className="text-gray-700 font-medium">
                {action}
              </p>

              <button
                onClick={onNext}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
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
    label: "Consciousness",
    options: ["Yes", "No"],
  },
  {
    key: "orientation",
    label: "Orientation",
    options: [
      "Oriented",
      "Not Oriented",
    ],
  },
  {
    key: "mobility",
    label: "Mobility",
    options: [
      "Yes",
      "No",
      "Paralysis",
    ],
  },
  {
    key: "injury",
    label: "Mechanism of Injury",
    options: [
      "RTA",
      "Fire Burn",
      "Fall / Collapse",
      "Other",
    ],
  },
  {
    key: "bleeding",
    label: "External Bleeding",
    options: [
      "None",
      "Minor",
      "Major",
    ],
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
];

const vitals = [
  {
    key: "pulse",
    label: "Pulse Rate",
  },
  {
    key: "rr",
    label: "Respiratory Rate",
  },
  {
    key: "bp",
    label: "Blood Pressure",
  },
  {
    key: "spo2",
    label: "SpO2 %",
  },
  // {
  //   key: "temp",
  //   label: "Temperature °C",
  // },
  {
    key: "sugar",
    label: "Blood Sugar",
  },
];