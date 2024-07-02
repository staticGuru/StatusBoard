import { lazy } from "react";

export * from "./button/button";
export * from "./input/input";
export * from "./item/item";
export * from "./container/container";

export const Modal = lazy(() => import("./modal/modal"));
