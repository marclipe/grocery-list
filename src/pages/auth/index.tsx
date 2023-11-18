import imgGroceryAuth from '../../assets/images/grrocey-auth.jpg'
import './styles.scss'
<<<<<<< HEAD
=======
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z
  .object({
    username: z.string().min(1, "O nome é obrigatório!").max(100),
    email: z.string().email("Email é inválido").min(1, "O email é obrigatório"),
    password: z
      .string()
      .min(1, "A senha é obrigatória")
      .min(8, "A senha deve ter mais do que 8 caracteres"),
    confirmPassword: z.string().min(1, "A confirmação da senha é obrigatória"),
    terms: z.literal(true, {
      errorMap: () => ({ message: "Você deve aceitar os termos e condições!" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não coincidem!!",
  });
>>>>>>> pages

export function Auth() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  type FormSchemaType = z.infer<typeof formSchema>;

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <main className="container-auth">
      <section className="content-section">
        <div className="container-form">
<<<<<<< HEAD
          <form action="">
            <div>
              <label htmlFor="iusername">Seu Nome</label>
              <input type="text" id="iusername" placeholder="name" />
            </div>
            <div>
              <label htmlFor="iemail">Seu Email</label>
              <input type="email" id="iemail" placeholder="name@email.com" />
            </div>
            <div>
              <label htmlFor="ipassword">Senha</label>
              <input type="password" id="ipassword" placeholder="••••••••" />
=======
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div>
              <label htmlFor="iusername">Seu Nome</label>
              <input
                type="text"
                id="iusername"
                placeholder="name"
                {...register("username")}
              />
              {errors.username && (
                <span className="errors-input">{errors.username?.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="iemail">Seu Email</label>
              <input
                type="email"
                id="iemail"
                placeholder="name@email.com"
                {...register("email")}
              />
              {errors.email && (
                <span className="errors-input">{errors.email?.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="ipassword">Senha</label>
              <input
                type="password"
                id="ipassword"
                placeholder="••••••••"
                {...register("password")}
              />
              {errors.password && (
                <span className="errors-input">{errors.password?.message}</span>
              )}
>>>>>>> pages
            </div>
            <div>
              <label htmlFor="iconfirm-password">Confirmar Senha</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="••••••••"
<<<<<<< HEAD
              />
            </div>
            <div className="container-terms">
              <div>
                <input type="checkbox" id="iterms" />
              </div>
              <div>
                <label htmlFor="iterms">
                  I accept the <a href="#">Terms and Conditions</a>
                </label>
              </div>
            </div>
            <div className='button-container'>
              <button type="submit">Criar conta</button>
=======
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <span className="errors-input">
                  {errors.confirmPassword?.message}
                </span>
              )}
            </div>
            <div className="container-terms">
              <div>
                <input type="checkbox" id="iterms" {...register("terms")} />
              </div>
              <div>
                <label htmlFor="iterms">
                  Eu aceito os <a href="#">Termos e Condições</a>
                </label>
              </div>
            </div>
            {errors.terms && <span className="errors-input">
                {errors.terms?.message}
            </span>}
            <div className="button-container">
              <button type="submit" disabled={isSubmitting}>
                Criar conta
              </button>
>>>>>>> pages
            </div>
          </form>
        </div>
      </section>
      <section className="image-section">
        <img src={imgGroceryAuth} alt="" />
      </section>
    </main>
  );
}