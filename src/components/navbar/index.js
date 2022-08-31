import React, { useState } from 'react';


import navStyles from "../navbar/index.module.css";
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

    return (
      <div className={navStyles.container}>
      <Link to='/' className={ navStyles.button }>
        Inicio
      </Link>
      <Link to='/catalogo' className={ navStyles.button }>
        Catalogo
      </Link>
      <button className={ navStyles.contacto }><a href='#contacto' onClick={handleClick}>Contacto</a></button>
      </div>
    );
};

export default Navbar;