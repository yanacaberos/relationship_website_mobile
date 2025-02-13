import React from 'react';
import sunsetImage from '../assets/sunset.png';
import playgroundImage from '../assets/playground.png';
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';

function Message() {
  const navigate = useNavigate();

  // Customize your own picture, title, and subtext. You can also add more pictures.
  const pictures = [
    { Image: playgroundImage, title: 'February 28, 2024', description: "I know u may not like this picture of yours hehe. Pero this is one of my favorites kasi u just look happy there. There are moments I want to immortalize and this is one of them. You just look happy there and if I was just given a chance to stop the time, gagawin ko. I know I have said it countless times before, but I will never shut up how truly captivating and consoling your smile is. Your smile radiates love, kindness, and warmth, which reflects who you are; an enchanting human being who embodies love in all forms. In a world that can sometime be too cruel and harsh, your smile serves as a constant reminder of a beauty that exists. Keep smiling, adhi. You have no idea ilang beses akong niligtas ng mga ngiti mong yan. :)"},
    { Image: sunsetImage, title: 'December 13, 2023', description: "This is my ultimate fave pic of u with a sunset background. Everything's perfect in this pic, the view, the sunset, and you. I am no Geloy Concepcion. I have no digital camera, I only have my phone's camera and the lightroom na galing pang illegal sites hehe. Pero pwede na siguro 'to no? I know you really dont like taking pictures of yourself, and neither do I. But every moment na I get to capture you kahit palihim I only have one word for you: breathtaking. I don't know how you do it but you really hold so much within single frame. You stand there, and it feels like you're holding both heavens and the earth in your hands. Just you being the muse, the heart of the frame; you make the shot perfect. God knows nothing about the rule of thirds, the angle of perspective, or any tricks and shots there are, but none of that matters when you're in front of the lens. You make turn the moment and time into a happy memory, with all the hues in the right places. I'm no Geloy Concepcion, but for you, I'll try. Hindi na bale kung wala akong ni masyadong idea sa pagkuha ng litrato. Di na bale kung wala akong magarang camera. None of it matters when you are the subject; you turn everything into art. I love you. I Won't get tired of having u and the sunset as my subject."},
  ];

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          Our Messages
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
                  className="text-sm text-white mt-2 max-h-[150px] overflow-y-auto"
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

export default Message;
