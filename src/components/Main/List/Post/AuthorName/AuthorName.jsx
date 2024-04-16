import React from 'react';
import style from './AuthorName.module.css';
import Text from '../../../../../UI/Text/Text';

const AuthorName = ({authorName}) => {
  return (
    // <a className={style.linkAuthor} href='#author'>{authorName}</a>
    <Text
      As='a'
      color='orange'
      size={12}
      tsize={14}
      className={style.linkAuthor}
      href={'#author'}>{authorName}</Text>
  );
};

export default AuthorName;
