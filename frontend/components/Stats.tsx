export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">

        <div className="border rounded-2xl p-8 shadow-sm">
          <h3 className="text-5xl font-bold text-red-600 mb-2">
            60%
          </h3>
          <p>Faster Triage</p>
        </div>

        <div className="border rounded-2xl p-8 shadow-sm">
          <h3 className="text-5xl font-bold text-blue-600 mb-2">
            24/7
          </h3>
          <p>Emergency Support</p>
        </div>

        <div className="border rounded-2xl p-8 shadow-sm">
          <h3 className="text-3xl font-bold text-green-600 mb-2">
           System
          </h3>
          <p>Decision Powered</p>
        </div>

      </div>
    </section>
  );
}