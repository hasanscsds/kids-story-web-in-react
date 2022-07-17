import React from 'react';
import Logo from '../../images/logo.png';

const AppHeader = () => {
   return (
      <header className="app__header">
         <div className="container-fluid">
            <div className="app__header__top">
               <a className="address__link" href="#location">Москва, ул. Муравская д.38, к.1   ЖК Мир Митино  <span> М. Пятницкое шоссе</span></a>
            </div>

            <nav class="app__header__bottom navbar">
               {/* ***** Logo Start *****  */}
               <a className="navbar-brand" href="../../App.js">
                     <img loading="lazy" src={Logo} alt="logo"/>
               </a>
               {/* ***** Logo End ***** */}
               
               <div class="mega__menu collapse navbar-collapse show" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                     <li className=""><a href="./" className="exit__btn"><i className="fas fa-times"></i></a></li>

                     <li class="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="./" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           О нас
                        </a><i class="fa-solid fa-angle-down"></i>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                           <li><a className="dropdown-item" href="./">О центре</a></li>
                           <li><a className="dropdown-item" href="./">Отзывы</a></li>
                           <li><a className="dropdown-item" href="./">Документы</a></li>
                           <li><a className="dropdown-item" href="./">Родителям</a></li>
                           <li><a className="dropdown-item" href="./">Питание</a></li>
                           <li><a className="dropdown-item" href="./">Новости</a></li>
                           <li><a className="dropdown-item" href="./">Заголовок новости</a></li>
                           <li><a className="dropdown-item" href="./">3D тур</a></li>
                        </ul>
                     </li>
                     <li class="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Расписание
                        </a><i class="fa-solid fa-angle-down"></i>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                           <li><a className="dropdown-item" href="#">Расписание основное</a></li>
                           <li><a className="dropdown-item" href="#">Режим дня</a></li>
                           <li><a className="dropdown-item" href="#">Расписание дополнительных услуг</a></li>
                        </ul>
                     </li>
                     <li class="nav-item dropdown" >
                        <a className="nav-link dropdown-toggle" href="./" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                           Программа
                        </a><i class="fa-solid fa-angle-down"></i>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" data-toggle="dropdown" must change to data-bs-toggle="dropdown">
                           <li><a className="dropdown-item" href="./">Программа</a></li>
                           <li><a className="dropdown-item" href="./">Дополнительные услуги</a></li>
                        </ul>
                     </li>
                     <li class="nav-item">
                        <a className="nav-link" href="./">Фото и видео</a>
                     </li>
                     <li class="nav-item">
                        <a className="nav-link" href="./">Команда</a>
                     </li>
                     <li class="nav-item">
                        <a className="nav-link" href="./">Контакты</a>
                     </li>
                     <li class="">
                        <a className="btn" href="./">Записаться на экскурсию</a>
                     </li>
                     <li class="">
                        <a className="contact__number" href="tel:+998755555555"><i className="fa-solid fa-circle-phone"> +7 495 123 34 25</i><span>Заказать обратный звонок</span></a>
                     </li>
                     <li class="nav__social">
                        <a className="" href="vk.me/agvento" target="_blank"><i className="fab fa-vk"></i></a>
                        <a className="" href="vk.me/agvento" target="_blank"><i class="fab fa-telegram-plane"></i></a>
                     </li>
                  </ul>
               </div>

               <a className="contact__number" href="tel:+998755555555"><i className="fa-solid fa-circle-phone"> +7 495 123 34 25</i><span>Заказать обратный звонок</span></a>
               <span class="nav__social">
                  <a className="" href="vk.me/agvento" target="_blank"><i className="fab fa-vk"></i></a>
                  <a className="" href="vk.me/agvento" target="_blank"><i class="fab fa-telegram-plane"></i></a>
               </span>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fas fa-bars"></i>
               </button>
               <a className="btn" href="./">Записаться на экскурсию</a>
            </nav>
         </div>
      </header>
   );
};


export default AppHeader;

