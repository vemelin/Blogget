import React from 'react';
import {Link} from 'react-router-dom';
import style from './Logo.module.css';

import {ReactComponent as LogoImg} from '../../../img/logo.svg';

export const Logo = (props) => (
  <Link to="/" className={style.container}>
    <LogoImg className={style.logo} alt="To home page"/>
  </Link>
);
