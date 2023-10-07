import { useContext } from "react"
import { ItemContext } from "../../context/contextItem"

export function Item() {
  const { dispatchUserEvent } = useContext(ItemContext)

  const handleRemoveItem = () => {
    dispatchUserEvent('REMOVE_ITEM', {itemId: item.id});
  } 

  return (
    <div className="item">
      <h3>{item.name}</h3>
      <h4>{Item.price}</h4>
      <div>
        <img src={Item.image} alt="" />
      </div>

      <button onClick={handle}>Delete item</button>
    </div>
  )
}