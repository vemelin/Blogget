import React from 'react';
import style from './List.module.css';
import generateID from '../../../utils/generateID';
import Post from './Post/Post';
import {PostContextProvider} from '../../context/postContext';
import {RedditProvider} from '../../../hooks/RedditProvider';

const List = (props) => {
  const postData = [
    {
      thumbnail: '',
      title: 'Title 1',
      author: 'Author Name 1',
      ups: 24,
      date: '2024-04-08T00:45:00.000Z',
      id: generateID(),
    },
    {
      thumbnail: '',
      title: 'Title 2',
      author: 'Author Name 2',
      ups: 24,
      date: '2024-04-08T00:45:00.000Z',
      id: generateID(),
    },
    {
      thumbnail: '',
      title: 'Title 3',
      author: 'Author Name 3',
      ups: 24,
      date: '2024-04-08T00:45:00.000Z',
      id: generateID(),
    },
    {
      thumbnail: '',
      title: 'Title 4',
      author: 'Author Name 4',
      ups: 24,
      date: '2024-04-08T00:45:00.000Z',
      id: generateID(),
    }
  ];

  return (
    <RedditProvider>
      <PostContextProvider>
        <ul className={style.list}>
          <Post postData={postData}/>
        </ul>
      </PostContextProvider>
    </RedditProvider>
  );
};

export default List;
