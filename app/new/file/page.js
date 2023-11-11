"use client";
import Menu from "@/components/Menu";
import axios from "axios";
import { useRef } from "react";
export default function page() {
  const inputRef = useRef();
  async function handleSave() {
    try {
      const response = await axios.post("/api/document", {
        value: inputRef.current.value,
      });
      console.log(response);
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
