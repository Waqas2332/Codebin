"use client";
import Menu from "@/components/Menu";
import axios from "axios";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ModalComponent from "@/components/FormModal";

export default function page() {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const inputRef = useRef();
  async function handleFormSave(data) {
    try {
      const response = await axios.post("/api/document", {
        value: inputRef.current.value,
        description: data.description,
        programmingLanguage: data.programmingLanguage,
      });
      if (response.status === 201) {
        router.push(`/new/file/${response.data.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
  function handleSave() {
    setModalOpen(true);
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
      <ModalComponent
        isOpen={modalOpen}
        onSave={handleFormSave}
        setIsOpen={setModalOpen}
      />
    </>
  );
}
