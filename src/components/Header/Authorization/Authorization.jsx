import React from 'react';
import style from './Authorization.module.css';
// import {ReactComponent as LoginIcon} from '../../../img/login.svg';
import SVG_URL from '../../../img/login.svg';
import {ReactSVG} from 'react-svg';

/* eslint-disable */
export const Authorization = ({auth, ...rest}) => {
  return (
    <button className={style.button}>
      { auth.isAuthorized ? 
          auth.name : 
            <ReactSVG src={SVG_URL}
              alt='Authorization' 
              className={style.authImg}  
              />
      }
    </button>
  )
};