import Nav from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <Nav />
      <main className=" main-background text-white flex flex-col justify-center items-center  min-h-screen">
        <div className="w-[70%] flex flex-col justify-center items-center gap-3">
          <h2 className="text-3xl font-mono text-center ">
            Store, Share, Inspire: Your Code Hub
          </h2>
          <p className="font-mono text-center text-sm">
            Unlock the Power of Sharing Code! CodeBin is your dynamic hub to
            store, showcase, and collaborate on code snippets. Effortlessly save
            your code, generate instant shareable links, and immerse yourself in
            a creative coding community. Spark inspiration, foster
            collaboration, and unleash your coding prowess, all in one stylish,
            intuitive platform.
          </p>
          <Link className="btn w-32 font-mono" href="/new/file">
            Go to Editor
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
