import React from 'react';


import sectionStyles from "../section/index.module.css";
import Swipper from '../swiper';




const Section = () => {
    return (
        <div className={sectionStyles.container}>
            <h1 className={sectionStyles.h1}> Productos </h1>   
            <p className={sectionStyles.p}> Ofrecemos variedad de productos en
             distintas calidades para tu gusto y comodidad </p>
            <Swipper />
        </div>
    );
};

export default Section;