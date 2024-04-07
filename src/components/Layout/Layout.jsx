import React from 'react';
import style from './Layout.module.css';
/* eslint-disable */
export const Layout = ({children}) => {
  return (
    <div className={style.container}>{children}</div>
  )
};