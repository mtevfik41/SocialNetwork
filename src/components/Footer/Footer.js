import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
      <footer className="footer">
        <div className="language">
          <span><abbr title="Dil">Türkçe</abbr></span>
        </div>
        <hr className="footer-hr"/>
        <div className="redirects">
          <Link to="/sign-up" className="redirects-link"><abbr
              title="Sosyal Ağ'a Kaydol">Kaydol</abbr></Link>
          <Link to="/login" className="redirects-link"><abbr
              title="Sosyal Ağ'a Giriş Yap">Giriş Yap</abbr></Link>
          <Link to="/jobs" className="redirects-link"><abbr
              title="Sosyal Ağ'da İş Fırsatları">İş Fırsatları</abbr></Link>
          <Link to="/services" className="redirects-link"><abbr
              title="Sosyal Ağ'ın Sunduğu Hizmetler">Hizmetler</abbr></Link>
          <Link to="/about-us" className="redirects-link"><abbr
              title="Sosyal Ağ Hakkında">Hakkımızda</abbr></Link>
          <Link to="/careers" className="redirects-link"><abbr
              title="Sosyal Ağ'da Geniş Kariyer Olanakları">Kariyer
            Olanakları</abbr></Link>
          <Link to="/privacy" className="redirects-link"><abbr
              title="Sosyal Ağ'da Gizlilik ve Verilerinizin Saklanması">Gizlilik</abbr></Link>
          <Link to="/cookies" className="redirects-link"><abbr
              title="Sosyal Ağ'ın Kullandığı Çerezler">Çerezler</abbr></Link>
          <Link to="/policies" className="redirects-link"><abbr
              title="Sosyal Ağ'ı Kullanım Koşulları">Koşullar</abbr></Link>
          <Link to="/help-center" className="redirects-link"><abbr
              title="Sosyal Ağ Yardım Merkezini Ziyaret Et">Yardım</abbr></Link>
        </div>
        <div className="brand-tag-footer">
          <span><abbr
              title="Built by Mustafa Tevfik Kadan github.com/mtevfik41">Sosyal Ağ &copy; 2021</abbr></span>
        </div>
      </footer>
  );
};

export default Footer;