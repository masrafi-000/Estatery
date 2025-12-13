"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ZAgentRegistration, ZAgentRegistrationPayload } from "@/schemas/agent";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Briefcase,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  FileText,
  Loader2,
  Upload,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const steps = [
  { id: 1, name: "Personal Info", icon: User },
  { id: 2, name: "Professional", icon: Briefcase },
  { id: 3, name: "Documents", icon: FileText },
  { id: 4, name: "Agreement", icon: CheckCircle },
];

const experienceOptions = [
  { value: "1-2", label: "1-2 years" },
  { value: "3-5", label: "3-5 years" },
  { value: "5-10", label: "5-10 years" },
  { value: "10+", label: "10+ years" },
];

const specializationOptions = [
  "Residential Sales",
  "Commercial Properties",
  "Luxury Homes",
  "Rentals",
  "Property Management",
  "Investment Properties",
];

const stateOptions = [
  "California",
  "New York",
  "Texas",
  "Florida",
  "Illinois",
  "Pennsylvania",
  "Ohio",
  "Georgia",
  "North Carolina",
  "Michigan",
];

export default function BecomeAgentForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{
    profilePhoto: string | null;
    licenseCopy: string | null;
    idProof: string | null;
  }>({
    profilePhoto: null,
    licenseCopy: null,
    idProof: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    setValue,
  } = useForm<ZAgentRegistrationPayload>({
    resolver: zodResolver(ZAgentRegistration),
    mode: "onChange",
    defaultValues: {
      termsAccepted: false,
      codeOfConductAccepted: false,
      backgroundCheckConsent: false,
    },
  });

  const bioValue = watch("bio") || "";

  const validateStep = async (step: number) => {
    let fields: (keyof ZAgentRegistrationPayload)[] = [];

    switch (step) {
      case 1:
        fields = [
          "firstName",
          "lastName",
          "email",
          "phone",
          "password",
          "confirmPassword",
        ];
        break;
      case 2:
        fields = [
          "licenseNumber",
          "licenseState",
          "yearsExperience",
          "specializations",
          "bio",
        ];
        break;
      case 3:
        // Documents are optional for demo
        return true;
      case 4:
        fields = [
          "termsAccepted",
          "codeOfConductAccepted",
          "backgroundCheckConsent",
        ];
        break;
    }

    return await trigger(fields);
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const simulateFileUpload = (
    fileType: "profilePhoto" | "licenseCopy" | "idProof",
    fileName: string
  ) => {
    setUploadedFiles((prev) => ({ ...prev, [fileType]: fileName }));
    setValue(`${fileType}Name` as keyof ZAgentRegistrationPayload, fileName);
  };

  const removeFile = (fileType: "profilePhoto" | "licenseCopy" | "idProof") => {
    setUploadedFiles((prev) => ({ ...prev, [fileType]: null }));
    setValue(`${fileType}Name` as keyof ZAgentRegistrationPayload, "");
  };

  const onSubmit = async (data: ZAgentRegistrationPayload) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2500));
    console.log("Agent registration:", data);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm text-center">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Application Submitted!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
          Thank you for applying to become an Estatery agent. Our team will
          review your application and get back to you within 3-5 business days.
        </p>
        <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4 mb-6">
          <p className="text-sm text-indigo-700 dark:text-indigo-300">
            Application Reference:{" "}
            <span className="font-mono font-semibold">
              AGT-{Date.now().toString().slice(-8)}
            </span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button variant="outline">Return Home</Button>
          </Link>
          <Link href="/auth/login">
            <Button>Go to Login</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
      {/* Progress Steps */}
      <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentStep > step.id
                      ? "bg-green-500 text-white"
                      : currentStep === step.id
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <span
                  className={`hidden sm:block text-sm font-medium ${
                    currentStep >= step.id
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`hidden sm:block w-12 lg:w-20 h-0.5 mx-2 ${
                    currentStep > step.id
                      ? "bg-green-500"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8">
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                Personal Information
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Let's start with your basic details
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  {...register("firstName")}
                  className="mt-1.5"
                />
                {errors.firstName && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  {...register("lastName")}
                  className="mt-1.5"
                />
                {errors.lastName && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                {...register("email")}
                className="mt-1.5"
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                {...register("phone")}
                className="mt-1.5"
              />
              {errors.phone && (
                <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-1.5">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  {...register("password")}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                  {errors.password.message}
                </p>
              )}
              <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                Must contain at least 8 characters, one uppercase, one
                lowercase, and one number
              </p>
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative mt-1.5">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  {...register("confirmPassword")}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Professional Information */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                Professional Information
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tell us about your real estate experience
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="licenseNumber">License Number</Label>
                <Input
                  id="licenseNumber"
                  type="text"
                  placeholder="e.g., DRE-12345678"
                  {...register("licenseNumber")}
                  className="mt-1.5"
                />
                {errors.licenseNumber && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.licenseNumber.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="licenseState">License State</Label>
                <select
                  id="licenseState"
                  {...register("licenseState")}
                  className="mt-1.5 w-full h-11 px-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select state</option>
                  {stateOptions.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.licenseState && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.licenseState.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="yearsExperience">Years of Experience</Label>
                <select
                  id="yearsExperience"
                  {...register("yearsExperience")}
                  className="mt-1.5 w-full h-11 px-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select experience</option>
                  {experienceOptions.map((exp) => (
                    <option key={exp.value} value={exp.value}>
                      {exp.label}
                    </option>
                  ))}
                </select>
                {errors.yearsExperience && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.yearsExperience.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="specializations">Primary Specialization</Label>
                <select
                  id="specializations"
                  {...register("specializations")}
                  className="mt-1.5 w-full h-11 px-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select specialization</option>
                  {specializationOptions.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
                {errors.specializations && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.specializations.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="agencyName">Agency Name (Optional)</Label>
              <Input
                id="agencyName"
                type="text"
                placeholder="Your real estate agency"
                {...register("agencyName")}
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="agencyAddress">Agency Address (Optional)</Label>
              <Input
                id="agencyAddress"
                type="text"
                placeholder="123 Main St, City, State"
                {...register("agencyAddress")}
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell potential clients about your experience, achievements, and what makes you stand out..."
                {...register("bio")}
                className="mt-1.5 min-h-[120px]"
              />
              <div className="mt-1.5 flex justify-between">
                {errors.bio && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {errors.bio.message}
                  </p>
                )}
                <p className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                  {bioValue.length}/500 characters
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Documents */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                Upload Documents
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Upload the required documents for verification
              </p>
            </div>

            {/* Profile Photo */}
            <div>
              <Label>Profile Photo</Label>
              <div className="mt-1.5">
                {uploadedFiles.profilePhoto ? (
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="flex-1 text-sm text-green-700 dark:text-green-300 truncate">
                      {uploadedFiles.profilePhoto}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFile("profilePhoto")}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Click to upload or drag and drop
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      PNG, JPG up to 5MB
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) simulateFileUpload("profilePhoto", file.name);
                      }}
                    />
                  </label>
                )}
              </div>
            </div>

            {/* License Copy */}
            <div>
              <Label>Real Estate License Copy</Label>
              <div className="mt-1.5">
                {uploadedFiles.licenseCopy ? (
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="flex-1 text-sm text-green-700 dark:text-green-300 truncate">
                      {uploadedFiles.licenseCopy}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFile("licenseCopy")}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Upload your license document
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      PDF, PNG, JPG up to 10MB
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) simulateFileUpload("licenseCopy", file.name);
                      }}
                    />
                  </label>
                )}
              </div>
            </div>

            {/* ID Proof */}
            <div>
              <Label>Government ID Proof</Label>
              <div className="mt-1.5">
                {uploadedFiles.idProof ? (
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="flex-1 text-sm text-green-700 dark:text-green-300 truncate">
                      {uploadedFiles.idProof}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFile("idProof")}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Upload government issued ID
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      Passport, Driver's License, etc.
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) simulateFileUpload("idProof", file.name);
                      }}
                    />
                  </label>
                )}
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                <strong>Note:</strong> All documents will be verified by our
                team. Please ensure they are clear and valid. Document
                verification typically takes 2-3 business days.
              </p>
            </div>
          </div>
        )}

        {/* Step 4: Agreement */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                Terms & Agreement
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Please review and accept our terms to complete registration
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  {...register("termsAccepted")}
                  className="w-5 h-5 mt-0.5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <div>
                  <label
                    htmlFor="termsAccepted"
                    className="text-sm font-medium text-gray-900 dark:text-white cursor-pointer"
                  >
                    Terms of Service
                  </label>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    I have read and agree to the{" "}
                    <Link
                      href="/terms-of-service"
                      className="text-indigo-600 hover:underline"
                      target="_blank"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-indigo-600 hover:underline"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                  {errors.termsAccepted && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.termsAccepted.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <input
                  type="checkbox"
                  id="codeOfConductAccepted"
                  {...register("codeOfConductAccepted")}
                  className="w-5 h-5 mt-0.5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <div>
                  <label
                    htmlFor="codeOfConductAccepted"
                    className="text-sm font-medium text-gray-900 dark:text-white cursor-pointer"
                  >
                    Agent Code of Conduct
                  </label>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    I agree to maintain professional standards, provide accurate
                    property information, respond to inquiries promptly, and
                    treat all clients with respect and fairness.
                  </p>
                  {errors.codeOfConductAccepted && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.codeOfConductAccepted.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <input
                  type="checkbox"
                  id="backgroundCheckConsent"
                  {...register("backgroundCheckConsent")}
                  className="w-5 h-5 mt-0.5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <div>
                  <label
                    htmlFor="backgroundCheckConsent"
                    className="text-sm font-medium text-gray-900 dark:text-white cursor-pointer"
                  >
                    Background Check Consent
                  </label>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    I consent to a background check being performed as part of
                    the agent verification process. This may include
                    verification of license, criminal background, and
                    professional references.
                  </p>
                  {errors.backgroundCheckConsent && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.backgroundCheckConsent.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
              <h4 className="text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-2">
                What happens next?
              </h4>
              <ol className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1 list-decimal list-inside">
                <li>
                  Our team will review your application (2-3 business days)
                </li>
                <li>We'll verify your license and documents</li>
                <li>You'll receive an email with your account activation</li>
                <li>
                  Complete your agent profile and start listing properties
                </li>
              </ol>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="gap-2 bg-transparent"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          {currentStep < 4 ? (
            <Button type="button" onClick={nextStep} className="gap-2">
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button type="submit" disabled={isLoading} className="gap-2">
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <CheckCircle className="w-4 h-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
