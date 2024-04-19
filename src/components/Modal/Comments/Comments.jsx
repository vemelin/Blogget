import React from 'react';
import style from './Comments.module.css';
import PostDate from '../../Main/List/Post/PostDate/PostDate';

const Comments = ({data}) => {
  console.log(data);
  return (
    <div className={style.Comments}>
      {data.map((item, i) => {
        return (
          <ul className="list" key={i}>
            <li className="item">
              <h3 className="author" size={18}>
                {item['author_fullnam']}
              </h3>
              <p className="comment" size={14}>
                {item.body}
              </p>
              <PostDate dateTime={item.created} />
            </li>
          </ul>
        );
      }
      )}
    </div>
  );
};

export default Comments;
