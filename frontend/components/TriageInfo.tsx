"use client";

export default function TriageInfo() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-4 gap-8 items-center">

          {/* IMAGE SIDE - 1/3 */}
          <div className="md:col-span-2">
            <img
              src="/Triage-info2.png"
              alt="Triage Guide"
              className="w-full  rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* CONTENT SIDE - 2/3 */}
          <div className="md:col-span-2">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
             Understanding Triage
            </h2>

            {/* What is triage */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                ● What is Triage?
              </h3>

              <p className="text-slate-600 leading-7">
                Triage is a method used in emergencies
                to quickly decide who needs medical
                help first when many people are injured.
              </p>
            </div>

            {/* Why it matters */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                ● Why it Matters
              </h3>

              <ul className="space-y-2 text-slate-600">
                <li>✔ Helps save more lives</li>
                <li>
                  ✔ Ensures critical patients are
                  treated first
                </li>
                <li>
                  ✔ Keeps emergency care organized
                  and efficient
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                ● Triage Categories
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">

                <div className="border rounded-xl p-4 bg-slate-50">
                  <p className="font-bold text-lg">
                    ⚫ Black
                  </p>
                  <p className="text-sm text-slate-600">
                    No signs of life
                  </p>
                </div>

                <div className="border rounded-xl p-4 bg-red-50">
                  <p className="font-bold text-lg text-red-700">
                    🔴 Red
                  </p>
                  <p className="text-sm text-slate-600">
                    Needs immediate care
                  </p>
                </div>

                <div className="border rounded-xl p-4 bg-yellow-50">
                  <p className="font-bold text-lg text-yellow-700">
                    🟡 Yellow
                  </p>
                  <p className="text-sm text-slate-600">
                    Serious but can wait
                  </p>
                </div>

                <div className="border rounded-xl p-4 bg-green-50">
                  <p className="font-bold text-lg text-green-700">
                    🟢 Green
                  </p>
                  <p className="text-sm text-slate-600">
                    Minor injuries
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}