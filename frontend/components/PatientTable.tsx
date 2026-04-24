// // src/components/PatientTable.tsx
// "use client";

// import { useEffect, useState } from "react";

// export default function PatientTable() {
//   const [patients, setPatients] = useState<any[]>([]);

//   useEffect(() => {
//     const data = JSON.parse(
//       localStorage.getItem("patients") || "[]"
//     );
//     setPatients(data);
//   }, []);

//   return (
//     <section className="bg-white py-14">
//       <div className="max-w-6xl mx-auto px-4">

//         <h2 className="text-3xl font-bold mb-6">
//           📋 Doctor Dashboard
//         </h2>

//         {patients.length === 0 ? (
//           <p>No patients yet</p>
//         ) : (
//           <div className="overflow-auto border rounded-xl">

//             <table className="w-full text-sm">
//               <thead className="bg-slate-100">
//                 <tr>
//                   <th className="p-3 text-left">Name</th>
//                   <th className="p-3 text-left">Gender</th>
//                   <th className="p-3 text-left">Age</th>
//                   <th className="p-3 text-left">Conscious</th>
//                   <th className="p-3 text-left">Pulse</th>
//                   <th className="p-3 text-left">Breathing</th>
//                   <th className="p-3 text-left">Result</th>
//                   <th className="p-3 text-left">Time</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {patients.map((p, i) => (
//                   <tr
//                     key={i}
//                     className="border-t"
//                   >
//                     <td className="p-3">{p.name}</td>
//                     <td className="p-3">{p.gender}</td>
//                     <td className="p-3">{p.age}</td>
//                     <td className="p-3">{p.conscious}</td>
//                     <td className="p-3">{p.pulse}</td>
//                     <td className="p-3">{p.breathing}</td>
//                     <td className="p-3">{p.result}</td>
//                     <td className="p-3">{p.time}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";

export default function PatientTable() {
  const [patients, setPatients] =
    useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem(
        "patients"
      ) || "[]"
    );

    setPatients(data);
  }, []);

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-6">
          📋 Doctor Dashboard
        </h2>

        {patients.length === 0 ? (
          <p>No patients yet</p>
        ) : (
          <div className="overflow-auto border rounded-xl">

            <table className="w-full text-sm whitespace-nowrap">
              <thead className="bg-slate-100">
                <tr>

                  {/* BASIC DETAILS */}
                  <th className="p-3 text-left">
                    Name
                  </th>
                  <th className="p-3 text-left">
                    Gender
                  </th>
                  <th className="p-3 text-left">
                    Age
                  </th>
                  <th className="p-3 text-left">
                    Blood
                  </th>
                  <th className="p-3 text-left">
                    Pregnant
                  </th>
                  <th className="p-3 text-left">
                    Image
                  </th>

                  {/* TRIAGE */}
                  <th className="p-3 text-left">
                    Conscious
                  </th>
                  <th className="p-3 text-left">
                    Orientation
                  </th>
                  <th className="p-3 text-left">
                    Mobility
                  </th>
                  <th className="p-3 text-left">
                    Injury
                  </th>
                  <th className="p-3 text-left">
                    Other Injury
                  </th>
                  <th className="p-3 text-left">
                    Burn %
                  </th>
                  <th className="p-3 text-left">
                    Bleeding
                  </th>
                  <th className="p-3 text-left">
                    Pulse
                  </th>

                  {/* VITALS */}
                  <th className="p-3 text-left">
                    BP
                  </th>
                  <th className="p-3 text-left">
                    SpO2
                  </th>
                  <th className="p-3 text-left">
                    RR
                  </th>
                  <th className="p-3 text-left">
                    Temp
                  </th>
                  <th className="p-3 text-left">
                    Sugar
                  </th>

                  {/* RESULT */}
                  <th className="p-3 text-left">
                    Result
                  </th>
                  {/* <th className="p-3 text-left">
                    Reason
                  </th> */}
                  <th className="p-3 text-left">
                    Date
                  </th>
                  <th className="p-3 text-left">
                    Time
                  </th>

                </tr>
              </thead>

              <tbody>
                {patients.map(
                  (p, i) => (
                    <tr
                      key={i}
                      className="border-t hover:bg-slate-50"
                    >

                      {/* BASIC */}
                      <td className="p-3">
                        {p.name ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.gender ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.age ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.blood ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.pregnant ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.image ||
                          "N/A"}
                      </td>

                      {/* TRIAGE */}
                      <td className="p-3">
                        {p.conscious ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.orientation ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.mobility ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.injury ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.otherInjury ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.burn ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.bleeding ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.pulse ||
                          "N/A"}
                      </td>

                      {/* VITALS */}
                      <td className="p-3">
                        {p.bp ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.spo2 ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.rr ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.temp ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.sugar ||
                          "N/A"}
                      </td>

                      {/* RESULT */}
                      <td className="p-3 font-semibold">
                        {p.result ||
                          "N/A"}
                      </td>

                      {/* <td className="p-3">
                        {p.reason ||
                          "N/A"}
                      </td> */}

                      <td className="p-3">
                        {p.date ||
                          "N/A"}
                      </td>

                      <td className="p-3">
                        {p.time ||
                          "N/A"}
                      </td>

                    </tr>
                  )
                )}
              </tbody>
            </table>

          </div>
        )}
      </div>
    </section>
  );
}