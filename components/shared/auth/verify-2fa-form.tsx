"use client";

import type React from "react";

// import { generateOtpAction } from "@/app/actions/auth/generateOtpAction";
// import { verifyOtpAction } from "@/app/actions/auth/verifyOtpAction";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Shield,
  Smartphone,
} from "lucide-react";
// import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const otpSchema = z.object({
  otp: z.string().length(6, "Code must be 6 digits"),
});

type OTPFormData = z.infer<typeof otpSchema>;

interface Verify2FAFormProps {
  userId: string;
}

export default function Verify2FAForm({ userId }: Verify2FAFormProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { handleSubmit } = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
  });

  useEffect(() => {
    // Auto-focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newOtp.every((digit) => digit !== "") && index === 5) {
      handleVerify(newOtp.join(""));
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData
      .split("")
      .concat(Array(6 - pastedData.length).fill(""));
    setOtp(newOtp);

    if (pastedData.length === 6) {
      handleVerify(pastedData);
    }
  };

  const handleVerify = async (otpValue: string) => {
    setIsLoading(true);
    setError("");

    // try {
    //   const res = await verifyOtpAction({ userId, otp: otpValue });
    //   if (res.success && res.user) {
    //     const result = await signIn("credentials", {
    //       email: res.user.email,
    //       password: "",
    //       otpVerified: "true",
    //       redirect: false,
    //     });

    //     if (result?.ok) {
    //       router.push("/");
    //       router.refresh();
    //     } else {
    //       console.error("NextAuth signIn failed");
    //     }
    //   } else {
    //     console.error(res.message);
    //   }
    // } catch (err) {
    //   console.error(err);
    //   setError("Something went wrong. Please try again.");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const handleResend = async () => {
    setCanResend(false);
    setResendTimer(30);
    setError("");

    // try {
    //   const result = await generateOtpAction(userId);
    //   if (result.ok) {
    //     setError("");
    //   } else {
    //     setError("Failed to resend code. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Resend error:", error);
    //   setError("Failed to resend code. Please try again.");
    // }
  };

  const onSubmit = () => {
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      handleVerify(otpValue);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md"
    >
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto">
                <Shield className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">
                Two-Factor Authentication
              </h1>
              <p className="text-muted-foreground">
                Enter the 6-digit code from your authenticator app
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <div
                    className="flex gap-2 justify-center"
                    onPaste={handlePaste}
                  >
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => {
                          inputRefs.current[index] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-12 h-14 text-center text-2xl font-bold border-2 border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background transition-all"
                        disabled={isLoading}
                      />
                    ))}
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {error}
                    </motion.div>
                  )}

                  <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 text-sm text-muted-foreground">
                    <Smartphone className="h-4 w-4 shrink-0" />
                    <span>Open your authenticator app to get the code</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading || otp.some((digit) => !digit)}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    "Verify & Continue"
                  )}
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Having trouble?
                  </p>
                  {canResend ? (
                    <button
                      type="button"
                      onClick={handleResend}
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      Resend Code
                    </button>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Try again in{" "}
                      <span className="font-medium text-foreground">
                        {resendTimer}s
                      </span>
                    </p>
                  )}
                </div>
              </form>

              <div className="mt-6 text-center">
                <Link
                  href="/login"
                  className="text-sm text-primary hover:underline"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mx-auto"
              >
                <CheckCircle2 className="h-8 w-8" />
              </motion.div>
              <h1 className="text-3xl font-bold text-foreground">Verified!</h1>
              <p className="text-muted-foreground">
                Authentication successful.
                <br />
                Redirecting to dashboard...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
