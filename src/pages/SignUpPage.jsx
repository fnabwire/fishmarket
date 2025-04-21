import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserShield,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validatePasswordStrength = (value) => {
    let strength = "";
    if (value.length < 6) {
      strength = "Weak";
    } else if (
      /[A-Z]/.test(value) &&
      /\d/.test(value) &&
      /[!@#$%^&*]/.test(value)
    ) {
      strength = "Strong";
    } else {
      strength = "Medium";
    }
    setPasswordStrength(strength);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (passwordStrength === "Weak") {
      toast.warning("Password is too weak.");
      return;
    }

    toast.success("Signup successful!");
    console.log("Signup submitted:", { name, email, password, role });
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-[#0077BE] mb-6">
            Create Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#29ABE2] focus:outline-none"
                />
              </div>
            </div>

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
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePasswordStrength(e.target.value);
                  }}
                  className="pl-10 pr-10 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#29ABE2] focus:outline-none"
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {password && (
                <p
                  className={`text-sm mt-1 ml-1 font-medium ${
                    passwordStrength === "Weak"
                      ? "text-red-500"
                      : passwordStrength === "Medium"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  Password strength: {passwordStrength}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Select Role
              </label>
              <div className="relative">
                <FaUserShield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-[#29ABE2] focus:outline-none"
                >
                  <option value="admin">Admin</option>
                  <option value="fisherman">Fisherman</option>
                  <option value="buyer">Buyer</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-lg text-white font-semibold bg-gradient-to-r from-[#29ABE2] to-[#0077BE] hover:opacity-90 transition-all duration-200"
            >
              Sign Up
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

            {/* Login Link */}
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#29ABE2] hover:text-[#0077BE] font-medium"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
