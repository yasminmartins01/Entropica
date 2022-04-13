import React from 'react';

import contactoStyles from './index.module.css'

const Contacto = () => {
    return (
        <div className={ contactoStyles.container }>
            <form action="https://formsubmit.co/yasmartins999@gmail.com" method="POST" className={ contactoStyles.formulario }>
                <h1 className={ contactoStyles.h1 }> Contactanos </h1>
                <input type="text" placeholder='Nombre' className={ contactoStyles.input } required/>
                <input type="email" placeholder='Correo electronico' className={ contactoStyles.input } required/>
                <input type="message" placeholder='mensaje' className={ contactoStyles.input } required/>
                <button className={ contactoStyles.button }> Enviar </button>
            </form>
            <img src="https://pbs.twimg.com/media/Cxn9484WgAAXnQq.jpg" alt="bdsm" className={ contactoStyles.img }/>
        </div>
    );
};

export default Contacto;