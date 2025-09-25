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
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div
            className={`flex  flex-col bg-[#fafafa] text-slate-900 ${poppins.className}`}
        >
            {/* HEADER */}
            <header className="py-6 flex justify-center">
                <Image
                    src="/png-01.png"
                    alt="MessageMind"
                    width={280} // wider logo
                    height={80}
                    priority
                />
            </header>

            {/* MAIN */}
            <main className="flex flex-1 items-center justify-center px-4">
                <div className="mx-auto w-full max-w-[1200px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl bg-white shadow-xl ring-1 shadow-b-x ring-black/5 overflow-hidden">
                        {/* LEFT: Illustration */}
                        <div className="relative flex items-center justify-center bg-slate-50 p-6">
                            <Image
                                src="https://my.messagemind.ai/signup-sl-en-2.png"
                                alt="MessageMind Illustration"
                                width={1000}
                                height={800}
                                className="object-contain max-h-[600px] w-auto"
                                priority
                            />
                        </div>

                        {/* RIGHT: Form */}
                        <div className="p-6 sm:p-8 md:p-10 flex items-center">
                            <div className="w-full max-w-md mx-auto">
                                {/* Headline */}
                                <div className="text-center md:text-left mb-5">
                                    <h1 className="text-2xl font-semibold">Create Your Account</h1>
                                    <p className="mt-1 text-xs lg:text-[13px] text-black">
                                        Sign up and unlock 24/7 customer support with{" "}
                                        <span className="font-medium text-[#EA4B98]">
                                            MessageMind
                                        </span>.
                                    </p>
                                </div>

                                {/* Socials */}
                                <div className="mb-4 flex justify-center gap-2">
                                    <button
                                        type="button"
                                        aria-label="Continue with Google"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white transition hover:bg-slate-50"
                                    >
                                        <FcGoogle className="h-7 w-7" />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Continue with Facebook"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white transition hover:bg-slate-50"
                                    >
                                        <FaFacebookF className="h-6 w-6 text-[#1877F2]" />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Continue with LinkedIn"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white transition hover:bg-slate-50"
                                    >
                                        <FaLinkedinIn className="h-6 w-6 text-[#0A66C2]" />
                                    </button>
                                </div>

                                {/* Divider */}
                                <div className="relative my-3">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-slate-200" />
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="bg-white px-2 font-semibold md:text-xs lg:text-sm text-black">
                                            OR CONTINUE WITH EMAIL
                                        </span>
                                    </div>
                                </div>

                                {/* FORM */}
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                                    {/* Name row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <Input
                                                placeholder="First Name*"
                                                className=" px-4 py-2.5 autofill:bg-white autofill:text-slate-900 autofill:shadow-[inset_0_0_0_1000px_white]"
                                                {...register("firstName", {
                                                    required: "First name is required",
                                                })}
                                            />
                                            {errors.firstName && (
                                                <p className="ml-1 mt-1 text-[11px] text-rose-600">
                                                    {errors.firstName.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <Input
                                                placeholder="Last Name*"
                                                className=" px-4 py-2.5 autofill:bg-white autofill:text-slate-900 autofill:shadow-[inset_0_0_0_1000px_white]"
                                                {...register("lastName", {
                                                    required: "Last name is required",
                                                })}
                                            />
                                            {errors.lastName && (
                                                <p className="ml-1 mt-1 text-[11px] text-rose-600">
                                                    {errors.lastName.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Company */}
                                    <div>
                                        <Input
                                            placeholder="Company Name*"
                                            className=" px-4 py-2.5 autofill:bg-white autofill:text-slate-900 autofill:shadow-[inset_0_0_0_1000px_white]"
                                            {...register("company", {
                                                required: "Company name is required",
                                            })}
                                        />
                                        {errors.company && (
                                            <p className="ml-1 mt-1 text-[11px] text-rose-600">
                                                {errors.company.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Phone */}
                                    <div className="rounded-2xl border border-pink-500 py-1.5 transition focus-within:ring-2 focus-within:ring-pink-400/30">
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
                                                    inputClass={`!w-full !bg-transparent !border-0 !outline-none !px-12 !py-2.5 placeholder:opacity-50 ${styles.autofillFix}`}
                                                />
                                            )}
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="ml-1 -mt-2 text-[11px] text-rose-600">
                                            {errors.phone.message}
                                        </p>
                                    )}

                                    <div>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Email Address*"
                                            className=" px-4 py-2.5 autofill:bg-white autofill:text-slate-900 autofill:shadow-[inset_0_0_0_1000px_white]"
                                            {...register("email", { required: "Email is required", pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/, message: "Enter a valid email" } })}

                                        />
                                        {errors.email && (
                                            <p className="ml-1 mt-1 text-[11px] text-rose-600">{String(errors.email.message)}</p>
                                        )}
                                    </div>


                                    {/* Password */}
                                    <div className="space-y-1">
                                        <div className="relative flex items-center">
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Password*"
                                                className={`px-4 py-2.5 ${styles.autofillFix}`}
                                                {...register("password", {
                                                    required: "Password is required",
                                                    minLength: {
                                                        value: 8,
                                                        message: "Must be at least 8 characters",
                                                    },
                                                })}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((s) => !s)}
                                                className="absolute right-3 text-slate-500 hover:text-slate-700"
                                                tabIndex={-1}
                                            >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <p className="ml-1 text-[11px] text-rose-600">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="space-y-1">
                                        <div className="relative flex items-center">
                                            <Input
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="Confirm Password*"
                                                className={`px-4 py-2.5 autofill:bg-white`}
                                                {...register("confirmPassword", {
                                                    required: "Please confirm your password",
                                                    validate: (val) =>
                                                        val === passwordValue || "Passwords must match",
                                                })}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword((s) => !s)}
                                                className="absolute right-3 text-slate-500 hover:text-slate-700"
                                                tabIndex={-1}
                                            >
                                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                        {errors.confirmPassword && (
                                            <p className="ml-1 text-[11px] text-rose-600">
                                                {errors.confirmPassword.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Terms */}
                                    <div className="flex items-start gap-2">
                                        <input
                                            id="terms"
                                            type="checkbox"
                                            className=" h-4 w-4 cursor-pointer rounded-2xl accent-[#EA4B98]"
                                            {...register("terms", { required: true })}
                                        />
                                        <label
                                            htmlFor="terms"
                                            className="text-xs leading-snug text-black"
                                        >
                                            By signing up, you agree to our{" "}
                                            <Link
                                                href="/terms"
                                                className="font-medium text-[#d43e87] hover:underline"
                                            >
                                                Terms
                                            </Link>{" "}
                                            and{" "}
                                            <Link
                                                href="/privacy"
                                                className="font-medium text-[#EA4B98] hover:underline"
                                            >
                                                Privacy Policy
                                            </Link>
                                            .
                                        </label>
                                    </div>

                                    {/* CTA */}
                                    <button
                                        type="submit"
                                        disabled={ctaDisabled}
                                        className="mt-1 w-full rounded-3xl bg-gradient-to-r from-[#F6722B] via-[#EA4B98] to-[#EA4B98] px-6 py-2.5 text-[15px] font-semibold text-white shadow-md transition hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {submitting ? "Creating…" : "Create Account"}
                                    </button>

                                   <div className="bg-blue-50 py-3 rounded-xl">
                                     <p className=" text-center text-sm">
                                        Already have an account?{" "}
                                        <Link
                                            href="/login"
                                            className="font-medium text-[#EA4B98] hover:underline"
                                        >
                                            Log in
                                        </Link>
                                    </p>
                                   </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* FOOTER */}
            <footer className="mt-6">
                <div className="mx-auto max-w-[1200px] px-4 pt-3 text-center text-xs md:text-sm text-slate-900">
                    <div className="flex flex-wrap justify-center gap-1">
                        <Link href="/privacy" className="hover:text-[#EA4B98]">
                            Privacy Policy
                        </Link>
                        <span className="text-slate-300">|</span>
                        <Link href="/terms" className="hover:text-[#EA4B98]">
                            Terms and Conditions
                        </Link>
                        <span className="text-slate-300">|</span>
                        <Link href="/docs" className="hover:text-[#EA4B98]">
                            Documentation
                        </Link>
                    </div>
                    <p className="mt-1 text-xs text-black">
                        All rights reserved © {new Date().getFullYear()}
                    </p>
                </div>
            </footer>
        </div>
    );
}

