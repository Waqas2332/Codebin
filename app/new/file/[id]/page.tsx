"use client";
import Menu from "@/components/Menu";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "react-toastify";
import { IoMdArrowBack } from "react-icons/io";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page({ params }: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("");
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/api/document/${params.id}`);
        setValue(response.data.value);
        setLanguage(response.data.programmingLanguage);
      } catch (error: any) {
        if (error.response.status === 404) {
          toast.error("Document doesn't exists");
          return;
        }
        // TODO has to made and replace with error page
        toast.error("Couldn't Fetch Document.Try again later");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  function handleBtnClick() {
    if (session) {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="pt-8">
          <button
            onClick={handleBtnClick}
            className="ms-8  btn btn-outline w-28 text-white"
          >
            <IoMdArrowBack className="mr-3" /> Go Back
          </button>
          <div className="wrapper">
            <pre>
              <code id="code-display">
                <SyntaxHighlighter
                  showLineNumbers
                  style={dracula}
                  language={language}
                >
                  {value}
                </SyntaxHighlighter>
              </code>
            </pre>
          </div>
        </div>
      )}
      <Menu
        mode="file"
        onSave={() => {
          toast.info("Edit for Saving the file");
        }}
      />
    </>
  );
}
