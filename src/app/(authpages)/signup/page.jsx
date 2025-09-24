"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Background from "@/components/Background";

const poppins = Poppins({
  subsets: ["latin"],   // choose subsets you need
  weight: ["400", "500", "600", "700"], // choose weights
  variable: "--font-poppins", // (optional) for Tailwind usage
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
            <Background />
            <div className={`min-h-screen font-poppins w-full bg-white text-slate-900 ${poppins.className}`}>
                <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 p-6 md:grid-cols-2">
                    {/* Left: visual */}
                    <div className="mt-32 hidden relative  md:block h-[580px]">
                        <Image
                            src="https://my.messagemind.ai/signup-sl-en-2.png"
                            alt="MessageMind Support Illustration"
                            width={520}
                            height={600}
                            className=" h-full absolute lg:left-28"
                            priority
                        />
                    </div>

                    {/* Right: form */}
                    <div className="flex items-center justify-center px-6 py-10 sm:px-10 h-full">
                        <div className="w-full max-w-[480px]">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create Account
                            </h1>
                            <p className="mt-2 text-sm text-slate-600">
                                You’re just a few steps away! Sign up and unlock 24/7 customer
                                support with MessageMind.
                            </p>

                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="mt-4 space-y-3"
                            >
                                {/* Name row */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <input
                                            placeholder="First Name*"
                                            className="w-full rounded-2xl border border-pink-400/60 px-4 py-1.5 placeholder-slate-400 focus:ring-2 focus:ring-pink-400/50"
                                            {...register("firstName", {
                                                required: "First name is required",
                                            })}
                                        />
                                        {errors.firstName && (
                                            <p className="text-sm ml-2 text-rose-600">
                                                {errors.firstName.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            placeholder="Last Name*"
                                            className="w-full rounded-2xl border border-pink-400/60 px-4 py-1.5 placeholder-slate-400 focus:ring-2 focus:ring-pink-400/50"
                                            {...register("lastName", {
                                                required: "Last name is required",
                                            })}
                                        />
                                        {errors.lastName && (
                                            <p className="text-sm ml-2 text-rose-600">
                                                {errors.lastName.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Company */}
                                <div>
                                    <input
                                        placeholder="Company Name*"
                                        className="w-full rounded-2xl border border-pink-400/60 px-4 py-1.5 placeholder-slate-400 focus:ring-2 focus:ring-pink-400/50"
                                        {...register("company", {
                                            required: "Company name is required",
                                        })}
                                    />
                                    {errors.company && (
                                        <p className="text-sm ml-2 text-rose-600">
                                            {errors.company.message}
                                        </p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <Controller
                                        name="phone"
                                        control={control}
                                        rules={{ required: "Phone is required" }}
                                        render={({ field: { onChange, value } }) => (
                                            <PhoneInput
                                                country={"us"}
                                                value={value}
                                                onChange={onChange}
                                                enableSearch
                                                containerClass="w-full"
                                                inputClass="!w-full !rounded-2xl !border !border-pink-400/60 !px-4 !py-1.5 !placeholder-slate-400 focus:!ring-2 focus:!ring-pink-400/50"
                                                buttonClass="!border-0 !bg-transparent !px-2"
                                                dropdownClass="!rounded-2xl !shadow-lg !border !border-slate-200"
                                                searchClass="!rounded-md !border !border-slate-300 !px-2 !py-1"
                                            />
                                        )}
                                    />
                                    {errors.phone && (
                                        <p className=" ml-2 text-sm text-rose-600">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email Address*"
                                        className="w-full rounded-2xl border border-pink-400/60 px-4 py-1.5 placeholder-slate-400 focus:ring-2 focus:ring-pink-400/50"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /[^\\s@]+@[^\\s@]+\\.[^\\s@]+/,
                                                message: "Enter a valid email",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="text-sm ml-2 text-rose-600">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Password */}
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Password*"
                                        className="w-full rounded-2xl  border border-pink-400/60 px-4 py-1.5 placeholder-slate-400 focus:ring-2 focus:ring-pink-400/50"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 8,
                                                message: "Must be at least 8 characters",
                                            },
                                        })}
                                    />
                                    {errors.password && (
                                        <p className="text-sm ml-2 text-rose-600">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                {/* Confirm Password */}
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Confirm Password*"
                                        className="w-full rounded-2xl border border-pink-400/60 px-4 py-1.5 placeholder-slate-400 focus:ring-2 focus:ring-pink-400/50"
                                        {...register("confirmPassword", {
                                            required: "Please confirm your password",
                                            validate: (val) =>
                                                val === passwordValue || "Passwords must match",
                                        })}
                                    />
                                    {errors.confirmPassword && (
                                        <p className="text-sm ml-2 text-rose-600">
                                            {errors.confirmPassword.message}
                                        </p>
                                    )}
                                </div>

                                {/* Terms */}
                                <div className="flex items-start gap-3 pt-1">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        className="mt-1 h-4 w-4 rounded border border-pink-400/60 text-[#EA4B98] focus:ring-[#EA4B98]"
                                        {...register("terms", {
                                            required: "You must accept Terms & Privacy",
                                        })}
                                    />
                                    <label htmlFor="terms" className="text-sm text-slate-600">
                                        By signing up, you agree to our{" "}
                                        <Link
                                            href="/terms"
                                            className="font-medium text-[#EA4B98] hover:underline"
                                        >
                                            Terms
                                        </Link>{" "}
                                        and our{" "}
                                        <Link
                                            href="/privacy"
                                            className="font-medium text-[#EA4B98] hover:underline"
                                        >
                                            Privacy Policy
                                        </Link>
                                        .
                                    </label>
                                </div>
                                {errors.terms && (
                                    <p className="-mt-1 ml-2 text-sm text-rose-600">
                                        {errors.terms.message}
                                    </p>
                                )}

                                {/* Button */}
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="mt-2 w-full rounded-2xl bg-gradient-to-r from-[#F6722B] via-[#EA4B98] to-[#EA4B98] px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-105 active:brightness-95 disabled:opacity-50"
                                >
                                    {submitting ? "Creating..." : "Create Account"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

