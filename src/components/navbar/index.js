import React from 'react';


import navStyles from "../navbar/index.module.css";
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
      <div className={navStyles.container}>
      <Link to='/' className={ navStyles.button }>
        Inicio
      </Link>
      <Link to='/catalogo' className={ navStyles.button }>
        Catalogo
      </Link>
      </div>
    );
};

export default Navbar;