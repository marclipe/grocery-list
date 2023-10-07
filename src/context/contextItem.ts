import { Dispatch, createContext } from "react";

interface ListItem {
  id: number;
}

type ActionType = "ADD_ITEM" | "REMOVE_ITEM";

interface ItemContextType {
  items: ListItem[];
  dispatchUserEvent: Dispatch<{ type: ActionType; payload: any }>;
}

export const ItemContext = createContext<ItemContextType>({
  items: [],
  dispatchUserEvent: () => {}
});