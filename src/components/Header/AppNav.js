import React from 'react';

const AppNav = () => {
   return (
      <div className='app__nav'>
         <div class="container__fluid">
            <ul class="nav__menu nav justify-content-center">
               <li class="nav-item" aria-current="page"><a href="./" class="nav-link active">О центре<i></i></a></li>
               <li class="nav-item"><a href="./" class="nav-link active">Документы<i></i></a></li>
               <li class="nav-item"><a href="./" class="nav-link active">Родителям</a><i></i></li>
               <li class="nav-item"><a href="./" class="nav-link active">Питание</a></li>
               <li class="nav-item"><a href="./" class="nav-link active">Новости</a></li>
               <li class="nav-item"><a href="./" class="nav-link active">3D тур</a></li>
               <li class="nav-item"><a href="./" class="nav-link active">Отзывы</a></li>
            </ul>
         </div>
      </div>
   );
};


export default AppNav;