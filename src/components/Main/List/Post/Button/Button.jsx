import React from 'react';
import style from './Button.module.css';
import {ReactSVG} from 'react-svg';
import DeleteIcon from '../assets/delete.svg';

const Button = ({control}) => {
  return (
    <button className={style[`${control}`]}>
      { control === 'delete' && <ReactSVG src={DeleteIcon} /> }
    </button>
  );
};

export default Button;
