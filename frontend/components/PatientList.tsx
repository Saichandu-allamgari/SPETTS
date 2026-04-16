// // // "use client";
// // // import { useState } from "react";

// // // export default function PatientForm({ onCreate }: any) {
// // //   const [patient, setPatient] = useState({
// // //     name: "",
// // //     gender: "",
// // //     age: "",
// // //     pregnant: "",
// // //   });

// // //   function handleSubmit() {
// // //     if (!patient.name || !patient.gender || !patient.age) {
// // //       alert("Please fill all required (*) fields");
// // //       return;
// // //     }

// // //     onCreate(patient);
// // //   }

// // //   return (
// // //     <div className="max-w-md mx-auto bg-white p-6 rounded-xl border mb-6">

// // //       <h2 className="text-xl font-bold mb-4 text-center">
// // //         🧾 Patient Registration
// // //       </h2>

// // //       <input
// // //         type="text"
// // //         placeholder="Patient Name *"
// // //         className="w-full border p-2 mb-3 rounded"
// // //         onChange={(e) =>
// // //           setPatient({ ...patient, name: e.target.value })
// // //         }
// // //       />

// // //       <select
// // //         defaultValue=""
// // //         className="w-full border p-2 mb-3 rounded"
// // //         onChange={(e) =>
// // //           setPatient({ ...patient, gender: e.target.value })
// // //         }
// // //       >
// // //         <option value="" disabled>Select Gender *</option>
// // //         <option>Male</option>
// // //         <option>Female</option>
// // //       </select>

// // //       <select
// // //         defaultValue=""
// // //         className="w-full border p-2 mb-3 rounded"
// // //         onChange={(e) =>
// // //           setPatient({ ...patient, age: e.target.value })
// // //         }
// // //       >
// // //         <option value="" disabled>Select Age *</option>
// // //         <option>Child</option>
// // //         <option>Adult</option>
// // //         <option>Elderly</option>
// // //       </select>

// // //       {patient.gender === "Female" && (
// // //         <select
// // //           defaultValue=""
// // //           className="w-full border p-2 mb-3 rounded"
// // //           onChange={(e) =>
// // //             setPatient({ ...patient, pregnant: e.target.value })
// // //           }
// // //         >
// // //           <option value="" disabled>Pregnant?</option>
// // //           <option>Yes</option>
// // //           <option>No</option>
// // //         </select>
// // //       )}

// // //       <button
// // //         onClick={handleSubmit}
// // //         className="w-full bg-blue-600 text-white py-2 rounded"
// // //       >
// // //         ➡️ Continue to Triage
// // //       </button>
// // //     </div>
// // //   );
// // // }

// // // src/components/PatientForm.tsx
// // "use client";

// // import { useState } from "react";

// // export default function PatientForm({ onCreate }: any) {
// //   const [patient, setPatient] = useState({
// //     name: "",
// //     gender: "",
// //     age: "",
// //     pregnant: "",
// //     image: "",
// //   });

// //   function submit() {
// //     if (!patient.name || !patient.gender || !patient.age) {
// //       alert("Please fill required fields");
// //       return;
// //     }

// //     onCreate(patient);
// //   }

// //   return (
// //     <section className="bg-white py-14">
// //       <div className="max-w-6xl mx-auto px-4">

// //         <h2 className="text-3xl font-bold text-center mb-8">
// //           🧾 Patient Registration
// //         </h2>

// //         <div className="max-w-xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">

// //           <input
// //             type="text"
// //             placeholder="Patient Name *"
// //             className="w-full border rounded p-3 mb-4"
// //             onChange={(e) =>
// //               setPatient({ ...patient, name: e.target.value })
// //             }
// //           />

// //           <select
// //             defaultValue=""
// //             className="w-full border rounded p-3 mb-4"
// //             onChange={(e) =>
// //               setPatient({ ...patient, gender: e.target.value })
// //             }
// //           >
// //             <option value="" disabled>Select Gender *</option>
// //             <option>Male</option>
// //             <option>Female</option>
// //           </select>

// //           <select
// //             defaultValue=""
// //             className="w-full border rounded p-3 mb-4"
// //             onChange={(e) =>
// //               setPatient({ ...patient, age: e.target.value })
// //             }
// //           >
// //             <option value="" disabled>Select Age Group *</option>
// //             <option>Child</option>
// //             <option>Adult</option>
// //             <option>Elderly</option>
// //           </select>

// //           {/* pregnancy only adult female */}
// //           {patient.gender === "Female" &&
// //             patient.age === "Adult" && (
// //               <select
// //                 defaultValue=""
// //                 className="w-full border rounded p-3 mb-4"
// //                 onChange={(e) =>
// //                   setPatient({
// //                     ...patient,
// //                     pregnant: e.target.value,
// //                   })
// //                 }
// //               >
// //                 <option value="" disabled>
// //                   Pregnant?
// //                 </option>
// //                 <option>Yes</option>
// //                 <option>No</option>
// //               </select>
// //             )}

// //           {/* image option */}
// //           <input
// //             type="file"
// //             className="w-full border rounded p-3 mb-4"
// //             onChange={(e: any) =>
// //               setPatient({
// //                 ...patient,
// //                 image: e.target.files?.[0]?.name || "",
// //               })
// //             }
// //           />

// //           <button
// //             onClick={submit}
// //             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
// //           >
// //             Continue to Triage →
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useRef, useState } from "react";

// export default function PatientForm({ onCreate }: any) {
//   const cameraRef = useRef<HTMLInputElement>(null);
//   const uploadRef = useRef<HTMLInputElement>(null);

//   const [patient, setPatient] = useState({
//     name: "",
//     gender: "",
//     age: "",
//     pregnant: "",
//     image: "",
//   });

//   function submit() {
//     if (
//       !patient.name ||
//       !patient.gender ||
//       !patient.age
//     ) {
//       alert("Please fill required fields");
//       return;
//     }

//     onCreate(patient);
//   }

//   return (
//     <section className="bg-white py-14">
//       <div className="max-w-6xl mx-auto px-4">

//         <h2 className="text-3xl font-bold text-center mb-8">
//           🧾 Patient Registration
//         </h2>

//         <div className="max-w-xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">

//           {/* Name */}
//           <input
//             type="text"
//             placeholder="Patient Name *"
//             className="w-full border rounded p-3 mb-4"
//             onChange={(e) =>
//               setPatient({
//                 ...patient,
//                 name: e.target.value,
//               })
//             }
//           />

//           {/* Gender */}
//           <select
//             defaultValue=""
//             className="w-full border rounded p-3 mb-4"
//             onChange={(e) =>
//               setPatient({
//                 ...patient,
//                 gender: e.target.value,
//               })
//             }
//           >
//             <option value="" disabled>
//               Select Gender *
//             </option>
//             <option>Male</option>
//             <option>Female</option>
//           </select>

//           {/* Age Group */}
//           <select
//             defaultValue=""
//             className="w-full border rounded p-3 mb-4"
//             onChange={(e) =>
//               setPatient({
//                 ...patient,
//                 age: e.target.value,
//               })
//             }
//           >
//             <option value="" disabled>
//               Select Age Group *
//             </option>
//             <option>Child</option>
//             <option>Adult</option>
//             <option>Elderly</option>
//           </select>

//           {/* Pregnancy only for Adult Female */}
//           {patient.gender === "Female" &&
//             patient.age === "Adult" && (
//               <select
//                 defaultValue=""
//                 className="w-full border rounded p-3 mb-4"
//                 onChange={(e) =>
//                   setPatient({
//                     ...patient,
//                     pregnant: e.target.value,
//                   })
//                 }
//               >
//                 <option value="" disabled>
//                   Pregnant?
//                 </option>
//                 <option>Yes</option>
//                 <option>No</option>
//               </select>
//             )}

//           {/* Divider */}
//           <div className="text-center text-sm text-gray-500 mb-3">
//             OR Capture / Upload Patient Image
//           </div>

//           {/* Hidden Camera Input */}
//           <input
//             ref={cameraRef}
//             type="file"
//             accept="image/*"
//             capture="environment"
//             className="hidden"
//             onChange={(e) =>
//               setPatient({
//                 ...patient,
//                 image:
//                   e.target.files?.[0]?.name || "",
//               })
//             }
//           />

//           {/* Hidden Upload Input */}
//           <input
//             ref={uploadRef}
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={(e) =>
//               setPatient({
//                 ...patient,
//                 image:
//                   e.target.files?.[0]?.name || "",
//               })
//             }
//           />

//           {/* Buttons */}
//           <div className="grid grid-cols-2 gap-3 mb-4">

//             <button
//               type="button"
//               onClick={() =>
//                 cameraRef.current?.click()
//               }
//               className="border rounded-xl py-3 hover:bg-slate-50"
//             >
//               📷 Open Camera
//             </button>

//             <button
//               type="button"
//               onClick={() =>
//                 uploadRef.current?.click()
//               }
//               className="border rounded-xl py-3 hover:bg-slate-50"
//             >
//               ⬆ Upload Image
//             </button>

//           </div>

//           {/* File Name */}
//           {patient.image && (
//             <p className="text-sm text-green-600 mb-4">
//               Saved: {patient.image}
//             </p>
//           )}

//           {/* Submit */}
//           <button
//             onClick={submit}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
//           >
//             Continue to Triage →
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef, useState } from "react";

export default function PatientForm({ onCreate }: any) {
  const cameraRef = useRef<HTMLInputElement>(null);
  const uploadRef = useRef<HTMLInputElement>(null);

  const [patient, setPatient] = useState({
    name: "",
    gender: "",
    age: "",
    pregnant: "",
    image: "",
  });

  function submit() {
    const hasDetails =
      patient.name &&
      patient.gender &&
      patient.age;

    const hasImage = patient.image;

    // Either details OR image required
    if (!hasDetails && !hasImage) {
      alert(
        "Enter patient details OR upload image"
      );
      return;
    }

    onCreate(patient);
  }

  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-8">
          🧾 Patient Registration
        </h2>

        <div className="max-w-xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">

          <p className="text-center text-sm text-gray-500 mb-6">
            Fill patient details OR use image option
          </p>

          {/* Name */}
          <input
            type="text"
            placeholder="Patient Name"
            className="w-full border rounded p-3 mb-4"
            onChange={(e) =>
              setPatient({
                ...patient,
                name: e.target.value,
              })
            }
          />

          {/* Gender */}
          <select
            defaultValue=""
            className="w-full border rounded p-3 mb-4"
            onChange={(e) =>
              setPatient({
                ...patient,
                gender: e.target.value,
              })
            }
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>

          {/* Age Group */}
          <select
            defaultValue=""
            className="w-full border rounded p-3 mb-4"
            onChange={(e) =>
              setPatient({
                ...patient,
                age: e.target.value,
              })
            }
          >
            <option value="" disabled>
              Select Age Group
            </option>
            <option>Child</option>
            <option>Adult</option>
            <option>Elderly</option>
          </select>

          {/* Pregnancy only Female Adult */}
          {patient.gender === "Female" &&
            patient.age === "Adult" && (
              <select
                defaultValue=""
                className="w-full border rounded p-3 mb-4"
                onChange={(e) =>
                  setPatient({
                    ...patient,
                    pregnant:
                      e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Pregnant?
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            )}

          {/* Divider */}
          <div className="text-center text-sm text-gray-500 mb-3">
            OR Capture / Upload Patient Image
          </div>

          {/* Camera Input */}
          <input
            ref={cameraRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) =>
              setPatient({
                ...patient,
                image:
                  e.target.files?.[0]
                    ?.name || "",
              })
            }
          />

          {/* Upload Input */}
          <input
            ref={uploadRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) =>
              setPatient({
                ...patient,
                image:
                  e.target.files?.[0]
                    ?.name || "",
              })
            }
          />

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-4">

            <button
              type="button"
              onClick={() =>
                cameraRef.current?.click()
              }
              className="border rounded-xl py-3 hover:bg-slate-50 transition"
            >
              📷 Open Camera
            </button>

            <button
              type="button"
              onClick={() =>
                uploadRef.current?.click()
              }
              className="border rounded-xl py-3 hover:bg-slate-50 transition"
            >
              ⬆ Upload Image
            </button>

          </div>

          {/* Selected File */}
          {patient.image && (
            <p className="text-sm text-green-600 mb-4">
              Saved: {patient.image}
            </p>
          )}

          {/* Submit */}
          <button
            onClick={submit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
          >
            Continue to Triage →
          </button>

        </div>
      </div>
    </section>
  );
}