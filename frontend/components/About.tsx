


// export default function About() {
//   return (
//     <section id="about" className="bg-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-4 text-center">

//         <h2 className="text-2xl font-bold mb-6">
//           About SPETTS
//         </h2>

//         <p className="text-gray-600 max-w-2xl mx-auto">
// SPETTS AI is a next-generation pre-hospital emergency triage system built to transform frontline medical response. Leveraging intelligent decision algorithms, it enables first responders to rapidly assess patient severity, detect critical risks, and initiate timely, protocol-driven interventions.
//         </p>

//         <p>
// Designed with scalability and real-world deployment in mind, SPETTS AI seeks to redefine emergency care delivery by combining clinical precision with accessible technology.
// </p>

// <p>
// <em>Innovator & Founder: Priyanka Shaw</em>
// </p>

// <p>
// <em>Developer: Sai Chand</em>
// </p>

//       </div>
//     </section>
//   );
// }


export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-50 to-white py-20"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-sm mb-2">
            About Us
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transforming Emergency Care Before Hospital Arrival
          </h2>

          <p className="text-gray-600 leading-8 text-lg">
            SPETTS AI is a next-generation
            <span className="font-semibold text-gray-900">
              {" "}Pre-hospital Emergency Triage & Transport System
            </span>
            {" "}designed to revolutionize frontline medical response.
            By combining intelligent triage logic with rapid patient assessment,
            the platform empowers responders to make faster, safer,
            and life-saving decisions during critical moments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">

          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <div className="text-3xl mb-4">🚑</div>

            <h3 className="font-bold text-lg mb-3">
              Smart Triage
            </h3>

            <p className="text-gray-600 text-sm leading-7">
              Instantly prioritizes patients based on severity,
              symptoms, vitals, and injury patterns for
              immediate response planning.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <div className="text-3xl mb-4">⚕️</div>

            <h3 className="font-bold text-lg mb-3">
              Clinical Precision
            </h3>

            <p className="text-gray-600 text-sm leading-7">
              Built using real emergency care workflows to support
              evidence-based decisions and improve treatment timelines.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <div className="text-3xl mb-4">🌍</div>

            <h3 className="font-bold text-lg mb-3">
              Scalable Impact
            </h3>

            <p className="text-gray-600 text-sm leading-7">
              Designed for ambulances, disaster zones,
              remote healthcare, and smart city emergency systems.
            </p>
          </div>

        </div>

        {/* Vision */}
        <div className="mt-14 bg-red-50 border border-red-100 rounded-2xl p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Our Vision
          </h3>

          <p className="text-gray-700 leading-8">
            To redefine emergency healthcare delivery by ensuring
            that care begins before arrival — through intelligent,
            accessible, and life-saving technology.
          </p>
        </div>

        {/* Founders */}
        <div className="mt-14 text-center space-y-3">
          <p className="text-lg font-semibold text-gray-900">
            Innovator & Founder:
            <span className="text-red-500"> Priyanka Shaw</span>
          </p>

          <p className="text-lg font-semibold text-gray-900">
            Developer:
            <span className="text-blue-600"> Sai Chandu</span>
          </p>
        </div>

      </div>
    </section>
  );
}