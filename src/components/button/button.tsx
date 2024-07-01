import { LucideIcon } from "lucide-react";
import React from "react";

type CustomButtonProps = {
  onClick?: (() => void) | undefined;
  label: string;
  fullWidth?: boolean;
  bgLight?: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  disabled?: boolean;
  icon?: LucideIcon;
};
export function Button({
  onClick,
  label,
  fullWidth = false,
  variant = "default",
  bgLight = false,
  disabled = false,
  icon: Icon,
}: CustomButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
