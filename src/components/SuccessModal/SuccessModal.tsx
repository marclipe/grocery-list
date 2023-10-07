import React from "react";

interface SuccessModalProps {
  title: string;
  content: string;
  contentButton: {
    title: string;
    onClick: () => void;
  };
  onClose: () => void;
}

export function SuccessModal({
  title,
  content,
  contentButton,
  onClose,
}: SuccessModalProps) {
  return (
    <div className="success-modal">
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={contentButton.onClick}>{contentButton.title}</button>
    </div>
  );
}
