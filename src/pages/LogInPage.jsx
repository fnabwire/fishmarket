import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userAuth } from "../contexts/AuthContext";
import { supabase } from "../supabaseClient";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { signIn, session, setLoggedInUser } = userAuth(); // Assuming you have a signIn function in your AuthContext
  const navigate = useNavigate(); // Assuming you have a useNavigate hook from react-router-dom

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    // const signInResult = await signIn(email, password); // Log the result here
    // console.log("Sign In Result:", signInResult); // Add this line
    // const { data, error } = signInResult; // Destructure after logging
    const { data: Logindata, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    console.log("Login data:", Logindata);
    if (error) {
      alert(error.message);
      return;
    }
    const { user } = Logindata;
    console.log("User data:", user);
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();
    setLoading(false);
    setLoggedInUser(profile);
    const role = profile.role;
    console.log("Profile data:", role);
    console.log("Profile data:", profile);

    //redirect to the appropriate dashboard based on role
    navigate(`/${role}-dashboard`);
    
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-[#0077BE] mb-6">
            Login to Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#29ABE2] focus:outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#29ABE2] focus:outline-none"
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="accent-[#29ABE2]"
                />
                Remember Me
              </label>
              <Link
                to="/forgot-password"
                className="text-[#29ABE2] hover:text-[#0077BE] font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 cursor-pointer rounded-lg text-white font-semibold bg-gradient-to-r from-[#29ABE2] to-[#0077BE] hover:opacity-90 transition-all duration-200"
            >
              {loading ? "Loading..." : "Login"}
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span className="border-t w-1/3"></span>
              <span className="text-sm">OR</span>
              <span className="border-t w-1/3"></span>
            </div>

            {/* Google Button */}
            <button
              type="button"
              onClick={() => toast.info("Google login coming soon...")}
              className="w-full py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all"
            >
              <FaGoogle className="text-red-500" />
              <span>Continue with Google</span>
            </button>

            {/* Signup Redirect */}
            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-[#29ABE2] hover:text-[#0077BE] font-medium"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

// password, u4GjPQQ0qA0LOhT4
