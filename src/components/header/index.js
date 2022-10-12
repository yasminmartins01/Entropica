import React, { useEffect } from "react";
import { gsap } from 'gsap';

import { Container, Blur, Button, H1 } from './Header';


const Header = () => {
      const Blurr = document.querySelector('.Blurr');
      const Btn = document.querySelector('.Btn');
      useEffect(()=>{
        gsap.from(Blurr, {opacity:0 , duration:3, y:-100})
        gsap.from(Btn, {opacity:0 , duration:3, x:100})
      })
    return (
      <Container>
        <Blur className="Blurr">
          <H1> Animate a probar algo nuevo </H1>
            <Button className="Btn"> <a href="https://www.instagram.com/entropicasexshop/">
              Seguinos en instagram </a>
            </Button>
        </Blur>
      </Container>
    );
};

export default Header;