import React from 'react';
import noPhoto from './assets/placeholder.jpeg';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import formateDate from '../../../../utils/date';

/* eslint-disable react/no-unknown-property */

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  console.log(title, author, ups, date);

  return (
    <li className={style.post}>
      <img src={noPhoto} className={style.img} alt={title} />
      <div className={style.content}>
        <h2 className={style.title}>
          <a href="#post" className={style.linkPost}>{title}</a>
        </h2>
        <a className={style.linkAuthor} href='#author'>{author}</a>
      </div>
      <div className={style.rating}>
        <button className={style.up} arial-label="Increase Rate"></button>
        <p className={style.ups}>{ups}</p>
        <button className={style.down}></button>
      </div>
      <time className={style.date} dateTime={date}>{formateDate(date)}</time>
    </li>
  );
};

Post.PropTypes = {
  postData: PropTypes.object,
};
