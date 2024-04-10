import React from 'react';
import noPhoto from './assets/placeholder.jpeg';
import style from './Post.module.css';
import PropTypes from 'prop-types';

import Image from './Image/Image';
import Title from './Title/Title';
import Rating from './Rating/Rating';
import Button from './Button/Button';
import PostDate from './PostDate/PostDate';
import AuthorName from './AuthorName/AuthorName';

/* eslint-disable react/no-unknown-property */

const Post = ({postData}) => {
  // const {title, author, ups, date} = postData;

  return (
    postData.map(data => {
      return (
        <li className={style.post} key={data.id}>
          <Image src={noPhoto} title={data.title} />
          <div className={style.content}>
            <Title title={data.title} />
            <AuthorName authorName={data.author} />
            <Button control={'delete'}/>
          </div>
          <div className={style.rating}>
            <Button control={'up'} />
            <Rating label={data.ups} />
            <Button control={'down'}/>
          </div>
          <PostDate dateTime={data.date} />
        </li>
      );
    })
  );
};

Post.PropTypes = {
  postData: PropTypes.object,
};

export default Post;
