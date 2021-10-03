import React from "react";
import { Link } from "react-router-dom";
import style from '../../../styles/App.module.scss';

const Navbar = () => {
    return (
        <div className={style.navbar}>
          <div className={style.navbar__links}>
            <Link to='/about'>О сайте</Link>
            <Link to='/posts'>Посты</Link>
          </div>
        </div>
    )
}

export default Navbar