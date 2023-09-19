import './styles.scss'
import imgCart from '../../assets/icons/cart.png'

export function Home() {
  return (
    <main className='home-container'>
      <h1>Your shopping Lists</h1>
      <img src={imgCart} alt="" />
      <p>
        You have not added any shopping lists <br /> Tap the button below to create one
        now
      </p>
      <button><strong>+</strong> Create</button>
    </main>
  );
}