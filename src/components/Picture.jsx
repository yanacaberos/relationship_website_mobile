import React from 'react';
import firstAnnivImage from '../assets/first anniv.png';
import endImage from '../assets/end.png';
import Carousel from './Carousel';
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: endImage, title: 'December 27, 2024', description: "This is the day when we made up after that big fight we had. Sumagi sa isip ko na I thought it was really ending kasi pareho na tayong nagkasalubong ng feelings and everything. High emotion are everywhere. Pero im still so thankful that we still made it through that fight. I know we had our lesson within that fight and I will never get tired of growing as a person kasama ka. Thank you so much for sculpting me as the person I am right now. I love you bb."},
    { Image: firstAnnivImage, title: 'February 28, 2024', description: "This was our very first anniversary celebration! Even though it's very simple celeb, I'm still so happy for that intimate and very very memorable day because I got to spend it with you. We had really good memories that day and super saya ko. I'm also really thankful how you're so appreciative in the things kahit na super simple lang. Im so lucky to have you by my side, and I'm looking forward to many more anniversaries and bardagulan with u mahal hehe :3"},
  ];

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          Our Pictures
        </h1>

        <Carousel>
          {pictures.map(({ Image, title, description, index }) => (
            <div key={index} className="relative w-full p-4 bg-white/10 rounded-lg shadow-lg">
              <img
                src={Image}
                alt="Image"
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <div className="mt-4">
                <h2 className="text-xl text-white font-bold">{title}</h2>
                <p
                  className="text-sm text-white mt-2 max-h-[150px] overflow-y-auto"  // Scroll feature added here
                  style={{ lineHeight: '1.5', wordBreak: 'break-word' }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Picture;
