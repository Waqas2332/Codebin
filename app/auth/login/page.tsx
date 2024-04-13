"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type LoginFormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const session = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data); // Handle form submission here
  };

  const handleSignIn = async (provider: string) => {
    await signIn(provider, {
      redirect: false,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-1/2">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit" className="w-full btn-primary ">
            Login
          </button>
        </form>
        {/* TODO add OR markup */}
        <div className="mt-8 gap-2 flex justify-between items-center">
          <button
            onClick={() => handleSignIn("github")}
            className="w-1/2 flex justify-center items-center border py-3 rounded"
          >
            <FaGithub size={28} />
          </button>
          <button
            onClick={() => handleSignIn("google")}
            className="w-1/2 border py-3 rounded flex justify-center items-center"
          >
            <FcGoogle size={28} />
          </button>
        </div>
        <p className="mt-3 text-center text-sm">
          <Link href="/auth/register">
            Don't have an account?{" "}
            <span className="italic text-bgPrimary">Register Now</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
