import { getServerSession } from "next-auth";

const DashBoardPage = async () => {
  const session = await getServerSession();

  return (
    <section className="text-white w-[90%] max-md:w-[98%] mx-auto p-6">
      <h2 className="text-3xl">
        Welcome Back, <span className="italic">{session?.user?.name}</span>
      </h2>
    </section>
  );
};

export default DashBoardPage;
