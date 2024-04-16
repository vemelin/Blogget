import React from 'react';
import style from './List.module.css';
// import generateID from '../../../utils/generateID';
import Post from './Post/Post';
import {PostContextProvider} from '../../../context/postContext';

const List = () => {
  return (
    <PostContextProvider>
      <ul className={style.list}>
        <Post/>
      </ul>
    </PostContextProvider>
  );
};

export default List;
