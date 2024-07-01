import { UniqueIdentifier } from "@dnd-kit/core";

export type ContainerType = {
  id: UniqueIdentifier;
  title: string;
  items: ItemType[];
};

export type ItemType = {
  id: UniqueIdentifier;
  title: string;
};
