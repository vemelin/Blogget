import React from 'react';
import style from './List.module.css';
import {Post} from './Post/Post';

export const List = (props) => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Author Name',
    ups: 24,
    date: '2024-04-08T00:45:00.000Z',
  };

  return (
    <ul className={style.list}>
      <Post postData={postData}/>
    </ul>
  );
};
