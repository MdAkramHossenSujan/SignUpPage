"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useMemo, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Input } from "@/components/ui/input";
import { FaFacebookF, FaLinkedinIn, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import styles from "./signup.module.css";
import Background from "@/components/Background";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function SignupPage() {
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });

  const termsChecked = watch("terms");
  const passwordValue = watch("password");

  const ctaDisabled = useMemo(
    () => submitting || !termsChecked,
    [submitting, termsChecked]
  );

  async function onSubmit(values) {
    setSubmitting(true);
    try {
      console.log("Signup payload", values);
      alert("Submitted!");
      reset();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className={`min-h-[100svh] grid bg-[#fafafa] text-slate-900 ${poppins.className}`}
    >
      <Background />

      {/* HEADER: logo stays at top center */}
      <header className="py-4 lg:mt-4 md:mt-7 flex h-21 justify-center">
        <Image
          src="/png-01.png"
          alt="MessageMind"
          width={250}
          height={100}
          priority
        />
      </header>

      {/* MAIN: card stays vertically centered */}
      <main className="px-4 md:px-6 xl:px-8 flex items-center mt-10 z-10 justify-center">
        <section className="w-full max-w-[1000px]">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 rounded-xl bg-white shadow-lg ring-1 ring-black/5">
            {/* LEFT: Illustration */}
            <div className="relative hidden md:flex items-center justify-center bg-slate-50 p-4">
              <div className="h-[52vh] md:h-[58vh] w-full flex items-center justify-center">
                <Image
                  src="https://my.messagemind.ai/signup-sl-en-2.png"
                  alt="MessageMind Illustration"
                  width={1000}
                  height={800}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* RIGHT: Form (compact) */}
            <div className="p-5 sm:p-6 md:p-8 flex items-center">
              <div className="w-full max-w-[440px] mx-auto">
                {/* Headline */}
                <div className="text-center md:text-left mb-4">
                  <h1 className="text-xl lg:text-2xl font-semibold">Create Your Account</h1>
                  <p className="mt-1 text-xs lg:text-sm text-black">
                    Sign up and unlock 24/7 customer support with{" "}
                    <span className="font-medium text-[#EA4B98]">MessageMind</span>.
                  </p>
                </div>

                {/* Socials */}
                <div className="mb-3 flex justify-center gap-2">
                  <button
                    type="button"
                    aria-label="Continue with Google"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white transition hover:bg-slate-50"
                  >
                    <FcGoogle className="h-7 w-7" />
                  </button>
                  <button
                    type="button"
                    aria-label="Continue with Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white transition hover:bg-slate-50"
                  >
                    <FaFacebookF className="h-6 w-6 text-[#1877F2]" />
                  </button>
                  <button
                    type="button"
                    aria-label="Continue with LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white transition hover:bg-slate-50"
                  >
                    <FaLinkedinIn className="h-6 w-6 text-[#0A66C2]" />
                  </button>
                </div>

                {/* Divider */}
                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-2 text-[12px] font-medium text-black">
                      OR CONTINUE WITH EMAIL
                    </span>
                  </div>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <Input
                        placeholder="First Name*"
                        className="px-3 py-2 text-sm autofill:bg-white autofill:text-slate-900 autofill:shadow-[inset_0_0_0_1000px_white]"
                        {...register("firstName", { required: "First name is required" })}
                      />
                      {errors.firstName && (
                        <p className="ml-1 mt-1 text-[10px] text-rose-600">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Input
                        placeholder="Last Name*"
                        className="px-3 py-2 text-sm autofill:bg-white autofill:text-slate-900 autofill:shadow-[inset_0_0_0_1000px_white]"
                        {...register("lastName", { required: "Last name is required" })}
                      />
                      {errors.lastName && (
                        <p className="ml-1 mt-1 text-[10px] text-rose-600">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <Input
                      placeholder="Company Name*"
                      className="px-3 py-2 text-sm autofill:bg-white autofill:text-slate-900 autofill:shadow-[inset_0_0_0_1000px_white]"
                      {...register("company", { required: "Company name is required" })}
                    />
                    {errors.company && (
                      <p className="ml-1 mt-1 text-[10px] text-rose-600">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="rounded-xl border border-pink-500 py-0.5 transition focus-within:ring-2 focus-within:ring-pink-400/30">
                    <Controller
                      name="phone"
                      control={control}
                      rules={{ required: "Phone is required" }}
                      render={({ field: { onChange, value } }) => (
                        <PhoneInput
                          country="us"
                          value={value}
                          onChange={onChange}
                          enableSearch
                          containerClass="w-full"
                          buttonClass="!border-0 !bg-transparent !px-2"
                          inputClass={`!w-full !bg-transparent !border-0 !outline-none !px-12 !py-2 text-sm placeholder:opacity-50 ${styles.autofillFix}`}
                        />
                      )}
                    />
                  </div>
                  {errors.phone && (
                    <p className="ml-1 -mt-1 text-[10px] text-rose-600">
                      {errors.phone.message}
                    </p>
                  )}

                  {/* Email */}
                  <div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email Address*"
                      className="px-3 py-2 text-sm autofill:bg-white autofill:text-slate-900 autofill:shadow-[inset_0_0_0_1000px_white]"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/, message: "Enter a valid email" },
                      })}
                    />
                    {errors.email && (
                      <p className="ml-1 mt-1 text-[10px] text-rose-600">
                        {String(errors.email.message)}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="space-y-1">
                    <div className="relative flex items-center">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password*"
                        className="px-3 py-2 pr-8 text-sm autofill:bg-white autofill:text-slate-900 autofill:shadow-[inset_0_0_0_1000px_white]"
                        {...register("password", {
                          required: "Password is required",
                          minLength: { value: 8, message: "Must be at least 8 characters" },
                        })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute right-2 text-slate-500 hover:text-slate-700"
                        tabIndex={-1}
                      >
                        {showPassword ? <FaEyeSlash className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="ml-1 text-[10px] text-rose-600">{errors.password.message}</p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-1">
                    <div className="relative flex items-center">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password*"
                        className="px-3 py-2 pr-8 text-sm autofill:bg-white autofill:text-slate-900 autofill:shadow-[inset_0_0_0_1000px_white]"
                        {...register("confirmPassword", {
                          required: "Please confirm your password",
                          validate: (val) => val === passwordValue || "Passwords must match",
                        })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((s) => !s)}
                        className="absolute right-2 text-slate-500 hover:text-slate-700"
                        tabIndex={-1}
                      >
                        {showConfirmPassword ? <FaEyeSlash className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="ml-1 text-[10px] text-rose-600">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-2">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 cursor-pointer rounded accent-[#EA4B98]"
                      {...register("terms", { required: true })}
                    />
                    <label htmlFor="terms" className="text-[12px] leading-snug text-black">
                      By signing up, you agree to our{" "}
                      <Link href="/terms" className="font-medium text-[#d43e87] hover:underline">Terms</Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="font-medium text-[#EA4B98] hover:underline">Privacy Policy</Link>.
                    </label>
                  </div>

                  {/* CTA */}
                  <button
                    type="submit"
                    disabled={ctaDisabled}
                    className="mt-1 w-full rounded-2xl bg-gradient-to-r from-[#F6722B] via-[#EA4B98] to-[#EA4B98] px-5 py-2 text-[14px] font-semibold text-white shadow-md transition hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Creating…" : "Create Account"}
                  </button>

                  {/* Login link */}
                  <div className="bg-blue-50 py-2 rounded-lg">
                    <p className="text-center text-[13px]">
                      Already have an account?{" "}
                      <Link href="/login" className="font-medium text-[#EA4B98] hover:underline">
                        Log in
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER: stays at bottom */}
      <footer>
        <div className="mx-auto max-w-[1200px] md:mt-22 px-4 py-2 text-center text-[12px] md:text-[13px] text-slate-900">
          <div className="flex flex-wrap justify-center gap-0.5">
            <Link href="/privacy" className="hover:text-[#EA4B98]">Privacy Policy</Link>
            <span className="text-slate-300">|</span>
            <Link href="/terms" className="hover:text-[#EA4B98]">Terms and Conditions</Link>
            <span className="text-slate-300">|</span>
            <Link href="/docs" className="hover:text-[#EA4B98]">Documentation</Link>
          </div>
          <p className="mt-0.5 text-[11px] text-black">
            All rights reserved © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}


