import imgGroceryAuth from '../../assets/images/grrocey-auth.jpg'
import './styles.scss'

export function Auth() {
  return (
    <main className="container-auth">
      <section className="content-section">
        <div className="container-form">
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
            </div>
            <div>
              <label htmlFor="iconfirm-password">Confirmar Senha</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="••••••••"
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