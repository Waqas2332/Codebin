"use client";
import Menu from "@/components/Menu";
import axios from "axios";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const inputRef = useRef();
  async function handleSave() {
    try {
      const response = await axios.post("/api/document", {
        value: inputRef.current.value,
      });
      if (response.status === 201) {
        router.push(`/new/file/${response.data.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form>
        <div className="wrapper">
          <div className="line-numbers">&gt;</div>
          <textarea autoFocus ref={inputRef} />
        </div>
      </form>
      <Menu onSave={handleSave} />
    </>
  );
}
