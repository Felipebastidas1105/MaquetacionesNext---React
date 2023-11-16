'use client';
import React from 'react';
import Image from "next/image"
import style from "@/style/Testimonial.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const clients =
[{
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro excepturi ratione quos nostrum, reiciendis ea illo temporibus alias fuga tenetur architecto asperiores voluptas illum tempore, repellat, expedita nulla dignissimos.',
    author_image: 'author1.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 5,
    company: 'Google',
    inicio:'uiii'
},
{
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro excepturi ratione quos nostrum, reiciendis ea illo temporibus alias fuga tenetur architecto asperiores voluptas illum tempore, repellat, expedita nulla dignissimos.',
    author_image: 'author2.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 2,
    company:'Google'
},
{
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro excepturi ratione quos nostrum, reiciendis ea illo temporibus alias fuga tenetur architecto asperiores voluptas illum tempore, repellat, expedita nulla dignissimos.',
    author_image: 'author3.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 1,
    company:'Google'
},
{
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro excepturi ratione quos nostrum, reiciendis ea illo temporibus alias fuga tenetur architecto asperiores voluptas illum tempore, repellat, expedita nulla dignissimos.',
    author_image: 'author4.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 2,
    company:'Google'
},
{
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro excepturi ratione quos nostrum, reiciendis ea illo temporibus alias fuga tenetur architecto asperiores voluptas illum tempore, repellat, expedita nulla dignissimos.',
    author_image: 'author5.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 1,
    company:'Google'
},
{
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro excepturi ratione quos nostrum, reiciendis ea illo temporibus alias fuga tenetur architecto asperiores voluptas illum tempore, repellat, expedita nulla dignissimos.',
    author_image: 'author6.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 2,
    company:'Google'
},
{
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro excepturi ratione quos nostrum, reiciendis ea illo temporibus alias fuga tenetur architecto asperiores voluptas illum tempore, repellat, expedita nulla dignissimos.',
    author_image: 'author7.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 1,
    company:'Google'
},
]

const settings = {
  dots: true,
  autoplay: true, 
  infinite: true,
  autoplaySpeed: 2000,
  slidesToShow: 3, // Ajusta el número de comentarios visibles
  slidesToScroll: 1,
  responsive:[
    {
      breakpoint:500,
      settings:
      {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};



const Coment = () => {
  return (
    <>
 
    <div className='bg-gray-100 h-[650px] z-50 lg:px-20 md:px-6'>
      <h2 className={style.testimonial_title} >Comentarios</h2>
      <div className='w-full overflow-hidden '>

        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className={style.testimonial}>
              <h3>{client.text}</h3>
              <div className={style.author}>
                <Image src={`/assets/img/${client.author_image}`} alt="author_img" width='50' height='40' />
                <p>
                  {client.ranking.repeat(client.ranking_repeat)}
                  {client.author}<br />
                  {client.company}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </>
  );
};

export default Coment;




