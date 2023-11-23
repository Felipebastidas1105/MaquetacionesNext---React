"use client"
import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function GalleryView() {
  const images = [
    'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhc2FzJTIwaW5tb2JpbGlhcmlhfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1459535653751-d571815e906b?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const sliderRef = useRef();

  const settings = {
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentImage(next),
  };

  const handleImageClick = (index) => {
    setCurrentImage(index);
    sliderRef.current.slickGoTo(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderRef.current.slickNext();
    }, settings.autoplaySpeed);

    return () => clearInterval(intervalId);
  }, [settings.autoplaySpeed]);

  return (
    <div className="relative w-[800px]">
      <div className="w-full pb-5">
        <img
          className="h-[650px] w-full rounded-lg slider-image  focus:border-none"
          src={images[currentImage]}
          alt=""
        />
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 ">
          <FaChevronLeft
            className="text-2xl cursor-pointer"
            onClick={() => handleImageClick((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1))}
          />
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 ">
          <FaChevronRight
            className="text-2xl cursor-pointer"
            onClick={() => handleImageClick((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1))}
          />
        </div>
      </div>
      <Slider  ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="">
            <img
              className={`h-[100px] w-[120px]  rounded-lg cursor-pointer ${
                index === currentImage ? ' border-2 border-[#F34511]' : 'focus:border-none  '
              }`}
              src={image}
              alt=""
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}







// import React, { useState, useRef, useEffect } from 'react';
// import Slider from 'react-slick';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function GalleryView() {
//   const images = [
//     'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
//   ];

//   const [currentImage, setCurrentImage] = useState(0);
//   const sliderRef = useRef();

//   const settings = {
//     autoplay: true,
//     infinite: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     beforeChange: (current, next) => setCurrentImage(next),
//   };

//   // Cambiar manualmente la imagen seleccionada sin detener el autoplay
//   const handleImageClick = (index) => {
//     setCurrentImage(index);
//     sliderRef.current.slickGoTo(index);
//   };

//   useEffect(() => {
//     // Reiniciar el autoplay después de un cambio manual
//     const intervalId = setInterval(() => {
//       sliderRef.current.slickNext();
//     }, settings.autoplaySpeed);

//     return () => clearInterval(intervalId);
//   }, [currentImage, settings.autoplaySpeed]);

//   return (
//     <div className="relative gap-4 w-[800px]">
//       <div className="w-full pb-5">
//         <img className="h-auto max-w-full rounded-lg" src={images[currentImage]} alt="" />
//         <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
//           <FaChevronLeft
//             className="text-2xl cursor-pointer"
//             onClick={() => handleImageClick((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1))}
//           />
//         </div>
//         <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
//           <FaChevronRight
//             className="text-2xl cursor-pointer"
//             onClick={() => handleImageClick((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1))}
//           />
//         </div>
//       </div>
//       <Slider ref={sliderRef} {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="mb-2">
//             <img
//               className={`h-auto max-w-full rounded-lg cursor-pointer ${
//                 index === currentImage ? 'border-2 border-[#F34511] ' : ''
//               }`}
//               src={image}
//               alt=""
//               onClick={() => handleImageClick(index)}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }





