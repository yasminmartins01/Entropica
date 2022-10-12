import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import { Div, Card, CardDos, H1 } from './Nseccion'

const NewSection = () => {

    useEffect(() => {
        const Card = document.querySelector('.Card')
        const CardDos = document.querySelector('.CardDos')
        gsap.from(Card, {opacity: 0, duration: 3, x: 100, repeat:3})
        gsap.from(CardDos, {opacity: 0, duration: 3, x: -100, repeat:3})
    },[])

    return (
        <Div>
            <Card className='Card'/>
            <CardDos className='CardDos'>
                <H1> “El amor es la respuesta, pero mientras esperas la respuesta,
                     el sexo plantea algunas preguntas bastante interesantes” </H1>
            </CardDos>
        </Div>
    );
};

export default NewSection;