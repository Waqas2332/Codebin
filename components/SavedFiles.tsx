"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { FaRegStar } from "react-icons/fa";
import { PROGRAMMING_LANGUAGES } from "@/utils/data";

const SavedFiles = () => {
  const [files, setFiles] = useState<any>([]);
  const [error, setError] = useState("");
  const {
    data: session,
    status,
  }: { data: any; status: "authenticated" | "loading" | "unauthenticated" } =
    useSession();

  useEffect(() => {
    const fetchSavedFiles = async () => {
      if (status !== "loading") {
        setError("");
        try {
          const response = await axios.get(
            `/api/document/user/${session.user.id}`
          );
          if (response.data.ok) {
            setFiles(response.data.data);
            return;
          }
          setError("Something Went Wrong");
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchSavedFiles();
  }, [status]);

  if (status === "unauthenticated" && error) {
    return <div>Something Went Wrong!</div>;
  }

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  const visibleFiles = files.slice(0, 4);

  return (
    <>
      <h2 className="text-3xl font-semibold">Your Files</h2>
      <div className="w-full mt-4 grid md:grid-cols-2 grid-cols-1 gap-4">
        {visibleFiles.map((file: any) => (
          <div
            key={file._id}
            className="bg-[#282A36]  px-6 py-3 rounded-xl leading-none cursor-pointer"
          >
            <h2 className="flex justify-between">
              <span className="italic">{file.description}</span>
              <span className="flex gap-1">
                <FaRegStar className="cursor-pointer" /> {0}
              </span>
            </h2>
            <div className="flex gap-1 mt-4">
              <img
                className="w-6"
                src={
                  PROGRAMMING_LANGUAGES.find(
                    (lang) => lang.language === file.programmingLanguage
                  )?.image?.src
                }
                alt=""
              />
              <p>
                {
                  PROGRAMMING_LANGUAGES.find(
                    (lang) => lang.language === file.programmingLanguage
                  )?.name
                }
              </p>
            </div>
          </div>
        ))}
      </div>

      {files.length > 4 && (
        <div className="w-full flex justify-center items-center mt-4">
          <button className="btn w-32 scale">View All</button>
        </div>
      )}
    </>
  );
};

export default SavedFiles;
