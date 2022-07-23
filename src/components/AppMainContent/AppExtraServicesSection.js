import React from 'react';
import ExtraServices from '../../ExtraServicesData.json'

function AppExtraServices () {
    return (
            <>
            <div className="app__extra__services__section">
              <div className="container-fluid">
                <div className="extra__services__header section__header">
                  <h2 className="section__label">Дополнительные услуги</h2>
                </div>
                <ul className="extra__services">
                    {
                      ExtraServices.map((item, index)=>
                        <li className="extra__services__item" key={item.id}>
                          <a href="./" className="extra__services__item__details">
                            <span className="extra__services__item__details__img">
                              <img
                                  src={item.servicesIcon} alt="img"/>
                            </span>
                            <span className="extra__services__item__details__text">
                                <p>{item.servicesLabel}</p>
                            </span>
                          </a>
                      </li>
                      )
                    }
                </ul>
            </div>
          </div>
        </>
      );
    };

export default AppExtraServices;