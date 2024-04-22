"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";

type RegisterFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  c_password: string;
};

const RegisterPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (res?.ok) {
        router.push("/dashboard");
      }
      if (!res?.ok) {
        toast.error("Invalid Credentials");
      }
    } catch (error: any) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-1/2 mt-20 mb-20">
        <h2 className="text-xl font-bold mb-4">Regsiter</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: true })}
              className="w-full focus:outline-bgPrimary mt-1 p-2 border rounded"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                First Name is required
              </span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name
            </label>
            <input
              type="email"
              id="lastName"
              {...register("lastName", { required: true })}
              className="w-full focus:outline-bgPrimary mt-1 p-2 border rounded"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                Last Name is required
              </span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="w-full focus:outline-bgPrimary mt-1 p-2 border rounded"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className="w-full mt-1 p-2 border rounded focus:outline-bgPrimary"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">Password is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="c_password" className="block text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="c_password"
              {...register("c_password", { required: true })}
              className="w-full mt-1 p-2 border rounded focus:outline-bgPrimary"
            />
            {errors.c_password && (
              <span className="text-red-500 text-sm">Password is required</span>
            )}
          </div>
          <button
            className="w-full btn-primary disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : "Register"}
          </button>
        </form>

        <p className="mt-3 text-center text-sm">
          <Link href="/auth/login">
            Already have an account?{" "}
            <span className="italic text-bgPrimary">Login Now</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
