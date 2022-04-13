import React from 'react';

import newSectionStyles from './index.module.css';

const NewSection = () => {
    return (
        <div className={ newSectionStyles.container }>
            <div className={ newSectionStyles.card }>

            </div>
            <div className={ newSectionStyles.carddos }>
                <h1 className={ newSectionStyles.h1 }> “El amor es la respuesta, pero mientras esperas la respuesta,
                     el sexo plantea algunas preguntas bastante interesantes” </h1>
            </div>
        </div>
    );
};

export default NewSection;