import React from 'react';
import style from './Authorization.module.css';
import loginBtnIcon from '../../../img/login.svg'

export const Authorization = ({auth, ...rest}) => {
  console.log(auth);
  return (
    <button className={style.button}>
      { auth.isAuthorized ? 
          auth.name : 
          <img 
            src={loginBtnIcon} 
            alt='Authorization' 
            className={style.authImg} 
          />
      }
    </button>
  )
};