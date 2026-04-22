
// "use client";

// import { useState } from "react";

// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Features from "@/components/Features";
// import About from "@/components/About";
// import Footer from "@/components/Footer";

// import PatientForm from "@/components/PatientList";
// import Triage from "@/components/Triage";
// import PatientList from "@/components/PatientList";

// export default function Home() {

//   // ✅ THIS WAS MISSING
//   const [patient, setPatient] = useState<any>(null);

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Features />
//       <About />

//       {/* STEP 1: CREATE PATIENT */}
//       {!patient && <PatientForm onCreate={setPatient} />}

//       {/* STEP 2: TRIAGE */}
//       {patient && <Triage patient={patient} />}

//       {/* DASHBOARD */}
//       {/* <PatientList /> */}

//       <Footer />
//     </>
//   );
// }


// src/app/page.tsx
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Footer from "@/components/Footer";

import PatientForm from "@/components/PatientList";
import Triage from "@/components/Triage";
import PatientTable from "@/components/PatientTable";

export default function Home() {
  const [patient, setPatient] = useState<any>(null);

  function nextPatient() {
    setPatient(null);
  }

  return (
    <>
      <Navbar />

      {!patient ? (
        <PatientForm onCreate={setPatient} />
      ) : (
        <Triage patient={patient} onNext={nextPatient} />
      )}

      <PatientTable />

      <Footer />
    </>
  );
}