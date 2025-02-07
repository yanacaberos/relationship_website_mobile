import React, { useEffect, useRef } from 'react';
import { gsap, CSSRulePlugin } from 'gsap/all';
import '../index.css';
import { ArrowLeft,ArrowRight } from "./icons";
import { useNavigate } from 'react-router-dom'
gsap.registerPlugin(CSSRulePlugin);

function Letter() {
  const envelopeRef = useRef(null);
  const letterRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const flap = CSSRulePlugin.getRule(".envelope:before");
    const t1 = gsap.timeline({ paused: true });
    t1.to(flap, {
      duration: 0.5,
      cssRule: { rotateX: 180 },
    })
      .set(flap, { cssRule: { zIndex: 10 } })
      .to(letterRef.current, {
        scale: 0.8,
        translateY: -200,
        duration: 0.9,
        ease: "back.inOut(1.5)",
      })
      .set(letterRef.current, { zIndex: 40 })
      .to(letterRef.current, {
        duration: 0.7,
        ease: "back.out(0.4)",
        translateY: -5,
        translateZ: 250,
      });

    const t2 = gsap.timeline({ paused: true });


    const openCard = () => {
      t1.play();
      t2.play();
    };

    const closeCard = (e) => {
      e.stopPropagation();
      t1.reverse();
      t2.reverse();
    };

    const envelopeElement = envelopeRef.current;
    const closeButton = letterRef.current.querySelector(".close");

    envelopeElement.addEventListener("click", openCard);
    closeButton.addEventListener("click", closeCard);

    return () => {
      envelopeElement.removeEventListener("click", openCard);
      closeButton.removeEventListener("click", closeCard);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className='w-[90%] max-w-[400px]'>
          <div className="flex-grow flex items-center justify-center h-[400px]">
          <div className="letter-container">
            <div className="content">
              <div className="envelope" ref={envelopeRef}></div>
              <div className="letter" ref={letterRef}>
                <div className="body">
                  <span className="close">x</span>
                  <div className="message">Hello my lover! I hope you're happy with this litol gift of mine ngayong valentine's hehe. I'm sorry I can't gib u flowers yet kasi I'm kinda short sa budget. Anyways, I just wanna say that I am very grateful for your existence. Alam mo naman na since the day we met, I had this crazy turnaround sa buhay ko wherein I became so motivated to excel in classes, and I will give the credit to you for that always. Thank you for bringing me the warm energy everyday by just simply talking to me. One of the things I don't like the most is promising and expecting something, but with you I don't wanna lose the chance to say this, I will try my very best to stay by your side and I hope also na sana habang buhay ka nandito beside me. Mahal kita sobra. Palagi mo tatandaan yan okei? But if ever there comes a time where my words fails. I hope you remember how grateful I am for your existence. I just want you also to know that if I was given a chance to redo things, I would always choose to cross paths with you, and I wouldn't ever forget to bring my watch with me so that we won't ever lose our very first interaction that turned into this beautiful relationship. I love you so much, adhi. Happy Valentine's, lover.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full p-6 mb-10">
            <button
              className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
              onClick={() => navigate('/recap')}
            >
              <ArrowLeft />  Previous page
            </button>
            <button
              className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
              onClick={() => navigate('/closing')}
            >
              Next page <ArrowRight />
            </button>
          </div>
        
      </div>
    </div>

  
  );
}

export default Letter;
