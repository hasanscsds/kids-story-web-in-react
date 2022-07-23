import React, {useState} from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Logo from '../../images/logo.png';

function AppHeader() {
   const [isShow, setIsShow]=useState(window.innerWidth > 600? true : false)


   function handleClick () {
      if (window.innerWidth < 600) {
         setIsShow(current => !current);
      }
   };
   return (
      <Navbar className="app__header" collapseOnSelect expand="lg">
         <Container fluid className="d-flex flex-column">
            <div className="app__header__top">
               <Nav.Link className="address__link" href="#">Москва, ул. Муравская д.38, к.1   ЖК Мир Митино  <span> М. Пятницкое шоссе</span></Nav.Link>
            </div>
            <div className="app__header__bottom">
               <Navbar.Brand href="#home"><img loading="lazy" src={Logo} alt="logo"/></Navbar.Brand>

               <Navbar.Collapse id="responsive-navbar-nav" className={`${isShow? `show`: ''} `}>
                  <Nav className="mx-auto">
                     <Nav.Link className="close__btn" href="#" onClick={handleClick}><i className="fas fa-times"></i></Nav.Link>
                     <NavDropdown title="О нас" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">О центре</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Отзывы</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Документы</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Родителям</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Питание</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Новости</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Заголовок новости</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">3D тур</NavDropdown.Item>
                     </NavDropdown>
                     <NavDropdown title="Расписание" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Расписание основное</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Режим дня</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Расписание дополнительных услуг</NavDropdown.Item>
                     </NavDropdown>
                     <NavDropdown title="Программа" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Программа</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Дополнительные услуги</NavDropdown.Item>
                     </NavDropdown>

                     <Nav.Link href="#features">Фото и видео</Nav.Link>
                     <Nav.Link href="#pricing">Команда</Nav.Link>
                     <Nav.Link href="#pricing">Контакты</Nav.Link>
                  </Nav>

                     <a className="contact__number" href="tel:+998755555555"><i className="fa-solid fa-circle-phone"> +7 495 123 34 25</i><span>Заказать обратный звонок</span></a>
                     <span className="nav__social">
                        <a className="" href="vk.me/agvento" target="_blank"><i className="fab fa-vk"></i></a>
                        <a className="" href="vk.me/agvento" target="_blank"><i className="fab fa-telegram-plane"></i></a>
                     </span>
                     <a className="submit__btn" href="./">Записаться на экскурсию</a>
               </Navbar.Collapse>

               
               <span className="nav__social">
                  <a className="" href="vk.me/agvento" target="_blank"><i className="fab fa-vk"></i></a>
                  <a className="" href="vk.me/agvento" target="_blank"><i className="fab fa-telegram-plane"></i></a>
               </span>
               <Navbar.Toggle aria-controls="responsive-navbar-nav"><i className="fas fa-bars"></i></Navbar.Toggle>
               <a className="submit__btn" href="./">Записаться на экскурсию</a>
            </div>
         </Container>
      </Navbar>
   );
}

export default AppHeader;