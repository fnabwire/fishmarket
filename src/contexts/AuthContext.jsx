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
        options: {
          data: {
            name: name,
            role: role,
          },
        },
      })

      if (signUpError) {
        console.error("Error signing up:", signUpError.message)
        setError(signUpError.message)
        return
      }
  
    //   Insert additional data into users table
    const user = data.user
    const { error: insertError } = await supabase.from('users').insert([
      {
        id: user.id,
        name: name,
        email: email,
        role: role,
        // location: location,
      }
    ])

    if (insertError) {
      setError(insertError.message)
    } else {
      alert("Signup successful! Please verify your email.")
    }
    return { sucess: true, data };
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
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.error("Error signing in:", error.message);
      setError(error.message);
    } else {
      setSession(data.session);
      alert("Sign in successful!");
    }
    console.log("Sign in data:", data.session);
    
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
  }

  return (
    <AuthContext.Provider value={{ session, signUpNewUser, signOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(AuthContext);
};
