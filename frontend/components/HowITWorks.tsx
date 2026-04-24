export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-4xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            🧾
            <h3 className="font-bold mt-3">
              Register Patient
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            🧠
            <h3 className="font-bold mt-3">
              System generated Triage
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            📡
            <h3 className="font-bold mt-3">
              Send Data
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            🏥
            <h3 className="font-bold mt-3">
              Hospital Ready
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}