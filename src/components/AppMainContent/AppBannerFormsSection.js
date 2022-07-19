import React from 'react';

function AppBannerForms ({className}) {
   return (
      <>
         <div className={`section ${className}`}>
            <div className="container-fluid">
               <div class="banner__form__details">
                  <h2 className="form__label">Есть вопросы? Получите 
                     бесплатную консультацию</h2>
                  <p className="form__text">Оставьте телефон и мы перезвоним 
                     и расскажем все подробности о филиале</p>
                  <form action="" class="banner__form">
                     <input className='submit__btn' type="number" pattern="(?:\+\([9]{2}[8]\)[0-9]{2}\ [0-9]{3}\-[0-9]{2}\-[0-9]{2})" placeholder="+998 ( _ _ ) - _  _  _ - _  _ - _  _" required/>
                     <input className="submit__btn" type="button" value="отправить"/>
                     <label className="control control-radio">
                        <input type="radio" name="radio"/>
                        <div className="control_indicator"></div>
                              Я принимаю условия<br/> 
                              пользовательского соглашения
                     </label>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
};


export default AppBannerForms;