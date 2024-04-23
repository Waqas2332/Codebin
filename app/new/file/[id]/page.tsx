"use client";
import Menu from "@/components/Menu";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "react-toastify";

export default function page({ params }: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("");
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

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="wrapper">
          <div className="line-numbers">
            {value.split("\n").map((_, index) => (
              <div key={index}>{index + 1}</div>
            ))}
          </div>
          <pre>
            <code id="code-display">
              <SyntaxHighlighter style={dracula} language={language}>
                {value}
              </SyntaxHighlighter>
            </code>
          </pre>
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
