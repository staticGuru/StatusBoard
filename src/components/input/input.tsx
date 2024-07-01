import React from "react";

type InputProps = {
  type: string;
  name: string;
  value?: string;
  shadow?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export function Input({
  type,
  name,
  value = "",
  placeholder = "",
  onChange = () => {},
  shadow = false,
}: InputProps) {
  return <div>Input</div>;
}
