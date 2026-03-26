// // export default function Features() {
// //   return (
// //     <section id="features" className="py-16 px-6 bg-gray-900">
// //       <h2 className="text-2xl font-bold text-center mb-10">Features</h2>

// //       <div className="grid md:grid-cols-3 gap-6">
// //         <div className="p-4 bg-black rounded-lg border border-gray-800">
// //           ⚡ Instant Decision Making
// //           <p className="text-gray-400 text-sm mt-2">
// //             Real-time triage classification
// //           </p>
// //         </div>

// //         <div className="p-4 bg-black rounded-lg border border-gray-800">
// //           🔥 Fire-Based Severity System
// //           <p className="text-gray-400 text-sm mt-2">
// //             Visual urgency mapping
// //           </p>
// //         </div>

// //         <div className="p-4 bg-black rounded-lg border border-gray-800">
// //           📱 Lightweight & Fast
// //           <p className="text-gray-400 text-sm mt-2">
// //             Runs without backend
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// export default function Features() {
//   return (
//     <section id="features" className="py-16 bg-gray-50">
//       <h2 className="text-2xl font-bold text-center mb-10">Features</h2>

//       <div className="grid md:grid-cols-3 gap-6">
//         <div className="p-5 bg-white rounded-lg border border-gray-200">
//           ⚡ Instant Decision
//           <p className="text-gray-500 text-sm mt-2">
//             Real-time triage results
//           </p>
//         </div>

//         <div className="p-5 bg-white rounded-lg border border-gray-200">
//           🔥 Severity Mapping
//           <p className="text-gray-500 text-sm mt-2">
//             Fire-based urgency levels
//           </p>
//         </div>

//         <div className="p-5 bg-white rounded-lg border border-gray-200">
//           📱 Lightweight
//           <p className="text-gray-500 text-sm mt-2">
//             Works without backend
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function Features() {
  return (
    <section id="features" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-2xl font-bold text-center mb-10">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-lg p-5 bg-white">
            ⚡ Instant Decision
            <p className="text-gray-600 text-sm mt-2">
              Real-time triage classification
            </p>
          </div>

          <div className="border rounded-lg p-5 bg-white">
            🔥 Severity Mapping
            <p className="text-gray-600 text-sm mt-2">
              Fire-based urgency levels
            </p>
          </div>

          <div className="border rounded-lg p-5 bg-white">
            🧠 Smart Alerts
            <p className="text-gray-600 text-sm mt-2">
              Spinal, airway & shock detection
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}