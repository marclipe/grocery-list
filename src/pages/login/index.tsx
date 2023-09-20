import { useState } from 'react'
import './styles.scss'
import imgCart from '../../assets/images/grocery-image.jpg'
import { Link } from 'react-router-dom'
import { Auth } from '../auth'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <main className="section-container">
      <section className="form-section">
        <form /*autoComplete='off'*/ onSubmit={HandleSubmit}>
          <h2>Login</h2>
          <div>
            <label htmlFor="iemail">Email: </label>
            <input
              type="email"
              value={email}
              id="iemail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="ipassword">Senha: </label>
            <input
              type="password"
              value={password}
              id="ipassword"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link  to="/auth">Não possui conta?</Link>
          <div>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </section>
      <section className="image-section">
        <img src={imgCart} alt="" />
      </section>
    </main>
  );
}