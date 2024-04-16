import {React} from 'react';
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
  const {posts, loading} = useReddit();

  if (loading) {
    return <div>Loading...</div>;
  }

  // Replace not loaded images with the placeholders
  const img = document.querySelectorAll('img');
  img.forEach(el => {
    if (el.naturalWidth === 0 && el.naturalHeight === 0) {
      // The image does not have a preview
      el.src = noPhoto;
    } else {
      // The image has a preview
    }
  });


  return (
    posts.map(data => (
      <li className={style.post} key={data.id}>
        { posts ? (
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
    ))
  );
};

Post.propTypes = {
  postData: propTypes.array,
};

export default Post;
