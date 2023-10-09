import { useContext } from "react"
import { ItemContext } from "../../context/contextItem"
import { ListItem } from "../../@types/listItem";

interface ItemProps {
  item: ListItem;
}

export function Item({ item }: ItemProps) {
  const { dispatchUserEvent } = useContext(ItemContext)

  const handleRemoveItem = () => {
    dispatchUserEvent({
      type: "REMOVE_ITEM", 
      payload: { itemId: item.id }
    });
  } 

  return (
    <div className="item">
      <h3>{item.name}</h3>
      <h4>{item.price}</h4>
      <div>
        <img src={item.image} alt="" />
      </div>

      <button onClick={handleRemoveItem}>Delete item</button>
    </div>
  )
}