import React from 'react';
import style from './Authorization.module.css';
import {ReactSVG} from 'react-svg';
import loginBtnIcon from '../../../img/login.svg';
/* eslint-disable */
export const Authorization = ({auth, ...rest}) => {
  return (
    <button className={style.button}>
      { auth.isAuthorized ? 
          auth.name : 
            <ReactSVG 
              src={loginBtnIcon} 
              alt='Authorization' 
              className={style.authImg}  
              />
      }
    </button>
  )
};