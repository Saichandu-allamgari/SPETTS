// src/components/PatientTable.tsx
"use client";

import { useEffect, useState } from "react";

export default function PatientTable() {
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("patients") || "[]"
    );
    setPatients(data);
  }, []);

  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-6">
          📋 Doctor Dashboard
        </h2>

        {patients.length === 0 ? (
          <p>No patients yet</p>
        ) : (
          <div className="overflow-auto border rounded-xl">

            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Gender</th>
                  <th className="p-3 text-left">Age</th>
                  <th className="p-3 text-left">Conscious</th>
                  <th className="p-3 text-left">Pulse</th>
                  <th className="p-3 text-left">Breathing</th>
                  <th className="p-3 text-left">Result</th>
                  <th className="p-3 text-left">Time</th>
                </tr>
              </thead>

              <tbody>
                {patients.map((p, i) => (
                  <tr
                    key={i}
                    className="border-t"
                  >
                    <td className="p-3">{p.name}</td>
                    <td className="p-3">{p.gender}</td>
                    <td className="p-3">{p.age}</td>
                    <td className="p-3">{p.conscious}</td>
                    <td className="p-3">{p.pulse}</td>
                    <td className="p-3">{p.breathing}</td>
                    <td className="p-3">{p.result}</td>
                    <td className="p-3">{p.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}
      </div>
    </section>
  );
}