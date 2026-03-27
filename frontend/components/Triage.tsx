
// // // "use client";
// // // import { useState } from "react";

// // // export default function Triage() {
// // //   const [data, setData] = useState({
// // //     conscious: "Yes",
// // //     breathing: "Normal",
// // //     pulse: "Normal",
// // //     injury: "Minor",
// // //     pain: "No",
// // //     neuro: "No",
// // //     burn: "<10%",
// // //     smoke: "No",
// // //   });

// // //   const [result, setResult] = useState("");
// // //   const [alerts, setAlerts] = useState("");
// // //   const [action, setAction] = useState("");

// // //   function triage() {
// // //     const { conscious, breathing, pulse, injury, pain, neuro, burn, smoke } = data;

// // //     let res = "";
// // //     let alertText = "";
// // //     let act = "";

// // //     if (conscious === "No" && breathing === "Absent") {
// // //       res = "⚫ BLACK - No Survival";
// // //       act = "Focus on other patients";
// // //     } else if (
// // //       conscious === "No" ||
// // //       breathing === "Irregular" ||
// // //       pulse === "Weak" ||
// // //       burn === ">30%" ||
// // //       smoke === "Yes"
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

// // //     if (
// // //       ((injury === "High-speed accident" || injury === "Fall") &&
// // //         (pain === "Yes" || neuro === "Yes")) ||
// // //       conscious === "No"
// // //     ) {
// // //       alertText += "⚠️ Spinal Injury – Immobilize spine\n";
// // //     }

// // //     if (breathing !== "Normal" || smoke === "Yes") {
// // //       alertText += "⚠️ Airway Alert – Provide oxygen\n";
// // //     }

// // //     if (pulse === "Weak" || burn === ">30%") {
// // //       alertText += "⚠️ Shock Alert – Start IV fluids\n";
// // //     }

// // //     setResult(res);
// // //     setAlerts(alertText);
// // //     setAction(act);
// // //   }

// // //   return (
// // //     <section id="logic" className="bg-white py-16">
// // //       <div className="max-w-6xl mx-auto px-4">

// // //         <h2 className="text-2xl font-bold text-center mb-10">
// // //           Intelligent Triage System
// // //         </h2>

// // //         <div className="max-w-md mx-auto border rounded-xl p-6">

// // //           {Object.keys(data).map((key) => (
// // //             <div key={key} className="mb-4">
// // //               <label className="block mb-1 capitalize">{key}</label>
// // //               <select
// // //                 className="w-full border p-2 rounded"
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
// // //             className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700"
// // //           >
// // //             🚑 TRIAGE NOW
// // //           </button>

// // //           {result && (
// // //             <div className="mt-6">

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

// // //               <p className="text-orange-600 mt-2 whitespace-pre-line">
// // //                 {alerts}
// // //               </p>

// // //               <p className="text-gray-700 mt-2">
// // //                 {action}
// // //               </p>

// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // function getOptions(key: string) {
// // //   switch (key) {
// // //     case "conscious": return ["Yes", "No"];
// // //     case "breathing": return ["Normal", "Irregular", "Absent"];
// // //     case "pulse": return ["Normal", "Weak", "Absent"];
// // //     case "injury": return ["Minor", "High-speed accident", "Fall", "Fire burn"];
// // //     case "pain": return ["No", "Yes"];
// // //     case "neuro": return ["No", "Yes"];
// // //     case "burn": return ["<10%", "10-30%", ">30%"];
// // //     case "smoke": return ["No", "Yes"];
// // //     default: return [];
// // //   }
// // // }



// // "use client";
// // import { useState } from "react";

// // export default function Triage() {
// //   const [data, setData] = useState({
// //     conscious: "Yes",
// //     breathing: "Normal",
// //     pulse: "Normal",
// //     injury: "Minor",
// //     pain: "No",
// //     neuro: "No",
// //     burn: "<10%",
// //     smoke: "No",
// //   });

// //   const [result, setResult] = useState("");
// //   const [alerts, setAlerts] = useState("");
// //   const [action, setAction] = useState("");

// //   function triage() {
// //     const { conscious, breathing, pulse, injury, pain, neuro, burn, smoke } = data;

// //     let res = "";
// //     let alertText = "";
// //     let act = "";

// //     if (conscious === "No" && breathing === "Absent") {
// //       res = "⚫ BLACK - No Survival";
// //       act = "Focus on other patients";
// //     } else if (
// //       conscious === "No" ||
// //       breathing === "Irregular" ||
// //       pulse === "Weak" ||
// //       burn === ">30%" ||
// //       smoke === "Yes"
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

// //     if (
// //       ((injury === "High-speed accident" || injury === "Fall") &&
// //         (pain === "Yes" || neuro === "Yes")) ||
// //       conscious === "No"
// //     ) {
// //       alertText += "⚠️ Spinal Injury – Immobilize spine\n";
// //     }

// //     if (breathing !== "Normal" || smoke === "Yes") {
// //       alertText += "⚠️ Airway Alert – Provide oxygen\n";
// //     }

// //     if (pulse === "Weak" || burn === ">30%") {
// //       alertText += "⚠️ Shock Alert – Start IV fluids\n";
// //     }

// //     setResult(res);
// //     setAlerts(alertText);
// //     setAction(act);
// //   }

// //   return (
// //     <section id="logic" className="bg-white py-16">
// //       <div className="max-w-6xl mx-auto px-4">

// //         <h2 className="text-2xl font-bold text-center mb-10">
// //           Intelligent Triage System
// //         </h2>

// //         <div className="max-w-md mx-auto border rounded-xl p-6">

// //           {Object.keys(data).map((key) => (
// //             <div key={key} className="mb-4">
// //               <label className="block mb-1 capitalize">{key}</label>
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
// //             className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700"
// //           >
// //             🚑 TRIAGE NOW
// //           </button>

// //           {result && (
// //             <div className="mt-6">

// //               <h3
// //                 className={`text-xl font-bold ${
// //                   result.includes("RED")
// //                     ? "text-red-600"
// //                     : result.includes("YELLOW")
// //                     ? "text-yellow-600"
// //                     : result.includes("GREEN")
// //                     ? "text-green-600"
// //                     : "text-gray-600"
// //                 }`}
// //               >
// //                 {result}
// //               </h3>

// //               <p className="text-orange-600 mt-2 whitespace-pre-line">
// //                 {alerts}
// //               </p>

// //               <p className="text-gray-700 mt-2">
// //                 {action}
// //               </p>

// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function getOptions(key: string) {
// //   switch (key) {
// //     case "conscious": return ["Yes", "No"];
// //     case "breathing": return ["Normal", "Irregular", "Absent"];
// //     case "pulse": return ["Normal", "Weak", "Absent"];
// //     case "injury": return ["Minor", "High-speed accident", "Fall", "Fire burn"];
// //     case "pain": return ["No", "Yes"];
// //     case "neuro": return ["No", "Yes"];
// //     case "burn": return ["<10%", "10-30%", ">30%"];
// //     case "smoke": return ["No", "Yes"];
// //     default: return [];
// //   }
// // }



// "use client";
// import { useState } from "react";

// export default function Triage() {
//   const [data, setData] = useState({
//     conscious: "Yes",
//     breathing: "Normal",
//     pulse: "Normal",
//     injury: "Minor",
//     pain: "No",
//     neuro: "No",
//     burn: "<10%",
//     smoke: "No",
//   });

//   const [result, setResult] = useState("");
//   const [alerts, setAlerts] = useState("");
//   const [action, setAction] = useState("");

//   function triage() {
//     const { conscious, breathing, pulse, injury, pain, neuro, burn, smoke } = data;

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
//       smoke === "Yes"
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
//     if (
//       ((injury === "High-speed accident" || injury === "Fall") &&
//         (pain === "Yes" || neuro !== "No")) ||
//       conscious === "No"
//     ) {
//       alertText += "⚠️ Spinal Injury – Immobilize spine\n";
//     }

//     if (breathing !== "Normal" || smoke === "Yes") {
//       alertText += "⚠️ Airway Alert – Provide oxygen\n";
//     }

//     if (pulse === "Weak" || burn === ">30%") {
//       alertText += "⚠️ Shock Alert – Start IV fluids\n";
//     }

//     setResult(res);
//     setAlerts(alertText);
//     setAction(act);
//   }

//   return (
//     <section id="logic" className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-4">

//         <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
//           Intelligent Triage System
//         </h2>

//         <div className="max-w-md mx-auto bg-gray-50 border rounded-2xl p-6 shadow-sm">

//           {Object.keys(data).map((key) => (
//             <div key={key} className="mb-4">
//               <label className="block mb-1 text-sm font-medium text-gray-700">
//                 {getLabel(key)}
//               </label>

//               <select
//                 className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//                 value={data[key as keyof typeof data]}
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
//             className="w-full bg-red-600 text-white py-2 rounded-lg mt-4 hover:bg-red-700 transition"
//           >
//             🚑 TRIAGE NOW
//           </button>

//           {result && (
//             <div className="mt-6 border-t pt-4">

//               <h3
//                 className={`text-xl font-bold ${
//                   result.includes("RED")
//                     ? "text-red-600"
//                     : result.includes("YELLOW")
//                     ? "text-yellow-600"
//                     : result.includes("GREEN")
//                     ? "text-green-600"
//                     : "text-gray-600"
//                 }`}
//               >
//                 {result}
//               </h3>

//               <p className="text-orange-600 mt-2 whitespace-pre-line text-sm">
//                 {alerts}
//               </p>

//               <p className="text-gray-700 mt-2 text-sm">
//                 {action}
//               </p>

//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }


// // 🧠 CLEAN LABELS
// function getLabel(key: string) {
//   switch (key) {
//     case "conscious": return "Conscious?";
//     case "breathing": return "Breathing Status";
//     case "pulse": return "Pulse Status";
//     case "injury": return "Mechanism of Injury";
//     case "pain": return "Neck / Back Pain";
//     case "neuro": return "Neurological Deficits";
//     case "burn": return "Burn Severity";
//     case "smoke": return "Smoke Inhalation";
//     default: return key;
//   }
// }


// // ⚙️ OPTIONS
// function getOptions(key: string) {
//   switch (key) {
//     case "conscious": return ["Yes", "No"];
//     case "breathing": return ["Normal", "Irregular", "Absent"];
//     case "pulse": return ["Normal", "Weak", "Absent"];
//     case "injury": return ["Minor", "High-speed accident", "Fall", "Fire burn"];
//     case "pain": return ["No", "Yes"];
//     case "neuro":
//       return ["No", "Limb Weakness", "Numbness", "Paralysis", "Altered Sensation"];
//     case "burn": return ["<10%", "10-30%", ">30%"];
//     case "smoke": return ["No", "Yes"];
//     default: return [];
//   }
// }


"use client";
import { useState } from "react";

export default function Triage() {
  const [data, setData] = useState({
    age: "Adult",
    conscious: "Yes",
    breathing: "Normal",
    pulse: "Normal",
    injury: "Minor",
    pain: "No",
    neuro: "No",
    burn: "<10%",
    smokeInhalation: "No", // ✅ updated
  });

  const [result, setResult] = useState("");
  const [alerts, setAlerts] = useState("");
  const [action, setAction] = useState("");

  function triage() {
    const {
      age,
      conscious,
      breathing,
      pulse,
      injury,
      pain,
      neuro,
      burn,
      smokeInhalation,
    } = data;

    let res = "";
    let alertText = "";
    let act = "";

    // 🔴 TRIAGE
    if (conscious === "No" && breathing === "Absent") {
      res = "⚫ BLACK - No Survival";
      act = "Focus on other patients";
    } else if (
      conscious === "No" ||
      breathing === "Irregular" ||
      pulse === "Weak" ||
      burn === ">30%" ||
      smokeInhalation === "Yes"
    ) {
      res = "🔴 RED - Critical";
      act = "Airway + Oxygen + IV + Rapid transport";
    } else if (burn === "10-30%") {
      res = "🟡 YELLOW - Urgent";
      act = "Monitor + Fluids + Dressing";
    } else {
      res = "🟢 GREEN - Stable";
      act = "Basic care";
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

    // 🧠 AGE LOGIC
    if (age === "Child") {
      alertText += "👶 Pediatric Case – Adjust drug dosage carefully\n";
    }

    if (age === "Elderly") {
      alertText += "👴 Geriatric Risk – Monitor vitals closely\n";
    }

    setResult(res);
    setAlerts(alertText);
    setAction(act);
  }

  return (
    <section id="logic" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Intelligent Triage System
        </h2>

        <div className="max-w-md mx-auto bg-gray-50 border rounded-2xl p-6 shadow-sm">

          {Object.keys(data).map((key) => (
            <div key={key} className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                {getLabel(key)}
              </label>

              <select
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                value={data[key as keyof typeof data]}
                onChange={(e) =>
                  setData({ ...data, [key]: e.target.value })
                }
              >
                {getOptions(key).map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}

          <button
            onClick={triage}
            className="w-full bg-red-600 text-white py-2 rounded-lg mt-4 hover:bg-red-700 transition"
          >
            🚑 TRIAGE NOW
          </button>

          {result && (
            <div className="mt-6 border-t pt-4">

              <h3
                className={`text-xl font-bold ${
                  result.includes("RED")
                    ? "text-red-600"
                    : result.includes("YELLOW")
                    ? "text-yellow-600"
                    : result.includes("GREEN")
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                {result}
              </h3>

              <p className="text-orange-600 mt-2 whitespace-pre-line text-sm">
                {alerts}
              </p>

              <p className="text-gray-700 mt-2 text-sm">
                {action}
              </p>

            </div>
          )}
        </div>
      </div>
    </section>
  );
}


// 🧠 LABELS
function getLabel(key: string) {
  switch (key) {
    case "age": return "Age Group";
    case "conscious": return "Conscious?";
    case "breathing": return "Breathing Status";
    case "pulse": return "Pulse Status";
    case "injury": return "Mechanism of Injury";
    case "pain": return "Neck / Back Pain";
    case "neuro": return "Neurological Deficits";
    case "burn": return "Burn Severity";
    case "smokeInhalation": return "Smoke Inhalation"; // ✅ updated
    default: return key;
  }
}


// ⚙️ OPTIONS
function getOptions(key: string) {
  switch (key) {
    case "age": return ["Child", "Adult", "Elderly"];
    case "conscious": return ["Yes", "No"];
    case "breathing": return ["Normal", "Irregular", "Absent"];
    case "pulse": return ["Normal", "Weak", "Absent"];
    case "injury": return ["Minor", "High-speed accident", "Fall", "Fire burn"];
    case "pain": return ["No", "Yes"];
    case "neuro":
      return ["No", "Limb Weakness", "Numbness", "Paralysis", "Altered Sensation"];
    case "burn": return ["<10%", "10-30%", ">30%"];
    case "smokeInhalation": return ["No", "Yes"]; // ✅ updated
    default: return [];
  }
}