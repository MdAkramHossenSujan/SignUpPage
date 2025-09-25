"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Input } from "@/components/ui/input";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./signup.module.css"; // <-- make sure this import exists

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
    } = useForm({ mode: "onBlur" });

    const passwordValue = watch("password");
    const termsAccepted = watch("terms", false);
    const isDisabled = submitting || !termsAccepted;

    async function onSubmit(values) {
        setSubmitting(true);
        try {
            alert("Submitted! Check console for payload.");
            console.log("Signup payload", values);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className={`flex min-h-screen flex-col bg-white text-slate-900 ${poppins.className}`}>
            <main className="flex-grow">
                <div className="mx-auto max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1760px] px-6 md:px-8 xl:px-10 2xl:px-12">
                    {/* tighter gaps/padding on xl */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 py-24">
                        {/* LEFT: form */}
                        <div className="flex h-[70vh] items-center justify-center">
                            <div className="w-full max-w-[620px]">
                                {/* Logo */}
                                <div className="mb-4 flex justify-center">
                                    <Image src="/png-02.png" alt="MessageMind logo" width={320} height={72} priority />
                                </div>

                                {/* Socials */}
                                <div className="mb-3 flex justify-center gap-3">
                                    <button
                                        type="button"
                                        aria-label="Continue with Google"
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm transition hover:bg-slate-50"
                                    >
                                        <FcGoogle className="h-6 w-6" />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Continue with Facebook"
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm transition hover:bg-slate-50"
                                    >
                                        <FaFacebookF className="h-5 w-5 text-[#1877F2]" />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Continue with LinkedIn"
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm transition hover:bg-slate-50"
                                    >
                                        <FaLinkedinIn className="h-5 w-5 text-[#0A66C2]" />
                                    </button>
                                </div>

                                {/* Divider */}
                                <div className="relative mb-3">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-slate-200" />
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="bg-white px-3 font-semibold text-[12px] tracking-wide text-slate-700">
                                            OR CONTINUE WITH EMAIL
                                        </span>
                                    </div>
                                </div>

                                {/* FORM */}
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                                    {/* Names */}
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="firstName" className="sr-only">First Name</label>
                                            <Input
                                                id="firstName"
                                                autoComplete="given-name"
                                                placeholder="First Name*"
                                                className={`px-4 py-3 ${styles.autofillFix}`}
                                                {...register("firstName", { required: "First name is required" })}
                                            />
                                            {errors.firstName && (
                                                <p className="ml-1 mt-1 text-[11px] text-rose-600">{errors.firstName.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="sr-only">Last Name</label>
                                            <Input
                                                id="lastName"
                                                autoComplete="family-name"
                                                placeholder="Last Name*"
                                                className={`px-4 py-3 ${styles.autofillFix}`}
                                                {...register("lastName", { required: "Last name is required" })}
                                            />
                                            {errors.lastName && (
                                                <p className="ml-1 mt-1 text-[11px] text-rose-600">{errors.lastName.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Company */}
                                    <div>
                                        <label htmlFor="company" className="sr-only">Company</label>
                                        <Input
                                            id="company"
                                            autoComplete="organization"
                                            placeholder="Company Name*"
                                            className={`px-4 py-3 ${styles.autofillFix}`}
                                            {...register("company", { required: "Company name is required" })}
                                        />
                                        {errors.company && (
                                            <p className="ml-1 mt-1 text-[11px] text-rose-600">{errors.company.message}</p>
                                        )}
                                    </div>

                                    {/* Phone */}
                                    <div className="rounded-2xl border py-1.5 border-pink-400 transition focus-within:ring-2 focus-within:ring-pink-400/30">
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
                                                    containerClass="w-full relative dropdown-container"
                                                    buttonClass="!border-0 !bg-transparent !px-2 !py-2"
                                                    inputClass={`!w-full !bg-transparent !border-0 !outline-none !px-12 !py-3 placeholder:text-slate-400 placeholder:opacity-50 ${styles.autofillFix}`}
                                                />
                                            )}
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="ml-1 -mt-2 text-[11px] text-rose-600">{errors.phone.message}</p>
                                    )}

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="Email Address*"
                                            className={`px-4 py-3 ${styles.autofillFix}`}
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/, message: "Enter a valid email" },
                                            })}
                                        />
                                        {errors.email && (
                                            <p className="ml-1 mt-1 text-[11px] text-rose-600">{errors.email.message}</p>
                                        )}
                                    </div>

                                    {/* Password */}
                                    <div className="space-y-1">
                                        <div className="relative flex items-center">
                                            <label htmlFor="password" className="sr-only">Password</label>
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                autoComplete="new-password"
                                                placeholder="Password*"
                                                className={`px-4 py-3 pr-10 ${styles.autofillFix}`}
                                                {...register("password", {
                                                    required: "Password is required",
                                                    minLength: { value: 8, message: "Must be at least 8 characters" },
                                                })}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((s) => !s)}
                                                className="absolute right-3 text-slate-500 hover:text-slate-700"
                                                tabIndex={-1}
                                                aria-label={showPassword ? "Hide password" : "Show password"}
                                            >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <p className="ml-1 text-[11px] text-rose-600">{errors.password.message}</p>
                                        )}
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="space-y-1">
                                        <div className="relative flex items-center">
                                            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                                            <Input
                                                id="confirmPassword"
                                                type={showConfirmPassword ? "text" : "password"}
                                                autoComplete="new-password"
                                                placeholder="Confirm Password*"
                                                className={`px-4 py-3 pr-10 ${styles.autofillFix}`}
                                                {...register("confirmPassword", {
                                                    required: "Please confirm your password",
                                                    validate: (val) => val === passwordValue || "Passwords must match",
                                                })}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword((s) => !s)}
                                                className="absolute right-3 text-slate-500 hover:text-slate-700"
                                                tabIndex={-1}
                                                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                            >
                                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                        {errors.confirmPassword && (
                                            <p className="ml-1 text-[11px] text-rose-600">{errors.confirmPassword.message}</p>
                                        )}
                                    </div>

                                    {/* Terms */}
                                    <div className="flex items-start gap-2">
                                        <input
                                            id="terms"
                                            type="checkbox"
                                            className="mt-0.5 h-4 w-4 cursor-pointer rounded border border-pink-400/60 text-[#EA4B98] accent-[#EA4B98] focus:ring-[#EA4B98]"
                                            {...register("terms")}
                                        />
                                        <label htmlFor="terms" className="text-xs leading-snug text-slate-600">
                                            By signing up, you agree to our{" "}
                                            <Link href="/terms" className="font-medium text-[#EA4B98] hover:underline">
                                                Terms
                                            </Link>{" "}
                                            and our{" "}
                                            <Link href="/privacy" className="font-medium text-[#EA4B98] hover:underline">
                                                Privacy Policy
                                            </Link>
                                            .
                                        </label>
                                    </div>

                                    {/* CTA (disabled until terms accepted) */}
                                    <button
                                        type="submit"
                                        disabled={isDisabled}
                                        aria-disabled={isDisabled}
                                        className="mt-1 inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-[#F6722B] via-[#EA4B98] to-[#EA4B98] px-6 py-3 text-[15px] font-semibold text-white shadow-lg ring-1 ring-[#EA4B98]/20 transition hover:scale-[1.01] hover:brightness-105 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {submitting ? "Creating…" : "Create Account"}
                                    </button>

                                    {/* Already have account */}
                                    <p className="mt-2 text-center text-sm text-slate-600">
                                        Already have an account?{" "}
                                        <Link href="/login" className="font-medium text-[#EA4B98] hover:underline">
                                            Log in
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>

                        {/* RIGHT: image */}
                        <div className="relative hidden h-[70vh] items-center justify-center md:flex">
                            <div className="h-full w-auto max-w-[98%] xl:max-w-[100%]">
                                <Image
                                    src="https://my.messagemind.ai/signup-sl-en-2.png"
                                    alt="MessageMind Support Illustration"
                                    width={1200}
                                    height={900}
                                    sizes="(min-width: 1536px) 42vw, (min-width: 1024px) 48vw, 90vw"
                                    className="h-full w-auto object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* FOOTER */}
            <footer className="w-full border-slate-200">
                <div className="mx-auto max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1760px] px-6 md:px-8 xl:px-10 2xl:px-12 py-3 text-center text-sm text-slate-800">
                    <div className="flex flex-wrap justify-center gap-2">
                        <Link href="/privacy" className="hover:text-[#EA4B98]">Privacy Policy</Link>
                        <span className="text-slate-300">|</span>
                        <Link href="/terms" className="hover:text-[#EA4B98]">Terms and Conditions</Link>
                        <span className="text-slate-300">|</span>
                        <Link href="/docs" className="hover:text-[#EA4B98]">Documentation</Link>
                    </div>
                    <p className="mt-1 text-xs text-slate-700">
                        All rights reserved © {new Date().getFullYear()}
                    </p>
                </div>
            </footer>
        </div>
    );
}

