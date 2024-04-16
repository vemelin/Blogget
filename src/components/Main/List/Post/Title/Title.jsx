import React from 'react';
import style from './Title.module.css';

const Title = ({title}) => {
  return (
    <h2 className={style.title}>
      <a href="#post" className={style.linkPost}>{title}</a>
    </h2>
  );
};

export default Title;
