"use client";
import Menu from "@/components/Menu";
import axios from "axios";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ModalComponent from "@/components/FormModal";
import { toast } from "react-toastify";

export default function page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  async function handleFormSave(data: {
    description: string;
    programmingLanguage: string;
  }) {
    if (inputRef.current?.value.trim() === "") {
      toast.warning("Please Paste Some Code");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post("/api/document", {
        value: inputRef!.current!.value,
        description: data.description,
        programmingLanguage: data.programmingLanguage.toLowerCase(),
      });
      if (response.status === 201) {
        toast.success("Document Saved Successfully");
        router.push(`/new/file/${response.data.id}`);
      }
    } catch (error: any) {
      if (error.response.status === 403) {
        toast.error("Please Fill All Fields Correctly");
      } else {
        toast.error("Couldn't save file. Try Again Later");
      }
    } finally {
      setIsLoading(false);
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
          <textarea autoFocus ref={inputRef} className="mt-3 text-white" />
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
