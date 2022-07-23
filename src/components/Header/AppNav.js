import React from 'react';

function AppNav () {
   return (
      <div className='app__nav'>
         <div className="container__fluid">
            <ul className="nav__menu nav justify-content-center">
               <li className="nav-item" aria-current="page"><a href="./" className="nav-link active">О центре<i></i></a></li>
               <li className="nav-item"><a href="./" className="nav-link">Документы<i></i></a></li>
               <li className="nav-item"><a href="./" className="nav-link">Родителям</a><i></i></li>
               <li className="nav-item"><a href="./" className="nav-link">Питание</a></li>
               <li className="nav-item"><a href="./" className="nav-link">Новости</a></li>
               <li className="nav-item"><a href="./" className="nav-link">3D тур</a></li>
               <li className="nav-item"><a href="./" className="nav-link">Отзывы</a></li>
            </ul>
         </div>
      </div>
   );
};


export default AppNav;