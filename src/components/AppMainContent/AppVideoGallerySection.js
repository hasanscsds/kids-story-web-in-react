import React from 'react';
import VideosGallery from "../../Data.json";
import Slider from "react-slick";

function AppVideoGallerySection () {

   var settings = {
   dots: true,
   infinite: false,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   initialSlide: 0,
   className: "center",
   centerMode: true,
   responsive: [
      {
         breakpoint: 600,
         settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         initialSlide: 2
         }
      },
      {
         breakpoint: 480,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1
         }
      }
   ]
   };


   return (//obekt berish
         <div className="videos__gallery__slider slider">
            <Slider {...settings}>
         {
            VideosGallery.map((item, index)=>
               <div class="video__gallery__slider__item item" key={item.id}>
               <video controls poster={item.img}>
                  <source src={item.video}/>
                  Your browser does not support the video tag.
               </video>
            </div>
            )
         }
         </Slider>
      </div>
   );
};


export default AppVideoGallerySection;
