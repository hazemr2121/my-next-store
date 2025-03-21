// // src/contexts/AuthContext.jsx
// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check active session
//     const getSession = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();
//       setUser(session?.user || null);
//       setLoading(false);

//       // Listen for auth changes
//       const {
//         data: { subscription },
//       } = supabase.auth.onAuthStateChange((_event, session) => {
//         setUser(session?.user || null);
//       });

//       return () => subscription.unsubscribe();
//     };

//     getSession();
//   }, []);

//   const signUp = (email, password) => supabase.auth.signUp({ email, password });

//   const signIn = (email, password) =>
//     supabase.auth.signInWithPassword({ email, password });

//   const signInWithGoogle = () =>
//     supabase.auth.signInWithOAuth({ provider: "google" });

//   const signInWithFacebook = () =>
//     supabase.auth.signInWithOAuth({ provider: "facebook" });

//   const signOut = () => supabase.auth.signOut();

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         signUp,
//         signIn,
//         signInWithGoogle,
//         signInWithFacebook,
//         signOut,
//         loading,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);
