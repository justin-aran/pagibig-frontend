"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { FormSection } from "./FormSection";
import { LoanContextSection } from "./LoanContextSection";
import { CollateralSection } from "./CollateralSection";
import { Navbar } from "../Navbar"; // 🛠️ Integrated path to import your global frozen Navbar

export default function LoanApplicationForm() {
  const navigate = useNavigate();

  // Controls state timeline: 'edit' or 'review'
  const [step, setStep] = useState<"edit" | "review">("edit");

  // Master tracking payload object
  const [formData, setFormData] = useState({
    loanAmount: "",
    loanTerm: "",
    downpayment: "",
    installment: "",
    purpose: "",
    paymentMode: "",
    location: "",
    titleHolder: "",
    collateralValue: "",
  });

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const isReviewMode = step === "review";

  const handleSaveDraft = () => {
    console.log("Saving draft context...", formData);
    alert("Draft successfully backed up to application cache!");
  };

  const handleConfirmSubmission = async () => {
    try {
      // This command opens a network tunnel straight to your classmate's running Java server
      const response = await fetch("http://localhost:8080/api/loans/submit", {
        method: "POST", // Tells the server we are SENDING new data
        headers: {
          "Content-Type": "application/json", // Tells the server the data is in JSON format
        },
        body: JSON.stringify(formData), // Takes your form data and packs it up for the trip
      });

      if (response.ok) {
        alert(
          "Success! Your application traveled to the Java backend and saved to MySQL!",
        );
        navigate("/dashboard");
      } else {
        alert(
          "Connected to Java, but the backend encountered an error processing the data.",
        );
      }
    } catch (error) {
      console.error("Connection failed:", error);
      alert(
        "Could not reach the backend. Is your classmate's Spring Boot application running in IntelliJ right now?",
      );
    }
  };

  return (
    /* 🛠️ MASTER FLEX LAYOUT FRAME: 
        Spans full height and forces footer to the bottom of the monitor window 
    */
    <div className="min-h-screen bg-[#E5E9EC] flex flex-col font-sans antialiased">
      {/* 🛠️ FIXED: Replaced old placeholder <Header /> with your shared frozen navbar layout */}
      <Navbar />

      {/* 🛠️ Layout Clearance Container:
          - Added `mt-[90px]` to shift the body cleanly down past the fixed navigation bar coordinates.
          - Kept `pt-6` so the "Go back to home" back navigation stays visually balanced.
      */}
      <div className="w-full max-w-[960px] mx-auto px-6 pt-6 mt-[90px] flex items-center justify-start">
        <button
          onClick={() => navigate("/dashboard")}
          type="button"
          className="flex items-center gap-2 text-[15px] font-bold text-[#112C44] hover:underline cursor-pointer tracking-wide"
        >
          <span>❮</span> Go back to home
        </button>
      </div>

      {/* Main Container Workspace Canvas Area Wrapper */}
      <main className="flex-1 w-full max-w-[960px] mx-auto px-6 pb-16 mt-4 flex flex-col gap-6">
        {/* Core Layout Content Card Box Frame */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 flex flex-col gap-8">
          <FormSection
            isReviewMode={isReviewMode}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <LoanContextSection
            isReviewMode={isReviewMode}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <CollateralSection
            isReviewMode={isReviewMode}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </div>

        {/* Dynamic Multi-Step Context Button Controller Block */}
        <div className="w-full flex justify-center items-center mt-4">
          {step === "edit" ? (
            /* PHASE A: FILLING/EDITING FORM STEP ACTIVE */
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handleSaveDraft}
                className="px-6 h-10 border-2 border-[#112C44] text-[#112C44] text-xs font-bold uppercase tracking-wider rounded-md bg-white hover:bg-gray-50 transition-all cursor-pointer"
              >
                Save as Draft
              </button>
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setStep("review"); // Moves forward to review state
                }}
                className="px-8 h-10 bg-[#112C44] text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-opacity-90 transition-all cursor-pointer shadow-sm"
              >
                Next Step
              </button>
            </div>
          ) : (
            /* PHASE B: CONFIRMATION REVIEW STEP ACTIVE */
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setStep("edit"); // Moves back to layout text field open state
                }}
                className="px-6 h-11 border-2 border-[#112C44] text-[#112C44] text-[13px] font-bold uppercase tracking-wider rounded-md bg-white hover:bg-gray-50 transition-all cursor-pointer shadow-sm"
              >
                Edit Information
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmission}
                className="px-8 h-11 bg-[#112C44] text-white text-[13px] font-bold uppercase tracking-wider rounded-md hover:bg-opacity-95 transition-all cursor-pointer shadow-md transform active:scale-[0.99]"
              >
                Confirm Submission
              </button>
            </div>
          )}
        </div>
      </main>

      {/* 2. Corporate System Footer Block Component */}
      <Footer />
    </div>
  );
}
