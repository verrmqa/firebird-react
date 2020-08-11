




import React, { Component } from "react";
import Link from "gatsby-link";
import Slider from "react-slick";

export default class sliderBlog extends Component {
  render() {
    const settings = {
      slidesToShow: 2,
      infinite: true,
      variableWidth: true,
      arrows: true,
      dots: true,
    };
    return (
      <>
        <div className="section__title section__title--blog">
          <p className="title title--section title--sectionBlog">Blog</p>
        </div>
        <Slider {...settings} className="blog__slider">

        <div className="blog__item">
          <div className="blog__pic">
            <img src="./img/img--blog.png" alt="img--blog" className="img img--blog"></img>
          </div>
          <div className="blog__box">
            <div className="blog__title">
              <p className="title title--blog">Заголовок статьи</p>
            </div>
            <div className="blog__text">
              <p className="text text--blog">Краткий описательный текст на&nbsp;несколько строк, буквально на&nbsp;2-е
                штучки</p>
            </div>
            <div className="blog__link">
              <Link href="/about" className="link">Читать дальше</Link>
            </div>
          </div>
        </div>
        <div className="blog__item">
          <div className="blog__pic">
            <img src="./img/img--blog.png" alt="img--blog" className="img img--blog"></img>
          </div>
          <div className="blog__box">
            <div className="blog__title">
              <p className="title title--blog">Заголовок статьи</p>
            </div>
            <div className="blog__text">
              <p className="text text--blog">Краткий описательный текст на&nbsp;несколько строк, буквально на&nbsp;2-е
                штучки</p>
            </div>
            <div className="blog__link">
              <Link href="" className="link">Читать дальше</Link>
            </div>
          </div>
        </div>
        <div className="blog__item">
          <div className="blog__pic">
            <img src="./img/img--blog.png" alt="img--blog" className="img img--blog"></img>
          </div>
          <div className="blog__box">
            <div className="blog__title">
              <p className="title title--blog">Заголовок статьи</p>
            </div>
            <div className="blog__text">
              <p className="text text--blog">Краткий описательный текст на&nbsp;несколько строк, буквально на&nbsp;2-е
                штучки</p>
            </div>
            <div className="blog__link">
              <Link href="" className="link">Читать дальше</Link>
            </div>
          </div>
        </div>
        <div className="blog__item">
          <div className="blog__pic">
            <img src="./img/img--blog.png" alt="img--blog" className="img img--blog"></img>
          </div>
          <div className="blog__box">
            <div className="blog__title">
              <p className="title title--blog">Заголовок статьи</p>
            </div>
            <div className="blog__text">
              <p className="text text--blog">Краткий описательный текст на&nbsp;несколько строк, буквально на&nbsp;2-е
                штучки</p>
            </div>
            <div className="blog__link">
              <Link href="" className="link">Читать дальше</Link>
            </div>
          </div>
        </div>
        <div className="blog__item">
          <div className="blog__pic">
            <img src="./img/img--blog.png" alt="img--blog" className="img img--blog"></img>
          </div>
          <div className="blog__box">
            <div className="blog__title">
              <p className="title title--blog">Заголовок статьи</p>
            </div>
            <div className="blog__text">
              <p className="text text--blog">Краткий описательный текст на&nbsp;несколько строк, буквально на&nbsp;2-е
                штучки</p>
            </div>
            <div className="blog__link">
              <Link href="" className="link">Читать дальше</Link>
            </div>
          </div>
        </div>
        <div className="blog__item">
          <div className="blog__pic">
            <img src="./img/img--blog.png" alt="img--blog" className="img img--blog"></img>
          </div>
          <div className="blog__box">
            <div className="blog__title">
              <p className="title title--blog">Заголовок статьи</p>
            </div>
            <div className="blog__text">
              <p className="text text--blog">Краткий описательный текст на&nbsp;несколько строк, буквально на&nbsp;2-е
                штучки</p>
            </div>
            <div className="blog__link">
              <Link href="" className="link">Читать дальше</Link>
            </div>
          </div>
        </div>
        <div className="blog__item">
          <div className="blog__pic">
            <img src="../img/img--blog.png" alt="img--blog" className="img img--blog"></img>
          </div>
          <div className="blog__box">
            <div className="blog__title">
              <p className="title title--blog">Заголовок статьи</p>
            </div>
            <div className="blog__text">
              <p className="text text--blog">Краткий описательный текст на&nbsp;несколько строк, буквально на&nbsp;2-е
                штучки</p>
            </div>
            <div className="blog__link">
              <Link href="" className="link">Читать дальше</Link>
            </div>
          </div>
        </div>
      

        </Slider>
      </>
    );
  }
}
