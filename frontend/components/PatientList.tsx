
// "use client";

// import { useRef, useState } from "react";

// export default function PatientForm({ onCreate }: any) {
//   const cameraRef =
//     useRef<HTMLInputElement>(null);

//   const uploadRef =
//     useRef<HTMLInputElement>(null);

//   const [patient, setPatient] = useState({
//     name: "",
//     gender: "",
//     ageInput: "",
//     ageGroup: "",
//     blood: "",
//     pregnant: "",
//     image: "",
//   });

//   function submit() {
//     const hasDetails =
//       patient.name ||
//       patient.gender ||
//       patient.ageInput ||
//       patient.ageGroup;

//     const hasImage = patient.image;

//     if (!hasDetails && !hasImage) {
//       alert(
//         "Enter patient details OR upload image"
//       );
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

//           <p className="text-center text-sm text-gray-500 mb-6">
//             Fill patient details OR use image option
//           </p>

//           {/* Name */}
//           <input
//             type="text"
//             placeholder="Patient Name"
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
//             <option
//               value=""
//               disabled
//             >
//               Select Gender
//             </option>
//             <option>Male</option>
//             <option>Female</option>
//           </select>

//           {/* Age Input */}
//           <input
//             type="number"
//             placeholder="Enter Age"
//             className="w-full border rounded p-3 mb-4"
//             onChange={(e) =>
//               setPatient({
//                 ...patient,
//                 ageInput:
//                   e.target.value,
//               })
//             }
//           />


//           {/* Divider */}
//           <div className="text-center text-sm text-gray-500 mb-3">
//             OR Capture / Upload
//             Patient Image
//           </div>

//                     <select
//             defaultValue=""
//             className="w-full border rounded p-3 mb-4"
//             onChange={(e) =>
//               setPatient({
//                 ...patient,
//                 ageGroup:
//                   e.target.value,
//               })
//             }
//           >
//             <option
//               value=""
//               disabled
//             >
//               Select Age Group
//             </option>
//             <option>Child</option>
//             <option>Adult</option>
//             <option>Elderly</option>
//           </select>

//                     {/* Pregnancy */}
//           {patient.gender ===
//             "Female" &&
//             (patient.ageGroup ===
//               "Adult" ||
//               Number(
//                 patient.ageInput
//               ) >= 18) && (
//               <select
//                 defaultValue=""
//                 className="w-full border rounded p-3 mb-4"
//                 onChange={(e) =>
//                   setPatient({
//                     ...patient,
//                     pregnant:
//                       e.target
//                         .value,
//                   })
//                 }
//               >
//                 <option
//                   value=""
//                   disabled
//                 >
//                   Pregnant?
//                 </option>
//                 <option>
//                   Yes
//                 </option>
//                 <option>
//                   No
//                 </option>
//               </select>
//             )}


//           {/* Camera */}
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
//                   e.target
//                     .files?.[0]
//                     ?.name ||
//                   "",
//               })
//             }
//           />

//           {/* Upload */}
//           <input
//             ref={uploadRef}
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={(e) =>
//               setPatient({
//                 ...patient,
//                 image:
//                   e.target
//                     .files?.[0]
//                     ?.name ||
//                   "",
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
  const cameraRef =
    useRef<HTMLInputElement>(null);

  const uploadRef =
    useRef<HTMLInputElement>(null);

  const [patient, setPatient] = useState({
    name: "",
    gender: "",
    ageInput: "",
    ageGroup: "",
    pregnant: "",
    image: "",
  });

  function submit() {
    const hasDetails =
      patient.name ||
      patient.gender ||
      patient.ageInput ||
      patient.ageGroup;

    const hasImage = patient.image;

    if (!hasDetails && !hasImage) {
      alert(
        "Enter patient details OR upload image"
      );
      return;
    }

    if (
      patient.ageInput &&
      Number(patient.ageInput) <= 0
    ) {
      alert("Age must be greater than 0");
      return;
    }

    onCreate(patient);
  }

  const showPregnancy =
    patient.gender === "Female" &&
    (
      Number(patient.ageInput) >= 18 ||
      patient.ageGroup === "Adult" ||
      patient.ageGroup === "Elderly"
    );

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
            value={patient.name}
            onChange={(e) =>
              setPatient({
                ...patient,
                name: e.target.value,
              })
            }
          />

          {/* Gender */}
          <select
            value={patient.gender}
            className="w-full border rounded p-3 mb-4"
            onChange={(e) =>
              setPatient({
                ...patient,
                gender: e.target.value,
              })
            }
          >
            <option value="">
              Select Gender
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>

          {/* Age Input */}
          <input
            type="number"
            min="1"
            placeholder="Enter Exact Age"
            disabled={patient.ageGroup !== ""}
            value={patient.ageInput}
            className={`w-full border rounded p-3 mb-4 ${
              patient.ageGroup
                ? "bg-gray-100 cursor-not-allowed"
                : ""
            }`}
            onChange={(e) => {
              const value = e.target.value;

              if (
                value === "" ||
                Number(value) > 0
              ) {
                setPatient({
                  ...patient,
                  ageInput: value,
                });
              }
            }}
          />

          {/* Pregnancy */}
          {showPregnancy && (
            <select
              value={patient.pregnant}
              className="w-full border rounded p-3 mb-4"
              onChange={(e) =>
                setPatient({
                  ...patient,
                  pregnant:
                    e.target.value,
                })
              }
            >
              <option value="">
                Pregnant?
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          )}

          {/* ONLY ONE OR */}
          <div className="text-center text-sm text-gray-500 mb-3">
            OR
          </div>



          {/* Capture / Upload */}
          <div className="text-center text-sm text-gray-500 mb-3">
            Capture / Upload Patient Image
          </div>

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

          <div className="grid grid-cols-2 gap-3 mb-4">

            <button
              type="button"
              onClick={() =>
                cameraRef.current?.click()
              }
              className="border rounded-xl py-3 hover:bg-slate-50"
            >
              📷 Open Camera
            </button>

            <button
              type="button"
              onClick={() =>
                uploadRef.current?.click()
              }
              className="border rounded-xl py-3 hover:bg-slate-50"
            >
              ⬆ Upload Image
            </button>

          </div>

          {patient.image && (
            <p className="text-sm text-green-600 mb-4">
              Saved: {patient.image}
            </p>
          )}

                    {/* Age Group */}
          <select
            value={patient.ageGroup}
            disabled={patient.ageInput !== ""}
            className={`w-full border rounded p-3 mb-4 ${
              patient.ageInput
                ? "bg-gray-100 cursor-not-allowed"
                : ""
            }`}
            onChange={(e) =>
              setPatient({
                ...patient,
                ageGroup:
                  e.target.value,
              })
            }
          >
            <option value="">
              Select Age Group
            </option>
            <option>Child</option>
            <option>Adult</option>
            <option>Elderly</option>
          </select>

          <button
            onClick={submit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
          >
            Continue to Triage →
          </button>

        </div>
      </div>
    </section>
  );
}