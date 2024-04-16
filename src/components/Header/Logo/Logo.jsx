import React from 'react';
import {Link} from 'react-router-dom';
import style from './Logo.module.css';
import logo from '../../../img/logo.svg';

export const Logo = (props) => (
  <Link to="/" className={style.container}>
    <img className={style.logo} src={logo} alt="To home page"></img>
  </Link>
);
