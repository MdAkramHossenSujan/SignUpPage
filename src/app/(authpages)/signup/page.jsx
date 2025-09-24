"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Background from "@/components/Background";
import { Input } from "@/components/ui/input";
import './signup.module.css'
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
            <div>
                <Background />
            </div>
            <div
                className={`min-h-screen font-poppins w-full bg-white text-slate-900 ${poppins.className}`}
            >
                <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 md:p-6 md:grid-cols-2">
                    {/* Left: visual */}
                    <div className="xl:mt-20 lg:mt-32 md:mt-52 hidden relative md:block h-[480px] lg:h-[550px] xl:h-[600px] lg:w-[420px] xl:w-full md:w-[360px]">
                        <Image
                            src="https://my.messagemind.ai/signup-sl-en-2.png"
                            alt="MessageMind Support Illustration"
                            width={520}
                            height={600}
                            className="h-full z-20 absolute lg:left-28 md:left-10"
                            priority
                        />
                    </div>

                    {/* Right: form */}
                    <div className="flex relative items-center justify-center px-6 py-10 sm:px-10 h-full">
                        <div className="w-full max-w-[480px]">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create Account
                            </h1>
                            <div className="absolute top-12 right-12 h-[120px] border-l-1 border-dashed opacity-20"></div>
                            <div>
                                <Image
                                    src="/logo.webp"   // path relative to public/
                                    alt="Logo"
                                    width={120}
                                    height={80}
                                    className="absolute top-28 right-14"
                                />
                            </div>
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
                                        <Input
                                            placeholder="First Name*"
                                            {...register("firstName", {
                                                required: "First name is required",
                                            })}
                                        />
                                        {errors.firstName && (
                                            <p className="text-xs ml-2 text-rose-600 mt-1">
                                                {errors.firstName.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <Input
                                            placeholder="Last Name*"
                                            {...register("lastName", {
                                                required: "Last name is required",
                                            })}
                                        />
                                        {errors.lastName && (
                                            <p className="text-xs ml-2 text-rose-600 mt-1">
                                                {errors.lastName.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Company */}
                                <div>
                                    <Input
                                        placeholder="Company Name*"
                                        {...register("company", {
                                            required: "Company name is required",
                                        })}
                                    />
                                    {errors.company && (
                                        <p className="text-xs ml-2 text-rose-600 mt-1">
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
                                                dropdownClass='dropdown-container transition duration-300 ease-in-out'
                                                containerClass="w-full"
                                                inputClass="!w-full !rounded-3xl !border !border-pink-400/60 !px-12 !placeholder-slate-400 focus:!ring-2 focus:!ring-pink-400/50"
                                                containerStyle={{ width: '100%' }}
                                                buttonClass="!border-0 !px-2 !py-2 !bg-transparent"
                                            />
                                        )}
                                    />
                                    {errors.phone && (
                                        <p className="ml-2 text-xs text-rose-600 mt-1">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Email Address*"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /[^\\s@]+@[^\\s@]+\\.[^\\s@]+/,
                                                message: "Enter a valid email",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="text-xs ml-2 text-rose-600 mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Password */}
                                <div>
                                    <Input
                                        type="password"
                                        placeholder="Password*"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 8,
                                                message: "Must be at least 8 characters",
                                            },
                                        })}
                                    />
                                    {errors.password && (
                                        <p className="text-xs ml-2 text-rose-600 mt-1">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                {/* Confirm Password */}
                                <div>
                                    <Input
                                        type="password"
                                        placeholder="Confirm Password*"
                                        {...register("confirmPassword", {
                                            required: "Please confirm your password",
                                            validate: (val) =>
                                                val === passwordValue || "Passwords must match",
                                        })}
                                    />
                                    {errors.confirmPassword && (
                                        <p className="text-xs ml-2 text-rose-600 mt-1">
                                            {errors.confirmPassword.message}
                                        </p>
                                    )}
                                </div>

                                {/* Terms */}
                                <div className="flex items-start gap-1 pt-1">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        className="mt-0.5 h-3 w-3 rounded border border-pink-400/60 text-[#EA4B98] focus:ring-[#EA4B98]"
                                    />
                                    <label htmlFor="terms" className="text-xs text-slate-600">
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

                                {/* Button */}
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="mt-1 w-full cursor-pointer rounded-3xl bg-gradient-to-r from-[#F6722B] via-[#EA4B98] to-[#EA4B98] px-6 py-2 font-semibold text-white shadow-lg transition hover:brightness-105 active:brightness-95 disabled:opacity-50"
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


