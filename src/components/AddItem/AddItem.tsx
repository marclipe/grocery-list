import { useContext, useState } from "react"
import { ItemContext } from "../../context/contextItem"

export const AddItem = () => {
  const { dispatchUserEvent } = useContext(ItemContext);
  const [ name, setName ] = useState(''); 
  const [ price, setPrice ] = useState('');
  const [ image, setImage ] = useState('')

  const handleAddItem = () => {
    const item = { id: Math.random(), name, price, image }; 
    dispatchUserEvent('ADD_ITEM', {newItem: item})
  }

  return (
    <div>
      <h3>Add new Product</h3>
      <div>
        <input
          type="text"
          value={name}
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="name"
        />
      </div>
      <br />
      <div>
        <input
          type="text"
          value={price}
          id="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="name"
        />
      </div>
      <br />
      <div>
        <input
          type="text"
          value={image}
          id="price"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          placeholder="name"
        />
      </div>
      <br />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

