// // "use client";
// // import { useEffect, useState } from "react";

// // export default function PatientList() {
// //   const [patients, setPatients] = useState<any[]>([]);

// //   useEffect(() => {
// //     const data = JSON.parse(localStorage.getItem("patients") || "[]");
// //     setPatients(data);
// //   }, []);

// //   return (
// //     <section className="bg-gray-100 py-16">
// //       <div className="max-w-6xl mx-auto px-4">

// //         <h2 className="text-2xl font-bold mb-6">📋 Patient Dashboard</h2>

// //         <div className="bg-white p-4 rounded border">
// //           {patients.length === 0 ? (
// //             <p>No patients yet</p>
// //           ) : (
// //             <table className="w-full">
// //               <thead>
// //                 <tr className="border-b">
// //                   <th>Name</th>
// //                   <th>Age</th>
// //                   <th>Severity</th>
// //                   <th>Time</th>
// //                 </tr>
// //               </thead>

// //               <tbody>
// //                 {patients.map((p, i) => (
// //                   <tr key={i} className="border-b">
// //                     <td>{p.name}</td>
// //                     <td>{p.age}</td>
// //                     <td>{p.result}</td>
// //                     <td>{p.time}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           )}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }


// "use client";
// import { useState } from "react";

// export default function PatientForm({ onCreate }: any) {
//   const [patient, setPatient] = useState({
//     name: "",
//     gender: "Male",
//     age: "Adult",
//     pregnant: "No",
//   });

//   function handleSubmit() {
//     if (!patient.name) {
//       alert("Name is required");
//       return;
//     }

//     onCreate(patient); // send to parent
//   }

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-xl border mb-6">

//       <h3 className="text-lg font-semibold mb-4">
//         🧾 Patient Details
//       </h3>

//       <input
//         type="text"
//         placeholder="Patient Name *"
//         className="w-full border p-2 mb-3 rounded"
//         onChange={(e) =>
//           setPatient({ ...patient, name: e.target.value })
//         }
//       />

//       <select
//         className="w-full border p-2 mb-3 rounded"
//         onChange={(e) =>
//           setPatient({ ...patient, gender: e.target.value })
//         }
//       >
//         <option>Male</option>
//         <option>Female</option>
//       </select>

//       <select
//         className="w-full border p-2 mb-3 rounded"
//         onChange={(e) =>
//           setPatient({ ...patient, age: e.target.value })
//         }
//       >
//         <option>Child</option>
//         <option>Adult</option>
//         <option>Elderly</option>
//       </select>

//       {patient.gender === "Female" && (
//         <select
//           className="w-full border p-2 mb-3 rounded"
//           onChange={(e) =>
//             setPatient({ ...patient, pregnant: e.target.value })
//           }
//         >
//           <option>No</option>
//           <option>Yes</option>
//         </select>
//       )}

//       <button
//         onClick={handleSubmit}
//         className="w-full bg-blue-600 text-white py-2 rounded"
//       >
//         ➡️ Continue to Triage
//       </button>
//     </div>
//   );
// }


"use client";
import { useState } from "react";

export default function PatientForm({ onCreate }: any) {
  const [patient, setPatient] = useState({
    name: "",
    gender: "",
    age: "",
    pregnant: "",
  });

  function handleSubmit() {
    if (!patient.name || !patient.gender || !patient.age) {
      alert("Please fill all required (*) fields");
      return;
    }

    onCreate(patient);
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl border mb-6">

      <h2 className="text-xl font-bold mb-4 text-center">
        🧾 Patient Registration
      </h2>

      <input
        type="text"
        placeholder="Patient Name *"
        className="w-full border p-2 mb-3 rounded"
        onChange={(e) =>
          setPatient({ ...patient, name: e.target.value })
        }
      />

      <select
        defaultValue=""
        className="w-full border p-2 mb-3 rounded"
        onChange={(e) =>
          setPatient({ ...patient, gender: e.target.value })
        }
      >
        <option value="" disabled>Select Gender *</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <select
        defaultValue=""
        className="w-full border p-2 mb-3 rounded"
        onChange={(e) =>
          setPatient({ ...patient, age: e.target.value })
        }
      >
        <option value="" disabled>Select Age *</option>
        <option>Child</option>
        <option>Adult</option>
        <option>Elderly</option>
      </select>

      {patient.gender === "Female" && (
        <select
          defaultValue=""
          className="w-full border p-2 mb-3 rounded"
          onChange={(e) =>
            setPatient({ ...patient, pregnant: e.target.value })
          }
        >
          <option value="" disabled>Pregnant?</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      )}

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        ➡️ Continue to Triage
      </button>
    </div>
  );
}