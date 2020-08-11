import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import LogoSrc from "../images/logo.svg"
const Logo = () => <><img style={{marginRight: '8px'}} src={LogoSrc} /></>


const Header = ({ siteTitle }) => (
  <header>
    <div className="container"> 
      <div className="header">
        <div className="header__icon">
          <a href="./index.html">
            <svg width="63" height="39" className="img img--header" viewBox="0 0 63 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.82098 18.5764C8.94196 23.1616 16.7962 29.7809 28.8069 32.694C20.1084 28.1196 -5.63457 15.4186 1.63731 0.0478516C10.4587 16.4681 32.085 36.0655 41.2171 35.1811C38.71 36.3212 35.3693 37.358 32.0868 37.9871C28.6068 38.6541 25.1735 38.7722 22.9136 38.621C20.0368 38.4291 17.2033 37.6756 16.7097 36.3261C20.5996 37.2098 26.9762 38.0818 30.9848 35.9711C28.2774 36.4284 9.1478 35.5015 8.26348 29.7913C12.3115 31.2224 22.2241 34.9253 29.3496 34.6963C20.1649 32.3555 3.03689 28.6375 1.82098 18.5764Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M56.7961 23.2685C57.3279 22.5851 57.7536 22.0738 58.0939 21.5933C60.066 18.808 61.6074 15.8007 62.952 12.8469C51.918 24.0607 38.3296 30.4112 30.4113 30.2648C32.3528 32.0521 38.2612 34.7934 41.3478 34.4604C44.3981 34.1321 47.5368 31.8259 49.9729 29.9754C52.6254 27.9608 54.9588 25.6293 56.7961 23.2685Z" fill="white"/>
              </svg>
              
          </a>
        </div>
        <div className="header__label">
          <span className="text text--label">
              {siteTitle}
          </span>
        </div>
        <div className="header__menu">
          <div className="header__link">
            <a href="./about.html" className="link link--header_top">Our audience</a>
          </div>
          <div className="header__link">
            <a href="./sale.html" className="link link--header_top">Catalog</a>
          </div>
          <div className="header__link">
            <a href="" className="link link--header_top">About&nbsp;us</a>
          </div>
        </div>
        <div className="header__phone">
          <a href="tel:+79000000000" className="link link--header_phone">+7 (900) 000-00-00</a>
        </div>
        <div className="header__button">
          <a className="button button--header" href='./lk.html'>
            <span className="text">Start lecture</span>
          </a>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
