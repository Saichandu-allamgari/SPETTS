// import Guide from "@/components/Guide";

// export default function Page() {
//   return (
//     <main>
//       <Guide />
//     </main>
//   );
// }

import { Suspense } from "react";
import Guide from "@/components/Guide";

export default function Page() {
  return (
    <main>
      <Suspense fallback={<div className="p-10">Loading Guide...</div>}>
        <Guide />
      </Suspense>
    </main>
  );
}