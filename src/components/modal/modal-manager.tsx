"use client";
import { FC, ReactNode } from "react";
import { MODAL_COMPONENTS } from "./modal-components";
import { useModalStore } from "./modal-store";
import { ResponsiveModal } from "./responsive.modal";

interface BaseModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const BaseModal: FC<BaseModalProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <ResponsiveModal open={!!isOpen} onOpenChange={setIsOpen}>
      {children}
    </ResponsiveModal>
  );
};

export const ModalManager: FC = () => {
  const { activeModal, isOpen, setIsOpen } = useModalStore();

  if (!activeModal?.component) return null;

  const ModalComponent = MODAL_COMPONENTS[activeModal.component];
  if (!ModalComponent) {
    console.warn(`Modal component "${activeModal.component}" not found`);
    return null;
  }

  return (
    <BaseModal isOpen={!!isOpen} setIsOpen={setIsOpen}>
      <ModalComponent {...activeModal.props} />
    </BaseModal>
  );
};
