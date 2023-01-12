import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';

function Testimonials() {
  SwiperCore.use([Autoplay]);

  const clients = [
    {
      img: profilePic1,
      review:
        "They provided expert guidance and support throughout the entire process of building our website, and the end result is truly amazing. we highly recommend their services to anyone in need of a top-notch website.",
      name: 'Er. Rajkishor Yadav',
    },
    {
      img: profilePic2,
      review:
        'We were in need of a new marketing strategy to increase our online presence and attract more customers.Their team of experts was able to analyze our business and create a customized strategy. We are grateful for the valuable services they provided.',
      name: 'Er. Sanjit Baruwal',
    },
    {
      img: profilePic3,
      review:
        'They developed a website that perfectly reflected our values and goals as my company needed. Their team is dedicated, professional and highly skilled. We are very pleased with the results.',
      name: 'Er. Nitesh Singh',
    },
    {
      img: profilePic4,
      review:
        'I highly recommend to anyone looking for a reliable and professional team to handle their digital marketing needs. They helped us to increase our online presence and sales. We are very happy with the results.',
      name: 'Er. Rajan Mahato',
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>From me...</span>
        <div
          className="blur t-blur1"
          style={{ background: 'var(--purple)' }}
        ></div>
        <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                <span>{client.name}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonials;
