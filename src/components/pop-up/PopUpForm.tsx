"use client";
import { useWebContext } from "@/context-api/WebContext";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import WhatsappForm from "../forms/WhatsappForm";

const PopUpForm = () => {
  const { isOpenFormPopUp, setIsOpenFormPopUp, setFormVilla } = useWebContext();
  const [formKey, setFormKey] = useState(0);
  const [wasOpen, setWasOpen] = useState(isOpenFormPopUp);

  // Remount the form each time the popup opens so nothing carries over
  if (isOpenFormPopUp !== wasOpen) {
    setWasOpen(isOpenFormPopUp);
    if (isOpenFormPopUp) setFormKey((k) => k + 1);
  }

  const handleClose = () => {
    setIsOpenFormPopUp(false);
    setFormVilla?.("");
  };

  return (
    <section
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm ${isOpenFormPopUp ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <div className="max-w-md w-full p-4 bg-white relative rounded-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-2xl text-primary"
        >
          <MdClose />
        </button>
        <div className="max-md:overflow-y-scroll hide-scroll mt-6">
          <WhatsappForm key={formKey} gridView />
        </div>
      </div>
    </section>
  );
};

export default PopUpForm;