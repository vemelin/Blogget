import React from 'react';
import style from './Search.module.css';
import { ReactSVG } from 'react-svg'
import searchIcon from '../../../img/search.svg'

export const Search = props => {
  return (
    <form className={style.form}>
      <input type='search' className={style.search} />
      <button className={style.button}>
        <ReactSVG src={searchIcon} className={style.svg} />
      </button>
    </form>
  )
}