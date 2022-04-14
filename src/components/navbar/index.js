import React from 'react';


import navStyles from "../navbar/index.module.css"

const Navbar = () => {
    return (
        <div className={navStyles.container}>
        <button className={navStyles.button}> Inicio </button>
        <button className={navStyles.button}> Catalogo </button>
      </div>
    );
};

export default Navbar;