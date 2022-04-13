import React from "react";

import headerStyles from './index.module.css';


const Header = () => {
    return (
      <div className={headerStyles.container}>
        <div className={ headerStyles.blur }>
        <div className={ headerStyles.h1 }>
           <h1> Animate a probar algo nuevo </h1>
        </div>
        <button className={ headerStyles.button }>
          Nuestros productos
        </button>
        </div>
      </div>
    );
};

export default Header;