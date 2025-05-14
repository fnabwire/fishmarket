import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState("");
  const [error, setError] = useState(null);

  // signUp function
  const signUpNewUser = async (name, email, password, role) => {
    // Create user
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (signUpError) {
      console.error("Error signing up:", signUpError.message);
      setError(signUpError.message);
      return;
    }

    //   Insert additional data into profiles table
    const { user } = data;
    await supabase.from("profiles").insert([{ id: user.id, name, role }]);
    if (error) {
      alert(error.message);
      return;
    } else {
      alert("Signup successful! Please verify your email.");
    }
    return { sucess: true };
  };

  useEffect(() => {
    supabase.auth.setSession().then(({ data, error }) => {
      if (error) {
        console.error("Error setting session:", error.message);
      } else {
        setSession(data.session);
      }
    });
  }, []);

  // signIn function
  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword(
      {
        email: email,
        password: password,
      }
    );
    if (error) {
      alert(error.message);
      return;
    }

    return { data, error };
  };

  // signOut function
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      setSession(null);
    }
  };

  return (
    <AuthContext.Provider value={{ session, signUpNewUser, signOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(AuthContext);
};
