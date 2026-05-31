import React from "react";
import { LoginForm } from "./LoginForm";
import { Header } from "../ApplyLoan/Header"; // Adjust relative file pathing blocks if needed
import { Footer } from "../ApplyLoan/Footer"; // Adjust relative file pathing blocks if needed

export default function LoginPage() {
  return (
    /* Unified Interface Frame:
      - Flex container spreads header and footer to absolute viewport constraints.
      - Restores design engine theme typography.
    */
    <div className="min-h-screen bg-[#E5E9EC] flex flex-col font-sans">
      {/* Global Navigation Layout Frame Header */}
      <Header />

      {/* Perfectly Centered Interactive Login Node Workspace */}
      <div className="flex-1 flex items-center justify-center p-6">
        <LoginForm />
      </div>

      {/* Corporate System Footer Block Element */}
      <Footer />
    </div>
  );
}
