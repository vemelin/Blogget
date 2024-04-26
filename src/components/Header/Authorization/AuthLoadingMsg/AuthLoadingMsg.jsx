import React from 'react';
import style from './AuthLoadingMsg.module.css';
import ScaleLoader from 'react-spinners/ScaleLoader';

const AuthLoadingMsg = () => {
  return (
    <div className={style.AuthLoadingMsg}>
      <ScaleLoader color='#cc6633' css={{display: 'block'}} size={30} />
    </div>
  );
};

export default AuthLoadingMsg;
