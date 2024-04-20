import React, {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import protoTypes from 'prop-types';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './assets/close.svg';
import getArticleDetails from '../../hooks/getArticleDetails';
import Comments from './Comments/Comments';
import FormComments from './FormComments/FormComments';

const Modal = ({data, closeModal}) => {
  // console.log(data.id, data.subreddit);
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
  const {comments, loading} = getArticleDetails(data.id);

  return createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>Comments</h2>
        <Comments data={comments} loading={loading} />
        <FormComments />
        <button className={style.close} onClick={() => closeModal()}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;

Modal.protoTypes = {
  title: protoTypes.string,
  author: protoTypes.string,
  markdown: protoTypes.string,
};
