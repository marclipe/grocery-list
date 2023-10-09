import { useContext, useState } from "react"
import { ItemContext } from "../../context/contextItem"

export const AddItem = () => {
  const { dispatchUserEvent } = useContext(ItemContext);
  const [ name, setName ] = useState(''); 
  const [ price, setPrice ] = useState('');
  const [ image, setImage ] = useState('')

  const handleAddItem = () => {
    const item = { id: Math.random(), name, price, image }; 
    dispatchUserEvent({
      type: 'ADD_ITEM', 
      payload: {newItem: item}
    })
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
          placeholder="price"
        />
      </div>
      <br />
      <div>
        <label htmlFor="imageUpload" className="custom-file-upload">
          <span>Carregar Imagem</span>
        </label>
        <input
          type="file"
          accept="image/*"
          id="imageUpload"
          // value={image}
          onChange={(e) => {
            // setImage(e.target.value);
            const selectedImage = e.target.files && e.target.files[0];;

            if(selectedImage) {
              const render = new FileReader()
              render.onload = () => {
                const imageDataURL = render.result as string
                setImage(imageDataURL)
              }; 
              render.readAsDataURL(selectedImage)
            }
          }}
          placeholder="image"
          style={{ display: "none" }}
        />
      </div>
      <br />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

