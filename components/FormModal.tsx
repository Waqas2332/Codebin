import { Dialog } from "@headlessui/react";
import { Dispatch, SetStateAction, useState } from "react";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

type ModalComponentProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSave: (data: { description: string; programmingLanguage: string }) => void;
  isLoading: boolean;
};

function ModalComponent({
  isOpen,
  setIsOpen,
  onSave,
  isLoading,
}: ModalComponentProps) {
  const [description, setdescription] = useState("");
  const [programmingLanguage, setProgrammingLanguage] = useState("");

  const handleSubmit = () => {
    if (description.trim() === "") {
      toast.error("Please Enter File Description");
      return;
    }
    if (programmingLanguage.trim() === "") {
      toast.error("Please Specify Programming Language");
      return;
    }

    onSave({ description, programmingLanguage });
  };
  return (
    <div className="">
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="flex rounded-md justify-center items-center fixed top-1/4 left-[50%] transform  -translate-x-1/2 w-1/3 py-8 max-md:2/3 max-lg:w-1/2 bg-white z-10">
          <div className="space-y-4 w-[90%] mx-auto">
            <div className="space-y-2">
              <label htmlFor="description" className="block font-semibold">
                File Description:
              </label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                className="border border-gray-300 w-full p-2 rounded focus:outline-bgPrimary"
              />
            </div>
            <div className="space-y-2">
              {/* TODO Have to made a dropdown for selective programming language */}
              <label
                htmlFor="programmingLanguage"
                className="block font-semibold"
              >
                Programming Language
                <small className="block">
                  (Enter Full Name eg javascript , python)
                </small>
              </label>
              <input
                type="text"
                id="programmingLanguage"
                value={programmingLanguage}
                onChange={(e) => setProgrammingLanguage(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded  focus:outline-bgPrimary"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="btn-primary w-20 p-2 rounded"
              >
                {isLoading ? <Spinner /> : "Save"}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-300 text-black p-2 w-20 rounded-full ml-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default ModalComponent;
