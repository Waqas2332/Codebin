import SavedFiles from "@/components/SavedFiles";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashBoardPage = async () => {
  const session: any = await getServerSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <section className="text-white w-[90%] max-md:w-[98%] mx-auto p-6">
      <div>{/* TODO implement search */}</div>
      <SavedFiles />
    </section>
  );
};

export default DashBoardPage;
