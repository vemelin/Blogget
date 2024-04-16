import React from 'react';
import style from './Image.module.css';

const Image = ({src, title}) => (
  <img src={src} className={style.img} alt={title} />
);

export default Image;
