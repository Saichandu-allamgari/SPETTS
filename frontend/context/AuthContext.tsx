"use client";

import {
 createContext,
 useContext,
 useEffect,
 useState
} from "react";

const AuthContext = createContext<any>(null);

export function AuthProvider({
 children,
}: any) {
 const [user, setUser] =
   useState(null);

 const [token, setToken] =
   useState("");

 const [loading, setLoading] =
   useState(true);

 useEffect(() => {
   const storedUser =
     localStorage.getItem("user");

   const storedToken =
     localStorage.getItem("token");

   if (storedUser && storedToken) {
     setUser(
       JSON.parse(storedUser)
     );
     setToken(storedToken);
   }

   setLoading(false);
 }, []);

 const login = (
   userData: any,
   jwt: string
 ) => {
   localStorage.setItem(
     "user",
     JSON.stringify(userData)
   );

   localStorage.setItem(
     "token",
     jwt
   );

   setUser(userData);
   setToken(jwt);
 };

 const logout = () => {
   localStorage.removeItem("user");
   localStorage.removeItem("token");

   setUser(null);
   setToken("");
 };

 return (
   <AuthContext.Provider
     value={{
       user,
       token,
       login,
       logout,
       loading,
     }}
   >
     {children}
   </AuthContext.Provider>
 );
}

export const useAuth = () =>
 useContext(AuthContext);