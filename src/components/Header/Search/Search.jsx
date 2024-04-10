import React from 'react';
import style from './Search.module.css';
import {ReactComponent as SearchIcon} from '../../../img/search.svg';

export const Search = props => (
  <form className={style.form}>
    <input type='search' className={style.search} />
    <button className={style.button}>
      <SearchIcon className={style.svg} />
    </button>
  </form>
);
