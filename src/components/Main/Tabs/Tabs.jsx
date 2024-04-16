import React from 'react';
import style from './Tabs.module.css';

export const Tabs = (props) => (
  <ul className={style.list}>
    <li>
      <a href="/">Main</a>
    </li>
    <li>
      <a href="/">Viewed</a>
    </li>
    <li>
      <a href="/">Saved</a>
    </li>
    <li>
      <a href="/">My Publications</a>
    </li>
  </ul>
);
