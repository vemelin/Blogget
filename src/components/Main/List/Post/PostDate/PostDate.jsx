import React from 'react';
import formateDate from '../../../../../utils/date';
import style from './PostDate.module.css';

const PostDate = ({dateTime}) => {
  return (
    <time className={style.date} >{formateDate(dateTime)}</time>
  );
};

export default PostDate;
