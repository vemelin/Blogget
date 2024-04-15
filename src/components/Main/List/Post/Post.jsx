import React from 'react';
import noPhoto from './assets/placeholder.jpeg';
import style from './Post.module.css';
import propTypes from 'prop-types';

import Image from './Image/Image';
import Title from './Title/Title';
import Rating from './Rating/Rating';
import Button from './Button/Button';
import PostDate from './PostDate/PostDate';
import AuthorName from './AuthorName/AuthorName';

import {useReddit} from '../../../../hooks/RedditProvider';

/* eslint-disable react/no-unknown-property */

const Post = () => {
  // const {title, author, ups, date} = postData;
  const {posts, loading} = useReddit();

  if (loading) {
    return <div>Loading...</div>;
  }

  // const img = document.querySelectorAll('img');
  // img.forEach(el => {
  //   console.log(el.complete);
  //   console.log(el);
  //   // if (!el.complete) {
  //   //   // The image is broken
  //   // }
  // });

  return (
    posts.map(data => {
      return (
        <li className={style.post} key={data.id}>
          { data.thumbnail &&
            data.thumbnail !== 'self' &&
            data.thumbnail !== 'default' ? (
              <Image src={data.thumbnail} title={data.title} />
          ) : (
            <Image src={noPhoto} title={data.title} />
          )}
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
          <PostDate dateTime={data.created} />
        </li>
      );
    })
  );
};

Post.propTypes = {
  postData: propTypes.array,
};

export default Post;
