import { useState } from 'react'
import './styles.scss'
import imgCart from '../../assets/images/grocery-image.jpg'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <main className='section-container'>
      <section className='form-section'>
        <form onSubmit={HandleSubmit}>
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
          <div>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </section>
      <section className='image-section'>
        <img src={imgCart} alt="" />
      </section>
    </main>
  );
}