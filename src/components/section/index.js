import React from 'react';


import { Container, H1, Contenedor, P } from './section'
import Swipper from '../swiper';




const Section = () => {
    return (
        <Container>
            <H1> Productos </H1>   
            <P> Ofrecemos variedad de productos en
             distintas calidades para tu gusto y comodidad </P>
             <Contenedor>
                <Swipper />
             </Contenedor>
        </Container>
    );
};

export default Section;