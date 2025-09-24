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
import "./signup.module.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export default function SignupPage() {
    const [submitting, setSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    const passwordValue = watch("password");

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
        <div className={`min-h-screen w-full bg-white text-slate-900 ${poppins.className}`}>
            {/* 50/50 split — left: form, right: image */}
            <div className="mx-auto grid min-h-screen max-w-[1580px] grid-cols-1 md:grid-cols-2">
                {/* LEFT: logo, socials, form */}
                <div className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-10 order-1">
                    <div className="w-full max-w-[580px] space-y-2">
                        {/* Logo */}
                        <div className="flex justify-center">
                            <Image src="/png-02.png" alt="Logo" width={350} height={80} priority />
                        </div>

                        {/* Social buttons */}
                        <div className="flex justify-center gap-3">
                            <button
                                type="button"
                                aria-label="Continue with Google"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-400 bg-white shadow-sm transition hover:bg-slate-50 focus:outline-none"
                            >
                                <FcGoogle className="h-7 w-7" />
                            </button>
                            <button
                                type="button"
                                aria-label="Continue with Facebook"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-400 bg-white shadow-sm transition hover:bg-slate-50 focus:outline-none"
                            >
                                <FaFacebookF className="h-7 w-7 text-[#1877F2]" />
                            </button>
                            <button
                                type="button"
                                aria-label="Continue with LinkedIn"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-400 bg-white shadow-sm transition hover:bg-slate-50 focus:outline-none"
                            >
                                <FaLinkedinIn className="h-7 w-7 text-[#0A66C2]" />
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-300"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white px-3 font-semibold text-slate-500">OR</span>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 z-10 md:space-y-3">
                            {/* Name row */}
                            <div className="grid grid-cols-1 gap-4 md:gap-3 sm:grid-cols-2">
                                <div>
                                    <Input
                                        id="firstName"
                                        placeholder="First Name*"
                                        className="px-4 py-2 md:px-4 z-20 md:py-3"
                                        {...register("firstName", { required: "First name is required" })}
                                    />
                                    {errors.firstName && (
                                        <p className="ml-1 mt-1 text-[11px] text-rose-600">{errors.firstName.message}</p>
                                    )}
                                </div>
                                <div>
                                    <Input
                                        id="lastName"
                                        placeholder="Last Name*"
                                        className="px-4 py-2 md:px-4 md:py-3"
                                        {...register("lastName", { required: "Last name is required" })}
                                    />
                                    {errors.lastName && (
                                        <p className="ml-1 mt-1 text-[11px] text-rose-600">{errors.lastName.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Company */}
                            <div>
                                <Input
                                    id="company"
                                    placeholder="Company Name*"
                                    className="px-4 py-2 md:px-4 md:py-3"
                                    {...register("company", { required: "Company name is required" })}
                                />
                                {errors.company && (
                                    <p className="ml-1 mt-1 text-[11px] text-rose-600">{errors.company.message}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div className="group rounded-2xl py-2 border border-pink-400 transition focus-within:ring-2 focus-within:ring-pink-400/30">
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
                                            buttonClass="!border-0 !bg-transparent !px-2 !py-2"
                                            inputClass="!w-full !bg-transparent !border-0 !outline-none !px-12 placeholder:text-slate-400 placeholder:opacity-50"
                                        />
                                    )}
                                />
                            </div>
                            {errors.phone && (
                                <p className="ml-1 mt-1 text-[11px] text-rose-600">{errors.phone.message}</p>
                            )}

                            {/* Email */}
                            <div>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email Address*"
                                    className="px-4 py-2 md:px-3 md:py-3"
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
                            <div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Password*"
                                    className="px-4 py-2 md:px-3 md:py-3"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 8, message: "Must be at least 8 characters" },
                                    })}
                                />
                                {errors.password && (
                                    <p className="ml-1 mt-1 text-[11px] text-rose-600">{errors.password.message}</p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password*"
                                    className="px-4 py-4 md:px-3 md:py-3"
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password",
                                        validate: (val) => val === passwordValue || "Passwords must match",
                                    })}
                                />
                                {errors.confirmPassword && (
                                    <p className="ml-1 mt-1 text-[11px] text-rose-600">{errors.confirmPassword.message}</p>
                                )}
                            </div>

                            {/* Terms */}
                            <div className="flex items-start gap-2 pt-1">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="mt-0.5 h-3.5 w-3.5 cursor-pointer rounded border border-pink-400/60 text-[#EA4B98] accent-[#EA4B98] focus:ring-[#EA4B98]"
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
                                <p className="ml-1 mt-1 text-[11px] text-rose-600">{errors.terms.message}</p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={submitting}
                                className="mt-2 inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-[#F6722B] via-[#EA4B98] to-[#EA4B98] px-6 py-2.5 text-[15px] font-semibold text-white shadow-lg transition hover:brightness-105 active:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {submitting ? "Creating…" : "Create Account"}
                            </button>

                            {/* Already have an account */}
                            <p className="mt-3 text-center text-sm text-slate-600">
                                Already have an account?{" "}
                                <Link href="/login" className="font-medium text-[#EA4B98] hover:underline">
                                    Log in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>

                {/* RIGHT: image (centered, 70% height) */}
                <div className="relative hidden md:flex items-center justify-center order-2">
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
