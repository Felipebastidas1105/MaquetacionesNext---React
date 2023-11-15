'use client';
import React from 'react';
import Image from "next/image"
import style from "@/style/Testimonial.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const clients =
[{
    text: 'this is a template figma file',
    author_image: 'author1.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 5,
    company: 'Google',
    inicio:'uiii'
},
{
    text: 'this is a template figma file',
    author_image: 'author2.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 2,
    company:'Google'
},
{
    text: 'this is a template figma file',
    author_image: 'author3.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 1,
    company:'Google'
},
{
    text: 'this is a template figma file',
    author_image: 'author2.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 2,
    company:'Google'
},
{
    text: 'this is a template figma file',
    author_image: 'author3.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 1,
    company:'Google'
},
{
    text: 'this is a template figma file',
    author_image: 'author2.jpg',
    author: 'gemma nolen',
    ranking: '🟌',
    ranking_repeat: 2,
    company:'Google'
},
{
    text: 'this is a template figma file',
    author_image: 'author3.jpg',
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
  autoplaySpeed: 1500,
  slidesToShow: 3, // Ajusta el número de comentarios visibles
  slidesToScroll: 1
};



const Coment = () => {
  return (
    <>
    <div className='bg-white h-[650px]'>
      <h2 className={style.testimonial_title} >Comentarios</h2>
      <div className='w-full overflow-hidden'>

        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className={style.testimonial}>
              <h3>{client.text}</h3>
              <div className={style.author}>
                <Image src={`/assets/img/${client.author_image}`} alt="author_img" width='50' height='50' />
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




