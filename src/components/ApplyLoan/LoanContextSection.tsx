"use client";
import React from "react";

interface LoanContextProps {
  isReviewMode: boolean;
  formData: any;
  handleInputChange: (key: string, value: string) => void;
}

export const LoanContextSection: React.FC<LoanContextProps> = ({
  isReviewMode,
  formData,
  handleInputChange,
}) => {
  return (
    <div className="border-t border-gray-100 pt-5 flex flex-col gap-4">
      <h3 className="text-xl font-extrabold text-[#112C44]">
        Loan Context and Setup
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1. PURPOSE OF LOAN DROPDOWN */}
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-bold text-[#112C44]">
            Purpose of Loan
          </label>
          <select
            value={formData.purpose || ""}
            onChange={(e) => handleInputChange("purpose", e.target.value)}
            disabled={isReviewMode}
            className="w-full h-10 px-3 bg-gray-50 disabled:bg-gray-100 disabled:opacity-80 text-gray-800 rounded-md border border-gray-200 outline-none focus:border-[#112C44] cursor-pointer"
          >
            <option value="">Select Purpose</option>
            <option value="Residential House and Lot Purchase">
              Residential House and Lot Purchase
            </option>
            <option value="Commercial Unit Renovation">
              Commercial Unit Renovation
            </option>
            <option value="Purchase of Car">Purchase of Car</option>
            <option value="Vacant Lot Acquisition">
              Vacant Lot Acquisition
            </option>
            <option value="Home Renovation">Home Renovation</option>
            <option value="Acquiring Land for Parking">
              Acquiring Land for Parking
            </option>
          </select>
        </div>

        {/* 2. MODE OF PAYMENT DROPDOWN */}
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-bold text-[#112C44]">
            Mode of Payment
          </label>
          <select
            value={formData.paymentMode || ""}
            onChange={(e) => handleInputChange("paymentMode", e.target.value)}
            disabled={isReviewMode}
            className="w-full h-10 px-3 bg-gray-50 disabled:bg-gray-100 disabled:opacity-80 text-gray-800 rounded-md border border-gray-200 outline-none focus:border-[#112C44] cursor-pointer"
          >
            <option value="">Select Mode</option>
            <option value="Salary Deduction">Salary Deduction</option>
            <option value="Over-the-Counter">Over-the-Counter</option>
            <option value="Post-Dated Checks">Post-Dated Checks</option>
            <option value="Auto-Debit Arrangement">
              Auto-Debit Arrangement
            </option>
            <option value="Cheques">Cheques</option>
          </select>
        </div>
      </div>
    </div>
  );
};
