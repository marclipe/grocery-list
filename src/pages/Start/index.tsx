import { Link } from 'react-router-dom';
import imgGrocery from '../../assets/images/grocery-photo.jpeg'
import imageApp from '../../assets/images/shopping_app.svg'
import './styles.scss'

export function Start() {
  return (
    <main>
      <section className="column-container">
        <div className="content-section">
          <h1>Grocery List</h1>
          <img src={imageApp} alt="" />
          <h3>Shopping Lists</h3>
          <p>...made easy and convenient</p>
          <Link to="/"><button>Start using GroList</button></Link>
        </div>
        <div className="image-section">
          <img src={imgGrocery} alt="" />
        </div>
      </section>
    </main>
  );
}