import SavedFiles from "@/components/SavedFiles";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashBoardPage = async () => {
  const session: any = await getServerSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <section className="w-full">
      <div>{/* TODO implement search */}</div>
      <SavedFiles />
    </section>
  );
};

export default DashBoardPage;
