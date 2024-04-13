"use client";
import Menu from "@/components/Menu";
import axios from "axios";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ModalComponent from "@/components/FormModal";

export default function page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  async function handleFormSave(data: {
    description: string;
    programmingLanguage: string;
  }) {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/document", {
        value: inputRef!.current!.value,
        description: data.description,
        programmingLanguage: data.programmingLanguage.toLowerCase(),
      });
      if (response.status === 201) {
        setIsLoading(false);
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
          <textarea autoFocus ref={inputRef} className="mt-3" />
        </div>
      </form>
      <Menu onSave={handleSave} />
      <ModalComponent
        isLoading={isLoading}
        isOpen={modalOpen}
        onSave={handleFormSave}
        setIsOpen={setModalOpen}
      />
    </>
  );
}
