import React from 'react';
import style from './Comments.module.css';
import PostDate from '../../Main/List/Post/PostDate/PostDate';
import Markdown from 'markdown-to-jsx';

const Comments = ({data, loading}) => {
  return (
    <div className={style.Comments}>
      <ul className={style.list}>
        {loading ? (<div>Loading...</div>) :
          data.map((item, i) => {
            return (
              <li className={style.item} key={i}>
                <h3 className={style.author}>{item.author}</h3>
                <Markdown className={style.comment}>{item.body}</Markdown>
                <PostDate dateTime={item.created} />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Comments;
