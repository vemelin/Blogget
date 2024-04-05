import React from 'react';
import style from './Button.module.css';

export const Button = ({btnName}) => {
  return <button className={style.button}>{ btnName }</button>
};