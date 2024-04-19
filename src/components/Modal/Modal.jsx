import React, {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import protoTypes from 'prop-types';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './assets/close.svg';
import Markdown from 'markdown-to-jsx';
import getArticleDetails from '../../hooks/getArticleDetails';
import Comments from './Comments/Comments';

const Modal = ({data, closeModal}) => {
  // console.log(data.id, data.subreddit);

  const {title, author, selftext: markdown} = data;
  const overlayRef = useRef(null);
  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', e => e.keyCode === 27 && closeModal());
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Get Post Details
  const {comments} = getArticleDetails(data);

  return createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.content}>
          <Markdown
            options={{
              overrides: {
                a: {
                  props: {
                    target: '_blank',
                  }
                }
              }
            }}
          >{markdown}</Markdown>
        </div>
        <p className={style.author}>{author}</p>
        <Comments data={comments} />
        <button
          className={style.close}
          onClick={() => closeModal()}
        >
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

export default Modal;

Modal.protoTypes = {
  title: protoTypes.string,
  author: protoTypes.string,
  markdown: protoTypes.string,
};
