import { useContext } from "react"
import { ItemContext } from "../../context/contextItem"
import { Item } from "../Item/Item"


export const ItemList = () => {
  const { items } = useContext(ItemContext)

  return (
    <div>
      <h3>Lists Available</h3>
      {items.map(item => 
        <Item key={item.id} item={item}></Item>
      )}
    </div>
  )
}