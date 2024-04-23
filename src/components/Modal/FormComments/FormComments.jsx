import {React, useContext, useRef, useState} from 'react';
import style from './FormComments.module.css';
import Text from '../../../UI/Text/Text';
import {authContext} from '../../../context/authContext.js';
import {useSelector, useDispatch} from 'react-redux';
import {updateComment} from '../../../store/commentReducer';

const FormComments = () => {
  // const store = useStore();
  // const value = store.getState().comment;
  const value = useSelector(state => state.getComment.comment);
  const dispatch = useDispatch();

  const {auth} = useContext(authContext);
  const textAreaRef = useRef(null);
  const [getText, setText] = useState('');
  const [isFormOpen, setFormOpen] = useState(false);

  const handleChange = e => {
    dispatch(updateComment(e.target.value));
  };

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
          <Text As='h3' size={14} tsize={18}>
            {auth.name}
          </Text>
          <textarea
            className={style.textarea}
            autoFocus={true}
            value={value}
            ref={textAreaRef}
            onChange={handleChange}
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
