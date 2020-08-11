import React from 'react'

const footer = () => {
  return (
    <>
      
  <footer>
    <div className="section section__footer">
      <div className="container">
        <div className="footer">
          <div className="footer__social">
            <div className="footer__logo">
              <img src="./img/logo--footer.svg" alt="logo_footer" className="img img--logo_footer"></img>
            </div>
            <div className="footer__title">
              <p className="title title--footer">firebird</p>
            </div>
            <div className="footer__text">
              <span className="text text--footer">Правовая информация на&nbsp;несколько строк, буквально
                на&nbsp;2-3&nbsp;строчки. Мы&nbsp;говорим о&nbsp;нашей компании и&nbsp;некоторых данных.</span>
            </div>
            <div className="footer__social">
              <div className="footer__icons">
                <div className="footer__icon">
                  <a href="" className="link link--social">
                    <img src="./img/icon--facebook.svg" alt="" className="img img--soc_fb"></img>
                  </a>
                </div>
                <div className="footer__icon">
                  <a href="" className="link link--social">
                    <img src="./img/icon--linkedin.svg" alt="" className="img img--soc_in"></img>
                  </a>
                </div>
                <div className="footer__icon">
                  <a href="" className="link link--social">
                    <img src="./img/icon--mail.svg" alt="" className="img img--soc_mail"></img>
                  </a>
                </div>
                <div className="footer__icon">
                  <a href="" className="link link--social">
                    <img src="./img/icon--instagram.svg" alt="" className="img img--soc_instagram"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__menu">
            <div className="footer__menuTitle">
              <p className="title title--footerMenu">Common</p>
            </div>
            <div className="footer__item">
              <a className="link link--footerMenu">Our audience</a>
            </div>
            <div className="footer__item">
              <a className="link link--footerMenu">Catalog</a>
            </div>
            <div className="footer__item">
              <a className="link link--footerMenu">About&nbsp;us</a>
            </div>
            <div className="footer__item">
              <a className="link link--footerMenu">Blog</a>
            </div>
          </div>
          <div className="footer__contact">
            <div className="footer__menuTitle">
              <p className="title title--footerMenu">Contacts</p>
            </div>
            <div className="footer__item">
              <a href="tel:+78469727282" className="link link--footerMenu link--footer_phone">Tel.: +7 (900) 000&nbsp;&mdash; 00&nbsp;&mdash;
                00</a>
            </div>
            <div className="footer__item">
              <a href="mailto:info@firebird.com" className="link link--footerMenu link--footer_mail">Email: info@firebird.com</a>
            </div>
            <div className="footer__button">
              <a href="" className="button button--transparent">Contact&nbsp;us</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__pic absolute">
        <img src="./img/img--footer.png" alt="img--footer" className="img img--footer"></img>
      </div>
    </div>
  </footer>




    </>
  )
}

export default footer
