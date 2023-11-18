import { Header } from '../../components/Header';
import { ProductsTable } from '../../components/ProductsTable';
import './styles.scss'
// import imgCart from '../../assets/icons/cart.png'
// import { ItemContext } from '../../context/contextItem';
// import { useState } from 'react';
// import { ItemList } from '../../components/ItemList/ItemList';
// import { AddItem } from '../../components/AddItem/AddItem';

interface ListItem {
  id: number;
}

export function Home() {
  // const [items, setItems] = useState<ListItem[]>([]);

  // type ActionType = "ADD_ITEM" | "REMOVE_ITEM";

  // interface Action {
  //   type: ActionType;
  //   payload?: { newItem?: ListItem; itemId?: number };
  // }

  // const dispatchUserEvent = (
  //   action: Action
  // ) => {
  //   switch (action.type) {
  //     case "ADD_ITEM":
  //       if (action.payload?.newItem) {
  //         setItems([...items, action.payload.newItem]);
  //       }
  //       return;
  //     case "REMOVE_ITEM":
  //       if (action.payload?.itemId) {
  //         setItems(items.filter((item) => item.id !== action.payload?.itemId));
  //       }
  //       return;
  //     default:
  //       return;
  //   }
  // };

  return (

      <section className='home__container '>
        <Header />
        <ProductsTable />
      </section>

    // <ItemContext.Provider value={{ items, dispatchUserEvent }}>
    //   <main className='home-container'>
    //     <h1>Your shopping Lists</h1>
    //     {/* <img src={imgCart} alt="" />
    //     <p>
    //       You have not added any shopping lists <br /> Tap the button below to create one
    //       now
    //     </p>
    //     <button><strong>+</strong> Create</button> */}
    //     <ItemList/>
    //     <AddItem/>
    //   </main>
    // </ItemContext.Provider>
  );
}