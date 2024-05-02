"use client";

import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashBoardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status]);

  return (
    <section className="text-white w-[90%] max-md:w-[98%] mx-auto p-6">
      <h2 className="text-3xl">
        Welcome Back, <span className="italic">{session?.user?.name}</span>
      </h2>
    </section>
  );
};

export default DashBoardPage;
