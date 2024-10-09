import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import {useRef} from "react";

import HeroAnimation from "../../../src/animation/Animation - 1728334837381.json";

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="./profil-modified.png" alt="" className="avatar" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">
          Titi Sana Asma, Développeuse logiciel, web -Fullstack-
        </h1>
        <p className="sub-title">
          Titulaire d'un master en informatique spécialité Sciences et
          technologies de l'information et de la communication, de nature
          soucieuse du détail et de la qualité, reconnue par ma capacité à
          travailler de manière autonome ou en équipe, par mon sens
          d'organisation, j'aime partager mes connaissances et aider les autres.
          Je suis passionnée par l'apprentissage et les nouvelles technologies,
          avec une bonne connaissance des outils informatiques. J’ai un AEC en
          Programmation des technologies web.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
          
        </div>
      </div>
      <div className="right-section animation">
      <Lottie 
      lottieRef={lottieRef}
        onLoadedImages={()=>{
          // @ts-ignore
          //https://lottiereact.com/
          lottieRef.current.setSpeed(0.5);

        }}
        animationData={HeroAnimation} />
      </div>
    </section>
  );
};
export default Hero;
