'use client'
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImageGallery = () => {
  const initialImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Dr_BsFFFz_Vq24jROHQLtmDiIqaZVy4Puw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKyI_-CRAbL9p3oKnVQLF3YXY_HDWTO8G9Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Wgve2vby9-XnabczWTuENy86R9V0oCD_k1o9NM_b5lZkX-G6OUDb-HQZ2Exh616J_QA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXr70v2E_tcR52pQXDo-VzDp25gspvUl1sB2AFtGxhJucZrYS98H8Hf8u_bj-sqFKz0w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8aq1pZhgu8ukP470xu_7FZ4CxNxaAiNNEFwLgBsYAEYiH-32t0WIVULu_mgurAzGWpU&usqp=CAU',
  ];

  const [images, setImages] = useState(initialImages);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setImages([images[index], ...images.slice(0, index), ...images.slice(index + 1)]);
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const handleArrowClick = (direction) => {
    const newIndex = direction === 'prev' ? (currentIndex - 1 + images.length) % images.length : (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const thumbnailSize = '50px';

  return (
    <div className='w-[400px] h-[400px] bg-gray-400 flex justify-center rounded-2xl'>
      <div className='w-[380px] pt-2'>
        <div className=''>
          <img
            src={selectedImage}
            alt=''
            className='w-full h-[300px]'
          />
        </div>
        <div className='text-white flex justify-between items-center h-[100px] pt-1'>
          <div
            className='w-[10%] cursor-pointer'
            onClick={() => handleArrowClick('prev')}
          >
            <FaArrowLeft size={24} />
          </div>
          {images.map((thumbnail, index) => (
            <div
              key={index}
              className='w-[20%] border flex justify-center items-center cursor-pointer'
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                style={{ width: thumbnailSize, height: thumbnailSize }}
              />
            </div>
          ))}
          <div
            className='w-[10%] cursor-pointer'
            onClick={() => handleArrowClick('next')}
          >
            <FaArrowRight size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;