// export default function LiveBanner() {
//   return (
//     <section className="bg-red-600 text-white py-3 text-center animate-pulse font-semibold">
//       🚨 Emergency Response Network Active 24/7
//     </section>
//   );
// }


"use client";

export default function LiveBanner() {
  return (
    <section className="bg-white border-y border-red-100 overflow-hidden">
      <div className="relative whitespace-nowrap py-3">

        <div className="inline-block animate-marquee text-red-600 font-semibold text-sm md:text-base">
          
          🚑 Emergency Response Network Active 24/7 &nbsp;&nbsp;&nbsp;&nbsp;
          • Fast Patient Triage Support &nbsp;&nbsp;&nbsp;&nbsp;
          • Ambulance Coordination Enabled &nbsp;&nbsp;&nbsp;&nbsp;
          • Smart Emergency Alerts Live &nbsp;&nbsp;&nbsp;&nbsp;
          • Critical Care Response Ready &nbsp;&nbsp;&nbsp;&nbsp;
          • Emergency Assistance Available &nbsp;&nbsp;&nbsp;&nbsp;
          • SPETTS AI Monitoring System Online &nbsp;&nbsp;&nbsp;&nbsp;

        </div>

      </div>

      <style jsx>{`
        .animate-marquee {
          padding-left: 100%;
          animation: marquee 22s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}