import React from 'react';
import Features from '../../FeaturesData.json'

function AppFeaturesSection () {
   return (
      <>
         {/* <!-- ***** Features Area Start ***** --> */}
         <div className="app__features__section">
            <div className="container-fluid">
               <div className="features">
                  {
                     Features.map((item, index)=>
                     <div className="features__item" key={item.id}>
                        <span className="features__img">
                           <img src={item.featuresIcon} alt="img"/>
                        </span>
                        <span  className='features__text'>
                           <p><strong>{item.dataKey} </strong> {item.data}</p>
                        </span>
                     </div>
                     )
                  }
               </div>
            </div>
         </div>
         {/* <!-- ***** Features Area End ***** --> */}
      </>
   );
};


export default AppFeaturesSection;