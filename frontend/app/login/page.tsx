// // src/app/login/page.tsx

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] =
//     useState(false);

//   async function login() {
//     try {
//       setLoading(true);

//       const res = await fetch(
//         "http://localhost:5000/api/auth/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type":
//               "application/json",
//           },
//           body: JSON.stringify(form),
//         }
//       );

//       const data = await res.json();

//       if (!data.success) {
//         alert(data.message);
//         return;
//       }

//       // Save Token
//       localStorage.setItem(
//         "token",
//         data.token
//       );

//       localStorage.setItem(
//         "user",
//         JSON.stringify(data.user)
//       );

//       alert("Login Successful");

//       router.push("/triage");

//     } catch (error) {
//       alert("Server Error");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <section className="min-h-screen bg-slate-100 flex items-center justify-center">

//       <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow">

//         <h1 className="text-3xl font-bold text-center mb-8">
//           🔐 Login Portal
//         </h1>

//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border p-3 rounded mb-4"
//           onChange={(e) =>
//             setForm({
//               ...form,
//               email:
//                 e.target.value,
//             })
//           }
//         />

//         {/* Password */}
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border p-3 rounded mb-6"
//           onChange={(e) =>
//             setForm({
//               ...form,
//               password:
//                 e.target.value,
//             })
//           }
//         />

//         {/* Button */}
//         <button
//           onClick={login}
//           disabled={loading}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
//         >
//           {loading
//             ? "Logging in..."
//             : "Login"}
//         </button>

//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  async function login() {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!data.success) {
        alert(data.message);
        return;
      }

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Login Successful");

      router.push("/triage");

    } catch (error) {
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow">

        <h1 className="text-3xl font-bold text-center mb-8">
          🔐 Login Portal
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-6"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>

      </div>
    </section>
  );
}