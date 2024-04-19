import {React, useRef, useState} from 'react';
import style from './FormComments.module.css';
import Text from '../../../UI/Text/Text';

const FormComments = () => {
  const textAreaRef = useRef(null);
  const [getText, setText] = useState('');
  const [isFormOpen, setFormOpen] = useState(false);

  // Temporary
  getText !== '' ? console.log(getText) : '';

  return (
    <div>
      <Text
        As="a"
        className={style.authLink}
        href="#"
        onClick={() => setFormOpen(true)}
      >
        Add New Comment
      </Text>
      {isFormOpen && (
        <form className={style.form}>
          <h3>Authorization Name</h3>
          <textarea
            className={style.textarea}
            autoFocus={true}
            ref={textAreaRef}
          ></textarea>
          <button
            className={style.btn}
            onClick={(e) => {
              e.preventDefault();
              setFormOpen(false);
              return setText(textAreaRef.current?.value);
            }}
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default FormComments;
