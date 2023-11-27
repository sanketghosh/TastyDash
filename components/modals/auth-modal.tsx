"use client";

import { useCallback, useState } from "react";
import Modal from "./modal";
import useAuthModal from "@/hooks/useAuthModal";

export default function AuthModal() {
  const authModal = useAuthModal();

  /* form variant type */
  type Variant = "LOGIN" | "REGISTER";

  const [variant, setVariant] = useState<Variant>("REGISTER");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /* useCallback to toggle the variant */
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  return (
    <Modal
      title="TastyDash"
      onSubmit={() => {}}
      isModalOpen={authModal.isOpen}
      onModalClose={authModal.onClose}
    />
  );
}
