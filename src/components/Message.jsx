import React from 'react'
// Import your images from the assets folder
import sunsetImage from '../assets/sunset.png'
import playgroundImage from '../assets/playground.png'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: playgroundImage, title: 'February 27, 2024', description: "I know u may not like this picture of yours hehe. Pero this is one of my favorites kasi u just look happy there and makes me wanna immortalize that moment."},
    { Image: sunsetImage, title: 'December 13, 2023', description: "This is my ultimate fave pic of u with a sunset background. Everything's perfect in this pic, the view, the sunset, and you. Won't get tired of having u and the sunset as my subject."},
  ]
  
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Messages
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
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
  )
}

export default Message