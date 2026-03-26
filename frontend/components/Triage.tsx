// // // "use client";
// // // import { useState } from "react";

// // // export default function Triage() {
// // //   const [data, setData] = useState({
// // //     conscious: "Yes",
// // //     breathing: "Normal",
// // //     pulse: "Normal",
// // //     burn: "<10%",
// // //     smoke: "No",
// // //   });

// // //   const [result, setResult] = useState("");
// // //   const [action, setAction] = useState("");

// // //   function triage() {
// // //     const { conscious, breathing, pulse, burn, smoke } = data;

// // //     if (conscious === "No" && breathing === "Absent") {
// // //       setResult("⚫ BLACK - No Survival");
// // //       setAction("Focus on other patients");
// // //     } else if (
// // //       conscious === "No" ||
// // //       breathing === "Irregular" ||
// // //       pulse === "Weak" ||
// // //       burn === ">30%" ||
// // //       smoke === "Yes"
// // //     ) {
// // //       setResult("🔴 RED - Critical");
// // //       setAction("Airway + Oxygen + Immediate transport");
// // //     } else if (burn === "10-30%") {
// // //       setResult("🟡 YELLOW - Urgent");
// // //       setAction("Monitor + Fluids + Dressing");
// // //     } else {
// // //       setResult("🟢 GREEN - Stable");
// // //       setAction("Basic care");
// // //     }
// // //   }

// // //   return (
// // //     <section id="logic" className="py-16 px-6 bg-gray-900">
// // //       <h2 className="text-2xl font-bold text-center mb-10">
// // //         🔥 Live Triage System
// // //       </h2>

// // //       <div className="max-w-md mx-auto bg-black p-6 rounded-xl border border-gray-800">

// // //         {Object.keys(data).map((key) => (
// // //           <div key={key} className="mb-4">
// // //             <label className="capitalize block mb-1">{key}</label>
// // //             <select
// // //               className="w-full p-2 text-black rounded"
// // //               onChange={(e) =>
// // //                 setData({ ...data, [key]: e.target.value })
// // //               }
// // //             >
// // //               {getOptions(key).map((opt) => (
// // //                 <option key={opt}>{opt}</option>
// // //               ))}
// // //             </select>
// // //           </div>
// // //         ))}

// // //         <button
// // //           onClick={triage}
// // //           className="w-full bg-red-600 py-2 rounded mt-4 hover:bg-red-700"
// // //         >
// // //           Check Triage
// // //         </button>

// // //         {result && (
// // //           <div className="mt-6 text-center">
// // //             <h3 className="text-xl font-bold">{result}</h3>
// // //             <p className="text-gray-400 mt-2">{action}</p>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // function getOptions(key: string) {
// // //   switch (key) {
// // //     case "conscious": return ["Yes", "No"];
// // //     case "breathing": return ["Normal", "Irregular", "Absent"];
// // //     case "pulse": return ["Normal", "Weak", "Absent"];
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
// //     burn: "<10%",
// //     smoke: "No",
// //     mechanism: "Minor",
// //     pain: "No",
// //     weakness: "No",
// //   });

// //   const [result, setResult] = useState("");
// //   const [action, setAction] = useState("");
// //   const [spinal, setSpinal] = useState("");

// //   function triage() {
// //     const {
// //       conscious,
// //       breathing,
// //       pulse,
// //       burn,
// //       smoke,
// //       mechanism,
// //       pain,
// //       weakness,
// //     } = data;

// //     let triageResult = "";
// //     let triageAction = "";

// //     // 🔴 TRIAGE LOGIC
// //     if (conscious === "No" && breathing === "Absent") {
// //       triageResult = "⚫ BLACK - No Survival";
// //       triageAction = "Focus on other patients";
// //     } else if (
// //       conscious === "No" ||
// //       breathing === "Irregular" ||
// //       pulse === "Weak" ||
// //       burn === ">30%" ||
// //       smoke === "Yes"
// //     ) {
// //       triageResult = "🔴 RED - Critical";
// //       triageAction = "Airway + Oxygen + Immediate transport";
// //     } else if (burn === "10-30%") {
// //       triageResult = "🟡 YELLOW - Urgent";
// //       triageAction = "Monitor + Fluids + Dressing";
// //     } else {
// //       triageResult = "🟢 GREEN - Stable";
// //       triageAction = "Basic care";
// //     }

// //     // 🧠 SPINAL LOGIC
// //     let spinalAlert = "NO";

// //     if (
// //       (mechanism === "High-speed" || mechanism === "Fall") &&
// //       (pain === "Yes" || weakness === "Yes")
// //     ) {
// //       spinalAlert = "YES";
// //     }

// //     // 🔴 OVERRIDE: unconscious trauma
// //     if (conscious === "No" && mechanism !== "Minor") {
// //       spinalAlert = "YES";
// //     }

// //     // 🎯 ADD ACTIONS IF SPINAL ALERT
// //     if (spinalAlert === "YES") {
// //       triageAction +=
// //         "\n• Cervical spine immobilization\n• Apply spine board\n• Avoid movement";
// //     }

// //     setResult(triageResult);
// //     setAction(triageAction);
// //     setSpinal(spinalAlert);
// //   }

// //   return (
// //     <section id="logic" className="py-16">
// //       <h2 className="text-2xl font-bold text-center mb-10">
// //         Intelligent Triage System
// //       </h2>

// //       <div className="max-w-md mx-auto bg-white p-6 rounded-xl border border-gray-200">

// //         {Object.keys(data).map((key) => (
// //           <div key={key} className="mb-4">
// //             <label className="capitalize block mb-1">{key}</label>
// //             <select
// //               className="w-full p-2 border rounded"
// //               onChange={(e) =>
// //                 setData({ ...data, [key]: e.target.value })
// //               }
// //             >
// //               {getOptions(key).map((opt) => (
// //                 <option key={opt}>{opt}</option>
// //               ))}
// //             </select>
// //           </div>
// //         ))}

// //         <button
// //           onClick={triage}
// //           className="w-full bg-red-500 text-white py-2 rounded mt-4 hover:bg-red-600"
// //         >
// //           Check Triage
// //         </button>

// //         {result && (
// //           <div className="mt-6">
// //             <h3 className="text-xl font-bold">{result}</h3>

// //             <p className="mt-2 text-red-500 font-semibold">
// //               ⚠️ Spinal Injury Alert: {spinal}
// //             </p>

// //             <p className="text-gray-600 mt-2 whitespace-pre-line">
// //               {action}
// //             </p>
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

// // function getOptions(key: string) {
// //   switch (key) {
// //     case "conscious": return ["Yes", "No"];
// //     case "breathing": return ["Normal", "Irregular", "Absent"];
// //     case "pulse": return ["Normal", "Weak", "Absent"];
// //     case "burn": return ["<10%", "10-30%", ">30%"];
// //     case "smoke": return ["No", "Yes"];
// //     case "mechanism": return ["Minor", "Fall", "High-speed", "Fire"];
// //     case "pain": return ["No", "Yes"];
// //     case "weakness": return ["No", "Yes"];
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

//     // TRIAGE
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

//     // SPINAL
//     if (
//       ((injury === "High-speed accident" || injury === "Fall") &&
//         (pain === "Yes" || neuro === "Yes")) ||
//       conscious === "No"
//     ) {
//       alertText += "⚠️ Spinal Injury – Immobilize spine\n";
//     }

//     // AIRWAY
//     if (breathing === "Irregular" || breathing === "Absent" || smoke === "Yes") {
//       alertText += "⚠️ Airway Alert – Provide oxygen\n";
//     }

//     // SHOCK
//     if (pulse === "Weak" || burn === ">30%") {
//       alertText += "⚠️ Shock Alert – Start IV fluids\n";
//     }

//     setResult(res);
//     setAlerts(alertText);
//     setAction(act);
//   }

//   return (
//     <section id="logic" className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4">

//         <h2 className="text-2xl font-bold text-center mb-10">
//           Intelligent Triage System
//         </h2>

//         <div className="max-w-md mx-auto bg-white p-6 rounded-xl border">

//           {Object.keys(data).map((key) => (
//             <div key={key} className="mb-4">
//               <label className="capitalize block mb-1">{key}</label>
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
//             className="w-full bg-red-500 text-white py-2 rounded mt-4 hover:bg-red-600"
//           >
//             🚑 TRIAGE NOW
//           </button>

//           {/* RESULT */}
//           {result && (
//             <div className="mt-6">

//               <h3 className="text-xl font-bold">{result}</h3>

//               <p className="text-orange-500 whitespace-pre-line mt-2">
//                 {alerts}
//               </p>

//               <p className="text-gray-700 mt-2">
//                 {action}
//               </p>

//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// function getOptions(key: string) {
//   switch (key) {
//     case "conscious": return ["Yes", "No"];
//     case "breathing": return ["Normal", "Irregular", "Absent"];
//     case "pulse": return ["Normal", "Weak", "Absent"];
//     case "injury": return ["Minor", "High-speed accident", "Fall", "Fire burn"];
//     case "pain": return ["No", "Yes"];
//     case "neuro": return ["No", "Yes"];
//     case "burn": return ["<10%", "10-30%", ">30%"];
//     case "smoke": return ["No", "Yes"];
//     default: return [];
//   }
// }


"use client";
import { useState } from "react";

export default function Triage() {
  const [data, setData] = useState({
    conscious: "Yes",
    breathing: "Normal",
    pulse: "Normal",
    injury: "Minor",
    pain: "No",
    neuro: "No",
    burn: "<10%",
    smoke: "No",
  });

  const [result, setResult] = useState("");
  const [alerts, setAlerts] = useState("");
  const [action, setAction] = useState("");

  function triage() {
    const { conscious, breathing, pulse, injury, pain, neuro, burn, smoke } = data;

    let res = "";
    let alertText = "";
    let act = "";

    if (conscious === "No" && breathing === "Absent") {
      res = "⚫ BLACK - No Survival";
      act = "Focus on other patients";
    } else if (
      conscious === "No" ||
      breathing === "Irregular" ||
      pulse === "Weak" ||
      burn === ">30%" ||
      smoke === "Yes"
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

    if (
      ((injury === "High-speed accident" || injury === "Fall") &&
        (pain === "Yes" || neuro === "Yes")) ||
      conscious === "No"
    ) {
      alertText += "⚠️ Spinal Injury – Immobilize spine\n";
    }

    if (breathing !== "Normal" || smoke === "Yes") {
      alertText += "⚠️ Airway Alert – Provide oxygen\n";
    }

    if (pulse === "Weak" || burn === ">30%") {
      alertText += "⚠️ Shock Alert – Start IV fluids\n";
    }

    setResult(res);
    setAlerts(alertText);
    setAction(act);
  }

  return (
    <section id="logic" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-2xl font-bold text-center mb-10">
          Intelligent Triage System
        </h2>

        <div className="max-w-md mx-auto border rounded-xl p-6">

          {Object.keys(data).map((key) => (
            <div key={key} className="mb-4">
              <label className="block mb-1 capitalize">{key}</label>
              <select
                className="w-full border p-2 rounded"
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
            className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700"
          >
            🚑 TRIAGE NOW
          </button>

          {result && (
            <div className="mt-6">

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

              <p className="text-orange-600 mt-2 whitespace-pre-line">
                {alerts}
              </p>

              <p className="text-gray-700 mt-2">
                {action}
              </p>

            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function getOptions(key: string) {
  switch (key) {
    case "conscious": return ["Yes", "No"];
    case "breathing": return ["Normal", "Irregular", "Absent"];
    case "pulse": return ["Normal", "Weak", "Absent"];
    case "injury": return ["Minor", "High-speed accident", "Fall", "Fire burn"];
    case "pain": return ["No", "Yes"];
    case "neuro": return ["No", "Yes"];
    case "burn": return ["<10%", "10-30%", ">30%"];
    case "smoke": return ["No", "Yes"];
    default: return [];
  }
}