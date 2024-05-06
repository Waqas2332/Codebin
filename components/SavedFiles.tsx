"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

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

  return (
    <div>
      {files.map((file) => (
        <div key={file._id}>{file.description}</div>
      ))}
    </div>
  );
};

export default SavedFiles;
