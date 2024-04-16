import React from 'react';
import {createPortal} from 'react-dom';
import protoTypes from 'prop-types';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './assets/close.svg';
import Markdown from 'markdown-to-jsx';

const Modal = ({data}) => {
  const {title, author, selftext: markdown} = data;
  return createPortal(
    <div className={style.overlay}>
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
        <button className={style.close}>
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
