import React from 'react';
import style from './Button.module.css';
import {ReactComponent as DeleteIcon} from '../assets/delete.svg';

const Button = ({control}) => {
  return (
    <button className={style[`${control}`]}>
      { control === 'delete' && <DeleteIcon /> }
    </button>
  );
};

export default Button;
