import React, { useRef, useState } from 'react'
import './Review.css'
import Girl from '../../image/Girl.png';
import G1 from '../../image/G1.png';
import G2 from '../../image/G2.png';
import G3 from '../../image/G3.jpg';
import G4 from '../../image/G4.jpg';
import Flag from '../../image/Flag.jpg';

import { GoStarFill } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/10.2.0/swiper-bundle.min.js" integrity="sha512-QwpsxtdZRih55GaU/Ce2Baqoy2tEv9GltjAG8yuTy2k9lHqK7VHHp3wWWe+yITYKZlsT3AaCj49ZxMYPp46iJQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


function Review() {
    
  return (
    <>
    <div className='t-wrapper'>
    <div className="t-heading">
            <span>What Our </span>
            <span>Clients </span>
            <span>Say!</span>
           <div> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ducimus.</p></div>
            <div className="blur t-blur1" style={{background:"purple"}}></div>
            <div className="blur t-blur2" style={{background:"blue"}}></div>
        </div>
        <div className="testimonial">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src={Girl}/>
            <div className='rate'>
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <FaRegStar />
            </div>
            <h6>Ritu Kumari</h6>
            <p>My furry friend absolutely adores the new pet food I bought from this website! It's evident from his wagging tail and excited demeanor during meal times. Thank you for providing such nutritious and delicious options!</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={G1}/>
            <div className='rate'>
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <FaRegStar />
            </div>
            <h6>Amala Krista</h6>
            <p>My furry friend absolutely adores the new pet food I bought from this website! It's evident from his wagging tail and excited demeanor during meal times. Thank you for providing such nutritious and delicious options!</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={G4}/>
            <div className='rate'>
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <FaRegStar />
            </div>
            <h6>Kalyani Brigitte</h6>
            <p>My furry friend absolutely adores the new pet food I bought from this website! It's evident from his wagging tail and excited demeanor during meal times. Thank you for providing such nutritious and delicious options!</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Flag}/>
            <div className='rate'>
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <FaRegStar />
            </div>
            <h6>Manjit Anil</h6>
            <p>My furry friend absolutely adores the new pet food I bought from this website! It's evident from his wagging tail and excited demeanor during meal times. Thank you for providing such nutritious and delicious options!</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={G2}/>
            <div className='rate'>
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <FaRegStar />
            </div>
            <h6>Rupa Marius</h6>
            <p>My furry friend absolutely adores the new pet food I bought from this website! It's evident from his wagging tail and excited demeanor during meal times. Thank you for providing such nutritious and delicious options!</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={G3}/>
            <div className='rate'>
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <FaRegStar />
            </div>
            <h6>Vazgen Levi</h6>
            <p>My furry friend absolutely adores the new pet food I bought from this website! It's evident from his wagging tail and excited demeanor during meal times. Thank you for providing such nutritious and delicious options!</p>
        </SwiperSlide>
      </Swiper>

        </div>
    </div>
    </>
  )
}

export default Review
