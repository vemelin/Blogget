import React from 'react';
import style from './Text.module.css';

const Text = ({label}) => (
  <p className={style.ups} >{label}</p>
);

export default Text;
