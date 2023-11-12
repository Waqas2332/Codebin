import { Dialog } from "@headlessui/react";
import { useState } from "react";

function ModalComponent({ isOpen, setIsOpen, onSave }) {
  const [description, setdescription] = useState("");
  const [programmingLanguage, setProgrammingLanguage] = useState("");

  const handleSubmit = () => {
    onSave({ description, programmingLanguage });
  };
  return (
    <div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="flex rounded-md justify-center items-center fixed top-1/4 left-[50%] transform  -translate-x-1/2 w-1/4 max-md:2/3 max-lg:w-1/2  p-4 bg-white z-10">
          <div className="space-y-4">
            <div className="">
              <label htmlFor="description" className="block font-semibold">
                File Description:
              </label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="">
              <label
                htmlFor="programmingLanguage"
                className="block font-semibold"
              >
                Programming Language:
              </label>
              <input
                type="text"
                id="programmingLanguage"
                value={programmingLanguage}
                onChange={(e) => setProgrammingLanguage(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Submit
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-300 text-black p-2 rounded ml-2"
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
