import './styles.scss'
import imgCart from '../../assets/images/grocery-image.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export function Login() {
  const formSchema = z.object({
    email: z.string().email("Email inválido").min(1, "O email é obrigatório"),
    password: z
      .string()
      .min(1, "A senha é obrigatória!")
      .min(8, "A senha deve ter mais de 8 caracteres"),
  });   

  type FormSchemaType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      // await enviar dados para backend
      console.log(data);
      navigate('/')
    } catch(error) {
      console.error('Erro ao enviar formulário!', error)
    }
  };

  return (
    <main className="section-container">
      <section className="form-section">
        <form /*autoComplete='off'*/ onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <div>
            <label htmlFor="iemail">Email: </label>
            <input
              type="email"
              id="iemail"
              placeholder="email"
              {...register("email")}
            />
            {
              errors.email && (
                <span className='errors-message'>
                  {errors.email?.message}
                </span>    
              )
            }
          </div>
          <div>
            <label htmlFor="ipassword">Senha: </label>
            <input
              type="password"
              id="ipassword"
              placeholder="••••••••"
              {...register("password")}
            />
            {
              errors.password && (
                <span className="errors-message">
                  {errors.password?.message}
                </span>
              )
            }
          </div>
          <div className="forgot-password">
            <Link to="/">
              <p>Esqueci senha</p>
            </Link>
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Entrar
            </button>
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