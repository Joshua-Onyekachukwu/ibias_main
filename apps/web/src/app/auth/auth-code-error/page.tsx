"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AuthCodeErrorPage() {
    return (
        <div className="auth-main-content bg-white dark:bg-[#0a0e19] py-[60px] md:py-[80px] lg:py-[135px] min-h-screen flex items-center justify-center">
            <div className="mx-auto px-[12.5px] md:max-w-[720px] lg:max-w-[960px] text-center">
                <Image
                    src="/images/error.png"
                    alt="error-image"
                    className="inline-block mb-[25px]"
                    width={400}
                    height={400}
                />
                <h1 className="!font-semibold !text-[28px] md:!text-3xl lg:!text-4xl !mb-[15px]">
                    Authentication Error
                </h1>
                <p className="font-medium lg:text-md text-[#445164] dark:text-gray-400 mb-[30px] max-w-[600px] mx-auto">
                    The authentication code provided is invalid or has expired. This often happens if you use an outdated reset link or if the verification process failed.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-[15px]">
                    <Link
                        href="/auth/signin"
                        className="md:text-md inline-block py-[12px] px-[30px] text-white bg-primary-500 rounded-md font-medium hover:bg-primary-600 transition-all w-full sm:w-auto"
                    >
                        Try Signing In Again
                    </Link>
                    <Link
                        href="/"
                        className="md:text-md inline-block py-[12px] px-[30px] text-primary-500 border border-primary-500 rounded-md font-medium hover:bg-primary-50 transition-all w-full sm:w-auto"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
