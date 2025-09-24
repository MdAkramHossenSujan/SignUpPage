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
        <>
            {/* Top-center logo */}
            <div className="fixed top-6 left-1/2 z-30 -translate-x-1/2">
                <Image src="/logo.webp" alt="Logo" width={140} height={80} priority />
            </div>

            <div className={`min-h-screen w-full bg-white text-slate-900 p-6 ${poppins.className}`}>
                {/* 50/50 split from md and up */}
                <div className="mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 md:grid-cols-2">
                    {/* LEFT HALF: centered image at 70% height */}
                    <div className="relative hidden md:flex items-center justify-center">
                        <div className="h-[70vh] w-auto">
                            <Image
                                src="https://my.messagemind.ai/signup-sl-en-2.png"
                                alt="MessageMind Support Illustration"
                                width={600}
                                height={600}
                                className="h-full w-auto object-contain"
                                priority
                            />
                        </div>
                    </div>


                    {/* RIGHT HALF: form pane */}
                    <div className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-10">
                        <div className="w-full max-w-[520px]">
                            <div className="rounded-3xl border border-pink-400/10 bg-white/90 p-6 shadow-xl backdrop-blur-sm md:p-5">
                                <header className="mb-4 text-center md:text-left">
                                    <h1 className="text-3xl font-semibold tracking-tight md:text-2xl">
                                        Create Account
                                    </h1>
                                    <p className="mt-2 text-sm text-slate-600">
                                        You’re just a few steps away! Sign up and unlock 24/7 customer support with MessageMind.
                                    </p>
                                </header>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-3">
                                    {/* Name row */}
                                    <div className="grid grid-cols-1 gap-4 md:gap-3 sm:grid-cols-2">
                                        <div>
                                            <label className="sr-only" htmlFor="firstName">First Name</label>
                                            <Input
                                                id="firstName"
                                                aria-invalid={!!errors.firstName}
                                                placeholder="First Name*"
                                                className="placeholder:text-slate-400 placeholder:opacity-50 px-4 py-2 md:px-3 md:py-1.5"
                                                {...register("firstName", { required: "First name is required" })}
                                            />
                                            {errors.firstName && (
                                                <p className="ml-1 mt-1 text-[11px] text-rose-600">{errors.firstName.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="sr-only" htmlFor="lastName">Last Name</label>
                                            <Input
                                                id="lastName"
                                                aria-invalid={!!errors.lastName}
                                                placeholder="Last Name*"
                                                className="placeholder:text-slate-400 placeholder:opacity-50 px-4 py-2 md:px-3 md:py-1.5"
                                                {...register("lastName", { required: "Last name is required" })}
                                            />
                                            {errors.lastName && (
                                                <p className="ml-1 mt-1 text-[11px] text-rose-600">{errors.lastName.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Company */}
                                    <div>
                                        <label className="sr-only" htmlFor="company">Company</label>
                                        <Input
                                            id="company"
                                            aria-invalid={!!errors.company}
                                            placeholder="Company Name*"
                                            className="placeholder:text-slate-400 placeholder:opacity-50 px-4 py-2 md:px-3 md:py-1.5"
                                            {...register("company", { required: "Company name is required" })}
                                        />
                                        {errors.company && (
                                            <p className="ml-1 mt-1 text-[11px] text-rose-600">{errors.company.message}</p>
                                        )}
                                    </div>

                                    {/* Phone */}
                                    <div className="group rounded-3xl border border-pink-400/60 transition focus-within:ring-2 focus-within:ring-pink-400/30 md:px-2">
                                        <label className="sr-only" htmlFor="phone">Phone</label>
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
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            aria-invalid={!!errors.email}
                                            placeholder="Email Address*"
                                            className="placeholder:text-slate-400 placeholder:opacity-50 px-4 py-2 md:px-3 md:py-1.5"
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
                                        <label className="sr-only" htmlFor="password">Password</label>
                                        <Input
                                            id="password"
                                            type="password"
                                            aria-invalid={!!errors.password}
                                            placeholder="Password*"
                                            className="placeholder:text-slate-400 placeholder:opacity-50 px-4 py-2 md:px-3 md:py-1.5"
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
                                        <label className="sr-only" htmlFor="confirmPassword">Confirm Password</label>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            aria-invalid={!!errors.confirmPassword}
                                            placeholder="Confirm Password*"
                                            className="placeholder:text-slate-400 placeholder:opacity-50 px-4 py-2 md:px-3 md:py-1.5"
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
                                        className="mt-2 inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-[#F6722B] via-[#EA4B98] to-[#EA4B98] px-6 py-2.5 text-[15px] font-semibold text-white shadow-lg ring-1 ring-inset ring-[#EA4B98]/30 transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#EA4B98]/50 active:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {submitting ? "Creating…" : "Create Account"}
                                    </button>

                                    {/* Divider + social */}
                                    <div className="relative my-4">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-slate-200"></div>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <span className="bg-white px-3 text-sm text-slate-500">OR</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-4">
                                        <button
                                            type="button"
                                            aria-label="Continue with Google"
                                            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-pink-300/40"
                                        >
                                            <FcGoogle className="h-5 w-5" />
                                        </button>
                                        <button
                                            type="button"
                                            aria-label="Continue with Facebook"
                                            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-pink-300/40"
                                        >
                                            <FaFacebookF className="h-5 w-5 text-[#1877F2]" />
                                        </button>
                                        <button
                                            type="button"
                                            aria-label="Continue with LinkedIn"
                                            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-pink-300/40"
                                        >
                                            <FaLinkedinIn className="h-5 w-5 text-[#0A66C2]" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
