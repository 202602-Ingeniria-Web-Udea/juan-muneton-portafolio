"use client";

import type { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({
  isOpen,
  title,
  children,
  onClose,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            <X size={22} />
          </button>
        </div>

        <div className="text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
}