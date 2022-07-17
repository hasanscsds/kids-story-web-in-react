import React from 'react';
import Logo from '../../images/logo.png';

const AppFooter = () => {
   return (
      <footer className="app__footer">
         <div className="container-fluid">
            <div className="app__footer__top">
               <div className="app__footer__widget">
                  <ul className="app__footer__widget__list">
                     <li className="app__footer__widget__list__item">
                        {/* ***** Logo Start *****  */}
                        <a className="navbar-brand" href="../../App.js">
                           <img loading="lazy" src={Logo} alt="logo"/>
                        </a>
                        {/* ***** Logo End ***** */}
                     </li>
                     <li className="">
                        <a className="contact__number" href="tel:+998755555555">
                           <i className="fa-solid fa-circle-phone"> +7 495 123 34 25</i>
                           <span>dir@kidsstory.life</span>
                        </a>
                     </li>
                     <li class="">
                        <a className="btn" href="./">МЕНЮ САЙТА</a>
                     </li>
                     <li className="">
                        <a className="address__link" href="#location">Москва, ул. Муравская д.38, к.1   ЖК Мир Митино  
                           <span> М. Пятницкое шоссе</span>
                        </a>
                     </li>
                     <li class="nav__social">
                        <a className="" href="vk.me/agvento" target="_blank">
                           <i className="fab fa-vk"></i>
                        </a>
                        <a className="" href="vk.me/agvento" target="_blank">
                           <i class="fab fa-telegram-plane"></i>
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="app__footer__widget">
                  <h6 className="app__footer__widget__label">О нас</h6>
                  <ul className="app__footer__widget__list">
                     <li className="app__footer__widget__list__item">
                        <a className="app__footer__widget__list__item__link" href="#">
                           О центре
                        </a>
                     </li>
                     <li className="app__footer__widget__list__item">
                        <a className="app__footer__widget__list__item__link" href="#">
                           Документы
                        </a>
                     </li>
                     <li className="app__footer__widget__list__item">
                        <a className="app__footer__widget__list__item__link" href="#">
                           Родителям
                        </a>
                     </li>
                     <li className="app__footer__widget__list__item">
                        <a className="app__footer__widget__list__item__link" href="#">
                           Питание
                        </a>
                     </li>
                     <li className="app__footer__widget__list__item">
                        <a className="app__footer__widget__list__item__link" href="#">
                           Новости
                        </a>
                     </li>
                     <li className="app__footer__widget__list__item">
                        <a className="app__footer__widget__list__item__link" href="#">
                           3D тур
                        </a>
                     </li>
                     <li className="app__footer__widget__list__item">
                        <a className="app__footer__widget__list__item__link" href="#">
                           Отзывы
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="app__footer__widget">
                  <h6 className="app__footer__widget__label">Расписание</h6>
                  <ul className="app__footer__widget__list">
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#">
                        Расписание основное
                     </a>
                     </li>
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#">
                        Дополнительные услуги
                     </a>
                     </li>
                  </ul>
               </div>
               <div className="app__footer__widget">
                  <h6 className="app__footer__widget__label">Программа</h6>
                  <ul className="app__footer__widget__list">
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#">
                        Группа (2-3 года)
                     </a>
                     </li>
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#">
                        Группа (3-5 лет)
                     </a>
                     </li>
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#">
                        Группа (5-7 лет)
                     </a>
                     </li>
                  </ul>
               </div>
               <div className="app__footer__widget">
                  <h6 className="app__footer__widget__label">Фото и видео</h6>
                  <ul className="app__footer__widget__list">
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#" />
                     </li>
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#" />
                     </li>
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#" />
                     </li>
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#" />
                     </li>
                  </ul>
               </div>
               <div className="app__footer__widget">
                  <h6 className="app__footer__widget__label">Команда</h6>
                  <ul className="app__footer__widget__list">
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#" />
                     </li>
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#" />
                     </li>
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#" />
                     </li>
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#" />
                     </li>
                  </ul>
               </div>
               <div className="app__footer__widget">
                  <h6 className="app__footer__widget__label">Контакты</h6>
                  <ul className="app__footer__widget__list">
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#" />
                     </li>
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#" />
                     </li>
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#" />
                     </li>
                     <li className="app__footer__widget__list__item">
                     <a className="app__footer__widget__list__item__link" href="#" />
                     </li>
                  </ul>
               </div>
            </div>
            <div className="app__footer__bottom">
                  <a className="copyrights"
                     href="https://t.me/khasans_code">
                     Copyrights: Kids Story 2021 by khasans__code</a>
            </div>
         </div>
      </footer>
   );
};


export default AppFooter;