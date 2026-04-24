
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

import PatientTable from "@/components/PatientTable";

export default function Home() {

  return (
    <>
      <Navbar />

      <PatientTable />

      <Footer />
    </>
  );
}