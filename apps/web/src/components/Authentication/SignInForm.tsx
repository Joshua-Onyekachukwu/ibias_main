"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from 'react';
import { login, signInWithSocial } from '@/app/auth/actions';

const initialState = {
    error: '',
}

const SignInForm: React.FC = () => {
    const [state, formAction, isPending] = useActionState(login, initialState);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="auth-main-content bg-white dark:bg-[#0a0e19] py-[60px] md:py-[80px] lg:py-[135px]">
                <div className="mx-auto px-[12.5px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1255px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
                        <div className="xl:ltr:-mr-[25px] xl:rtl:-ml-[25px] 2xl:ltr:-mr-[45px] 2xl:rtl:-ml-[45px] rounded-[25px] order-2 lg:order-1">
                            <Image
                                src="/images/sign-in.jpg"
                                alt="sign-in-image"
                                className="rounded-[25px]"
                                width={646}
                                height={804}
                            />
                        </div>

                        <div className="xl:ltr:pl-[90px] xl:rtl:pr-[90px] 2xl:ltr:pl-[120px] 2xl:rtl:pr-[120px] order-1 lg:order-2">
                            <Image
                                src="/images/logo-big.svg"
                                alt="logo"
                                className="inline-block dark:hidden"
                                width={142}
                                height={38}
                            />
                            <Image
                                src="/images/white-logo-big.svg"
                                alt="logo"
                                className="hidden dark:inline-block"
                                width={142}
                                height={38}
                            />

                            <div className="my-[17px] md:my-[25px]">
                                <h1 className="!font-semibold !text-[22px] md:!text-xl lg:!text-2xl !mb-[5px] md:!mb-[7px]">
                                    Welcome back to IBIAS!
                                </h1>
                                <p className="font-medium lg:text-md text-[#445164] dark:text-gray-400">
                                    Sign In with social account or enter your details
                                </p>
                            </div>

                            <div className="flex items-center justify-between mb-[20px] md:mb-[23px] gap-[12px]">
                                <div className="grow">
                                    <button
                                        type="button"
                                        onClick={() => signInWithSocial('google')}
                                        className="block text-center w-full rounded-md transition-all py-[8px] md:py-[10.5px] px-[15px] md:px-[25px] text-black dark:text-white border border-[#D6DAE1] bg-white dark:bg-[#0a0e19] dark:border-[#172036] shadow-sm hover:border-primary-500"
                                    >
                                        <Image
                                            src="/images/icons/google.svg"
                                            className="inline-block"
                                            alt="google"
                                            width={25}
                                            height={25}
                                        />
                                    </button>
                                </div>

                                <div className="grow">
                                    <button
                                        type="button"
                                        onClick={() => signInWithSocial('facebook')}
                                        className="block text-center w-full rounded-md transition-all py-[8px] md:py-[10.5px] px-[15px] md:px-[25px] text-black dark:text-white border border-[#D6DAE1] bg-white dark:bg-[#0a0e19] dark:border-[#172036] shadow-sm hover:border-primary-500"
                                    >
                                        <Image
                                            src="/images/icons/facebook2.svg"
                                            className="inline-block"
                                            alt="facebook"
                                            width={25}
                                            height={25}
                                        />
                                    </button>
                                </div>

                                <div className="grow">
                                    <button
                                        type="button"
                                        onClick={() => signInWithSocial('apple')}
                                        className="block text-center w-full rounded-md transition-all py-[8px] md:py-[10.5px] px-[15px] md:px-[25px] text-black dark:text-white border border-[#D6DAE1] bg-white dark:bg-[#0a0e19] dark:border-[#172036] shadow-sm hover:border-primary-500"
                                    >
                                        <Image
                                            src="/images/icons/apple.svg"
                                            className="inline-block"
                                            alt="apple"
                                            width={25}
                                            height={25}
                                        />
                                    </button>
                                </div>
                            </div>

                            <form action={formAction}>
                                <div className="mb-[15px] relative">
                                    <label className="mb-[10px] md:mb-[12px] text-black dark:text-white font-medium block">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                                        placeholder="example@ibias.ai"
                                        required
                                    />
                                </div>

                                <div className="mb-[15px] relative">
                                    <label className="mb-[10px] md:mb-[12px] text-black dark:text-white font-medium block">
                                        Password
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                                        placeholder="Type password"
                                        required
                                    />
                                    <button
                                        className="absolute text-lg ltr:right-[20px] rtl:left-[20px] bottom-[12px] transition-all hover:text-primary-500"
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <i className={showPassword ? "ri-eye-line" : "ri-eye-off-line"}></i>
                                    </button>
                                </div>

                                <Link
                                    href="/auth/forgot-password"
                                    className="inline-block text-primary-500 transition-all font-semibold hover:underline"
                                >
                                    Forgot Password?
                                </Link>

                                {state?.error && (
                                    <div className="mt-[15px] text-red-500 text-sm bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-3">
                                        {state.error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="md:text-md block w-full text-center transition-all rounded-md font-medium mt-[20px] md:mt-[25px] py-[12px] px-[25px] text-white bg-primary-500 hover:bg-primary-400 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="flex items-center justify-center gap-[5px]">
                                        {isPending ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                                Signing In...
                                            </>
                                        ) : (
                                            <>
                                                <i className="material-symbols-outlined">login</i>
                                                Sign In
                                            </>
                                        )}
                                    </span>
                                </button>

                                <p className="mt-[15px] md:mt-[20px]">
                                    Don't have an account?{" "}
                                    <Link
                                        href="/auth/signup"
                                        className="text-primary-500 transition-all font-semibold hover:underline"
                                    >
                                        Sign Up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignInForm;
