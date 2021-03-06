import React from 'react';

function AppWelcomeBannerSection () {
   return (
      <>
            {/* <!-- ***** Welcome Area Start ***** --> */}
            <div className="welcome__banner__section section" id="banner select-program">
               <div className="container-fluid">
                  <div className="welcome__banner">
                  <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <h1>Kidsstory</h1>
                           <p>Английский детский 
                              сад и клуб</p>
                        </div>
                        <div className="carousel-item">
                           <h1>Kidsstory</h1>
                           <p>Английский детский 
                              сад и клуб</p>
                        </div>
                        <div className="carousel-item">
                           <h1>Kidsstory</h1>
                           <p>Английский детский 
                              сад и клуб</p>
                        </div>
                     </div>
                     <div className="owl__navs">
                        <button className="owl__nav carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                           <span className="carousel__left" aria-hidden="true"><i className="fa-solid fa-angle-left"></i></span>
                           <span className="visually-hidden">Предыдущий</span>
                        </button>
                        <button className="owl__nav carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                           <span className="carousel__right" aria-hidden="true"><i className="fa-solid fa-angle-right"></i></span>
                           <span className="visually-hidden">Следующий</span>
                        </button>
                     </div>
               </div>

               <div className="banner__form__details">
                  <h4 className="form__label">Запишитесь
                        на персональную
                        экскурсию</h4>
                     <p className="form__text">Заполните форму и посмотрите 
                        детский сад вживую в удобное для 
                        вас время</p>
                     <form action="" className="banner__form">
                        <input className='submit__btn' type="text" placeholder="Ваше имя" required/>
                        <input className='submit__btn' type="number" pattern="(?:\+\([9]{2}[8]\)[0-9]{2}\ [0-9]{3}\-[0-9]{2}\-[0-9]{2})" placeholder="+998 ( _ _ ) - _  _  _ - _  _ - _  _" required/>
                        <input className='submit__btn' type="gmail" placeholder="Ваш e-mail" required/>
                        <label class="control control-radio">
                              <input type="radio" name="radio" />
                              <div className="control_indicator basic__red"></div>
                                 Я принимаю условия<br/> 
                                 пользовательского соглашения
                        </label>
                        <input className="submit__btn" type="button" value="записаться"/>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      {/* <!-- ***** Welcome Area End ***** --> */}
      </>
   );
};

export default AppWelcomeBannerSection;