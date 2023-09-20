import { useState } from 'react'
import './styles.scss'
import imgCart from '../../assets/images/grocery-image.jpg'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formShchema = z.object({
  email: z.string().email("Email inválido").min(1, "O email é obrigatório"),
  password: z
    .string()
    .min(1, "A senha é obrigatória!")
    .min(8, "A senha deve ter mais de 8 caracteres"),
});

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  type FormShemaType = z.infer<typeof formShchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormShemaType>({
    resolver: zodResolver(formShchema),
  });

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
              placeholder="email"
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
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot-password">
            <Link to="/">
              <p>Esqueci senha</p>
            </Link>
          </div>
          <div>
            <button type="submit">Entrar</button>
          </div>
          <div className="link-auth">
            Não possui conta?
            <Link to="/auth">
              <strong>Criar conta</strong>
            </Link>
          </div>
        </form>
      </section>
      <section className="image-section">
        <img src={imgCart} alt="" />
      </section>
    </main>
  );
}