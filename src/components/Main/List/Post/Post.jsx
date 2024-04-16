import React from 'react';
import noPhoto from './assets/placeholder.jpeg';
import style from './Post.module.css';
import PropTypes from 'prop-types';

import Image from './Image/Image';
import Title from './Title/Title';
import Text from './Text/Text';
import Button from './Button/Button';
import PostDate from './PostDate/PostDate';
import AuthorName from './AuthorName/AuthorName';

/* eslint-disable react/no-unknown-property */

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      <Image src={noPhoto} title={title} />
      <div className={style.content}>
        <Title title={title} />
        <AuthorName authorName={author} />
        <Button control={'delete'}/>
      </div>
      <div className={style.rating}>
        <Button control={'up'} />
        <Text label={ups} />
        <Button control={'down'}/>
      </div>
      <PostDate dateTime={date} />
    </li>
  );
};

Post.PropTypes = {
  postData: PropTypes.object,
};
