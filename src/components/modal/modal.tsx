import React from "react";

interface ModalProps {
  showModal: boolean;
  containerClasses?: string;
  children: React.ReactNode;
  setShowModal: (value: boolean) => void;
}
export function Modal({
  children,
  showModal,
  setShowModal,
  containerClasses,
}: ModalProps) {
  return <div>Modal</div>;
}
