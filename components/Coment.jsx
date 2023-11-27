"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import style from "@/style/Testimonial.module.css";

const clients = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro excepturi ratione quos nostrum, reiciendis ea illo temporibus alias fuga tenetur architecto asperiores voluptas illum tempore, repellat, expedita nulla dignissimos.',
    author_image: 'author1.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 5,
    company: 'Google',
    inicio: 'uiii',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro excepturi ratione quos nostrum, reiciendis ea illo temporibus alias fuga tenetur architecto asperiores voluptas illum tempore, repellat, expedita nulla dignissimos.',
    author_image: 'author2.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 5,
    company: 'Spotify',
    inicio: 'uiii',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro excepturi ratione quos nostrum, reiciendis ea illo temporibus alias fuga tenetur architecto asperiores voluptas illum tempore, repellat, expedita nulla dignissimos.',
    author_image: 'author3.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 5,
    company: 'Microsof',
    inicio: 'uiii',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro excepturi ratione quos nostrum, reiciendis ea illo temporibus alias fuga tenetur architecto asperiores voluptas illum tempore, repellat, expedita nulla dignissimos.',
    author_image: 'author4.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 5,
    company: 'Google',
    inicio: 'uiii',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro excepturi ratione quos nostrum, reiciendis ea illo temporibus alias fuga tenetur architecto asperiores voluptas illum tempore, repellat, expedita nulla dignissimos.',
    author_image: 'author5.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 5,
    company: 'Google',
    inicio: 'uiii',
  },
  // ... Agrega los demás clientes aquí ...
];

const settings = {
  dots: true,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Coment = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold bg-red-500">Testimonials</h2>
        <Slider {...settings} >
          {clients.map((client, index) => (
           <div key={index} className="mb-12 md:mb-0 shadow-lg  card-container">
           <div className="mb-6 flex justify-center">
             <Image src={`/assets/img/${client.author_image}`} alt="author_img" width={100} height={100} className="w-32 h-32 rounded-full shadow-lg dark:shadow-black/20" />
           </div>
           <h5 className="mb-2 text-lg font-bold">{client.author}</h5>
           <h6 className="mb-4 font-medium text-primary dark:text-primary-400">{client.company}</h6>
           <p className="mb-4 px-6"> {client.text} </p>
           <ul className="mb-0 flex justify-center">
             {Array(client.ranking_repeat).fill(
               <li key={index}>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                   <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                 </svg>
               </li>
             )}
           </ul>
         </div>
         
          
          
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Coment;
