import React from 'react';
import style from './Layout.module.css';
import ProptTypes from 'prop-types';
/* eslint-disable */
export const Layout = ({children}) => {
  return (
    <div className={style.container}>{children}</div>
  )
};

Layout.ProptTypes = {
  children: ProptTypes.oneOfType([
    ProptTypes.string,
    ProptTypes.object,
    ProptTypes.array,
  ]),
};