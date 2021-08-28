import React, {Fragment} from 'react';

const Login = () => {
  return (
      <Fragment>
        <div className="login-section">
          <div className="login-content">
            <div className="login-content-text-group">
              <h1>Sosyal Ağ</h1>
              <p>
                Sosyal Ağ tanıdıklarınla iletişim kurmanı ve hayatında olup bitenleri paylaşmanı sağlar.
              </p>
            </div>
            <div className="card">
              <a className="card-span">Ben sadece test kullanıcısıyım. Lütfen beni anasayfaya yönlendir.</a>
              <form className="card-form-group">
                <input type="text" className="card-input" placeholder="E-posta veya Telefon Numarası"/>
                <input type="password" className="card-input" placeholder="Şifre"/>
              </form>
                <button type="submit" className="card-login">Giriş Yap</button>
                <a href="#" className="forgot-password">Şifreni mi Unuttun ?</a>
              <hr style={{backgroundColor:'#207567'}} className="card-hr"/>
              <a href="" className="card-new-acc">Yeni Hesap Oluştur</a>
            </div>
          </div>
        </div>
      </Fragment>
  )
}

export default Login;