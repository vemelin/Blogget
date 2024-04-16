import React from 'react';
import style from './Rating.module.css';

const Rating = ({label}) => (
  <p className={style.ups} >{label}</p>
);

export default Rating;
