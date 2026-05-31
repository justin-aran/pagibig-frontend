"use client";
import * as React from "react";
import { useState } from "react"; // 🛠️ Added state to track what the user types
import { Link } from "react-router-dom";

export function LoginForm() {
  // Local state to capture the user's name input string
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🛠️ THE CORE CHANGE: If they typed a name, save it to the browser storage.
    // If they left it blank, default to "User".
    const greetingName = name.trim() ? name.trim() : "User";
    localStorage.setItem("display_name", greetingName);

    console.log(`Saving user name: ${greetingName}. Moving to dashboard...`);
    window.location.href = "/dashboard";
  };

  return (
    <main className="w-full max-w-[420px] bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col">
      <div className="mb-5">
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-[#112C44]">
          Welcome back! 👋
        </h1>
        <p className="text-gray-500 font-medium mt-1 text-xs lg:text-sm">
          It's nice to have you back.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        {/* 🛠️ NEW: Dynamic Name Capture Field */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-bold text-[#112C44] tracking-wide">
            Your Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Binds input typing directly to state
            placeholder="Enter your full name"
            className="w-full h-9 px-3 text-sm bg-gray-50 text-gray-800 rounded-md border border-gray-200 focus:outline-none focus:border-[#112C44] focus:bg-white transition-all"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-bold text-[#112C44] tracking-wide">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full h-9 px-3 text-sm bg-gray-50 text-gray-800 rounded-md border border-gray-200 focus:outline-none focus:border-[#112C44] focus:bg-white transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-bold text-[#112C44] tracking-wide">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-9 px-3 text-sm bg-gray-50 text-gray-800 rounded-md border border-gray-200 focus:outline-none focus:border-[#112C44] focus:bg-white transition-all"
          />
          <button
            type="button"
            className="text-left text-xs font-bold text-[#112C44]/80 hover:text-[#112C44] hover:underline w-fit mt-1 transition-all"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#112C44] text-white h-10 rounded-md font-bold text-sm tracking-wide hover:bg-opacity-95 active:scale-[0.99] transition-all shadow-sm mt-2 cursor-pointer"
        >
          LOG IN
        </button>
      </form>

      <p className="mt-5 text-center text-xs lg:text-sm text-gray-500 font-medium">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-[#112C44] font-bold underline hover:text-opacity-80 transition-colors ml-0.5"
        >
          Register here
        </Link>
      </p>
    </main>
  );
}
