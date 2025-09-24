"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Input } from "@/components/ui/input";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn, FaUser, FaLock, FaBriefcase } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

import "./signup.module.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export default function SignupPage() {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(null);

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    const passwordValue = watch("password");

    async function onSubmit() {
        setSubmitting(true);
        try {
            setSubmitted(values); // 👈 show data from hook
            console.log("Signup payload", values);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className={`min-h-screen w-full bg-white text-slate-900 ${poppins.className}`}>
            <div className="mx-auto grid min-h-screen max-w-[1580px] grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10 py-8">
                {/* LEFT SIDE */}
                <div className="order-1 flex min-h-screen items-center justify-center">
                    <div className="w-full max-w-[580px] space-y-5">
                        {/* Logo */}
                        <div className="flex justify-center">
                            <Image src="/png-02.png" alt="Logo" width={300} height={60} priority />
                        </div>

                        {/* Heading */}
                        <div className="text-center space-y-1">
                            <h1 className="text-2xl font-semibold text-slate-900">Welcome to MessageMind</h1>
                            <p className="text-sm text-slate-600">
                                Sign up and let&apos;s confuse the chatbots; show them how real conversations are
                                done with <span className="font-medium text-[#EA4B98]">MessageMind</span>!
                            </p>
                        </div>

                        {/* Social buttons */}
                        <div className="space-y-2">
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white py-3 shadow-sm transition hover:bg-slate-50"
                            >
                                <FcGoogle className="h-5 w-5" />
                                <span className="text-sm font-medium text-slate-700">Continue with Google</span>
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white py-3 shadow-sm transition hover:bg-slate-50"
                            >
                                <FaFacebookF className="h-5 w-5 text-[#1877F2]" />
                                <span className="text-sm font-medium text-slate-700">Continue with Facebook</span>
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white py-3 shadow-sm transition hover:bg-slate-50"
                            >
                                <FaLinkedinIn className="h-5 w-5 text-[#0A66C2]" />
                                <span className="text-sm font-medium text-slate-700">Continue with LinkedIn</span>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200" />
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white px-3 text-xs text-slate-500">OR CONTINUE WITH EMAIL</span>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                            {/* Name row */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="relative">
                                    <Input
                                        id="firstName"
                                        placeholder="First Name*"
                                        aria-invalid={!!errors.firstName}
                                        className={`px-5 py-3 rounded-2xl placeholder:text-slate-400 placeholder:opacity-50 ${errors.firstName ? "border-rose-500 focus-visible:ring-rose-400" : ""
                                            }`}
                                        {...register("firstName", { required: "First name is required" })}
                                    />
                                    {errors.firstName && (
                                        <p className="ml-1 mt-1 text-[11px] text-rose-600">{String(errors.firstName.message)}</p>
                                    )}
                                </div>
                                <div className="relative">
                                    <Input
                                        id="lastName"
                                        placeholder="Last Name*"
                                        aria-invalid={!!errors.lastName}
                                        className={`px-5 py-3 rounded-2xl placeholder:text-slate-400 placeholder:opacity-50 ${errors.lastName ? "border-rose-500 focus-visible:ring-rose-400" : ""
                                            }`}
                                        {...register("lastName", { required: "Last name is required" })}
                                    />
                                    {errors.lastName && (
                                        <p className="ml-1 mt-1 text-[11px] text-rose-600">{String(errors.lastName.message)}</p>
                                    )}
                                </div>
                            </div>

                            {/* Company */}
                            <div className="relative">

                                <Input
                                    id="company"
                                    placeholder="Company Name*"
                                    aria-invalid={!!errors.company}
                                    className={`px-5 py-3 rounded-2xl placeholder:text-slate-400 placeholder:opacity-50 ${errors.company ? "border-rose-500 focus-visible:ring-rose-400" : ""
                                        }`}
                                    {...register("company", { required: "Company name is required" })}
                                />
                                {errors.company && (
                                    <p className="ml-1 mt-1 text-[11px] text-rose-600">{String(errors.company.message)}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div
                                className={`relative rounded-2xl border px-2 py-2 transition ${errors.phone ? "border-rose-500 ring-rose-200 ring-1" : "border-pink-400"
                                    }`}
                            >
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
                                            inputClass="!w-full !bg-transparent !border-0 !outline-none !px-12 !py-2 placeholder:text-slate-400 placeholder:opacity-50"
                                        />
                                    )}
                                />
                            </div>
                            {errors.phone && (
                                <p className="ml-1 mt-1 text-[11px] text-rose-600">{String(errors.phone.message)}</p>
                            )}

                            {/* Email */}
                            <div className="relative">
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email Address*"
                                    aria-invalid={!!errors.email}
                                    className={`px-5 py-3 rounded-2xl  placeholder:text-slate-400 placeholder:opacity-50 ${errors.email ? "border-rose-500 focus-visible:ring-rose-400" : ""
                                        }`}
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/, message: "Enter a valid email" },
                                    })}
                                />
                                {errors.email && (
                                    <p className="ml-1 mt-1 text-[11px] text-rose-600">{String(errors.email.message)}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div className="relative">

                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Password*"
                                    aria-invalid={!!errors.password}
                                    className={`px-5 py-3 rounded-2xl placeholder:text-slate-400 placeholder:opacity-50 ${errors.password ? "border-rose-500 focus-visible:ring-rose-400" : ""
                                        }`}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 8, message: "Must be at least 8 characters" },
                                    })}
                                />
                                {errors.password && (
                                    <p className="ml-1 mt-1 text-[11px] text-rose-600">{String(errors.password.message)}</p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div className="relative">
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password*"
                                    aria-invalid={!!errors.confirmPassword}
                                    className={`px-5 py-3 rounded-2xl placeholder:text-slate-400 placeholder:opacity-50 ${errors.confirmPassword ? "border-rose-500 focus-visible:ring-rose-400" : ""
                                        }`}
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password",
                                        validate: (val) => val === passwordValue || "Passwords must match",
                                    })}
                                />
                                {errors.confirmPassword && (
                                    <p className="ml-1 mt-1 text-[11px] text-rose-600">
                                        {String(errors.confirmPassword.message)}
                                    </p>
                                )}
                            </div>

                            {/* Terms */}
                            <div className="flex items-start gap-2">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className={`h-4 w-4 cursor-pointer rounded border text-[#EA4B98] accent-[#EA4B98] ${errors.terms ? "border-rose-500" : "border-pink-400/60"
                                        }`}
                                    {...register("terms", { required: "You must accept Terms & Privacy" })}
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
                            {errors.terms && (
                                <p className="ml-1 mt-1 text-[11px] text-rose-600">{String(errors.terms.message)}</p>
                            )}

                            {/* CTA */}
                            <button
                                type="submit"
                                disabled={submitting}
                                className="mt-1 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF7A3D] via-[#EA4B98] to-[#FF5BD3] px-6 py-3 text-[16px] font-semibold text-white shadow-lg ring-1 ring-inset ring-[#EA4B98]/30 transition-transform hover:scale-[1.02] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#EA4B98]/50 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {submitting ? "Creating…" : "Create Account"}
                            </button>

                            {/* Already have account */}
                            <p className="text-center text-sm text-slate-600">
                                Already have an account?{" "}
                                <Link href="/login" className="font-medium text-[#EA4B98] hover:underline">
                                    Log in
                                </Link>
                            </p>

                            {/* Show submitted data */}
                            {submitted && (
                                <pre className="mt-3 rounded-xl bg-slate-50 p-3 text-xs text-slate-700 overflow-x-auto">
                                    {JSON.stringify(submitted, null, 2)}
                                </pre>
                            )}
                        </form>
                    </div>
                </div>

                {/* RIGHT SIDE → IMAGE */}
                <div className="order-2 hidden md:flex items-center justify-center">
                    <div className="h-[75vh] w-auto max-w-[100%]">
                        <Image
                            src="https://my.messagemind.ai/signup-sl-en-2.png"
                            alt="MessageMind Support Illustration"
                            width={900}
                            height={900}
                            className="h-full w-auto object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

