import React from 'react';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
        <div className="login-section">
          <div className="login-content">
            <div className="login-content-text-group">
              <h1>Sosyal Ağ</h1>
              <p>
                Sosyal Ağ tanıdıklarınla iletişim kurmanı ve hayatında olup bitenleri paylaşmanı sağlar.
              </p>
            </div>
            <div className="card">
              <div className="card-span">
                <p>Ben sadece test kullanıcısıyım. Lütfen beni anasayfaya <Link to="/home" className="login-redirect-to-home">yönlendir</Link>.</p>

              </div>
              <form className="card-form-group">
                <input type="text" className="card-input" autoFocus="1" placeholder="E-posta veya Telefon Numarası"/>
                <input type="password" className="card-input" placeholder="Şifre"/>
              </form>
                <button type="submit" className="card-login">Giriş Yap</button>
                <Link to="/forgot-password" className="forgot-password">Şifreni mi Unuttun ?</Link>
              <hr style={{backgroundColor:'#207567'}} className="card-hr"/>
              <Link to="/sign-up" className="card-new-acc">Yeni Hesap Oluştur</Link>
            </div>
          </div>

          <div className="login-footer">
            <Footer/>
          </div>
        </div>
  )
}

export default Login;