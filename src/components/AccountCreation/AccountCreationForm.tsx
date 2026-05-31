"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Integrated Router for real navigation
import { Header } from "./Header";
import { BackNavigation } from "./BackNavigation";
import { FormSection } from "./FormSection";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { Footer } from "./Footer";

interface FormData {
  registrationNumber: string;
  fullName: string;
  dateOfBirth: string;
  sex: string;
  emailAddress: string;
  cellphoneNumber: string;
  homeAddress: string;
  occupation: string;
  employerAddress: string;
  citizenship: string;
}

export const AccountCreationForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    registrationNumber: "",
    fullName: "",
    dateOfBirth: "",
    sex: "",
    emailAddress: "",
    cellphoneNumber: "",
    homeAddress: "",
    occupation: "",
    employerAddress: "",
    citizenship: "",
  });

  const handleInputChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating account with data:", formData);
  };

  // Convert raw select array sets to simplified option string matrices for our SelectField
  const sexOptions = ["Male", "Female"];
  const citizenshipOptions = ["Filipino", "Other"];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      {/* Workspace canvas synced with your matte light-gray background token */}
      <div className="flex flex-col bg-[#E5E9EC] min-h-screen font-sans antialiased">
        <Header />

        {/* 
          Main Container: Trimmed down tracking size from px-20 to max-w-[1020px] 
          and vertical padding elements down to pt-6 pb-2 to match your compact design flow.
        */}
        <main className="flex-1 max-w-[1020px] mx-auto w-full px-8 pt-6 pb-2">
          <BackNavigation />

          <form onSubmit={handleCreateAccount} className="w-full">
            {/* 
              Account Information Section:
              Leverages the internal grid styles from FormSection instead of complex inner flex rows.
            */}
            <FormSection title="Account Information">
              <InputField
                label="PAG-IBIG Registration Tracking Number"
                name="registrationNumber"
                placeholder="Enter tracking number"
                value={formData.registrationNumber}
                onChange={handleInputChange("registrationNumber")}
                required
              />
              <InputField
                label="Full Name"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleInputChange("fullName")}
                required
              />
              <InputField
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleInputChange("dateOfBirth")}
                required
              />
              <SelectField
                label="Sex"
                name="sex"
                options={sexOptions}
                placeholder="Select sex"
                value={formData.sex}
                onChange={handleInputChange("sex")}
                required
              />
            </FormSection>

            {/* Contact and Address Details Section */}
            <FormSection title="Contact and Address Details">
              <InputField
                label="Email Address"
                name="emailAddress"
                type="email"
                placeholder="username@domain.com"
                value={formData.emailAddress}
                onChange={handleInputChange("emailAddress")}
                required
              />
              <InputField
                label="Cellphone Number"
                name="cellphoneNumber"
                type="tel"
                placeholder="e.g., 09123456789"
                value={formData.cellphoneNumber}
                onChange={handleInputChange("cellphoneNumber")}
                required
              />
              {/* Span utility forces individual element full width over standard 2-column configurations */}
              <div className="md:col-span-2">
                <InputField
                  label="Home Address"
                  name="homeAddress"
                  placeholder="Enter complete home address"
                  value={formData.homeAddress}
                  onChange={handleInputChange("homeAddress")}
                  required
                />
              </div>
            </FormSection>

            {/* Employment Details Section */}
            <FormSection title="Employment Details">
              <InputField
                label="Occupation"
                name="occupation"
                placeholder="Enter occupation"
                value={formData.occupation}
                onChange={handleInputChange("occupation")}
                required
              />
              <InputField
                label="Employer Address"
                name="employerAddress"
                placeholder="Enter complete employer address"
                value={formData.employerAddress}
                onChange={handleInputChange("employerAddress")}
                required
              />
              <SelectField
                label="Citizenship"
                name="citizenship"
                options={citizenshipOptions}
                placeholder="Select citizenship"
                value={formData.citizenship}
                onChange={handleInputChange("citizenship")}
                required
              />
            </FormSection>

            {/* 
              🛠️ Form Control Interactivity Stack:
              - Reduced paddings, margins, and component button sizes down to compact baselines.
              - Injected hover lifts and translation active compressions on buttons.
            */}
            <div className="flex flex-col gap-2.5 items-center mt-6 pb-6">
              <button
                type="submit"
                className="py-2.5 text-xs font-bold tracking-wide text-white rounded-md cursor-pointer bg-[#112C44] w-[180px] transform hover:bg-opacity-95 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 active:scale-[0.98] transition-all duration-150 shadow-md"
              >
                CREATE ACCOUNT
              </button>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-xs font-semibold tracking-normal text-gray-500 underline cursor-pointer hover:text-[#112C44] transition-colors py-1"
              >
                BACK TO LOG IN
              </button>
            </div>
          </form>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AccountCreationForm;
