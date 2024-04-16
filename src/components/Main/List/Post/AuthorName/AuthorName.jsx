import React from 'react';
import style from './AuthorName.module.css';

const AuthorName = ({authorName}) => {
  return (
    <a className={style.linkAuthor} href='#author'>{authorName}</a>
  );
};

export default AuthorName;
