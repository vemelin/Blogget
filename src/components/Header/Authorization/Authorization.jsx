import {useState} from 'react';
import React from 'react';
import style from './Authorization.module.css';
import SVG_URL from '../../../img/login.svg';
import {ReactSVG} from 'react-svg';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import AuthLoadingMsg from './AuthLoadingMsg/AuthLoadingMsg';

import Text from '../../../UI/Text/Text';
import urlAuth from '../../api/auth';
import useAuth from '../../../hooks/useAuth';


export const Authorization = () => {
  const [isOpen, setOpen] = useState(false);

  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear Token and delete it from localStorage
    dispatch(deleteToken());
    clearAuth();
    // redirect to the home page
    window.location.href = '/';
  };

  return (
    <div className={style.container}>
      {loading ? (
        <AuthLoadingMsg />
      ) : auth.name ? (
        <button className={style.btn} onClick={() => setOpen(!isOpen)}>
          <img className={style.img} src={auth.img} title={auth.name} />
          <Text As="span">{auth.name}</Text>
          {isOpen && (
            <button className={style.logout} onClick={handleLogout}>
              LogOut
            </button>
          )}
        </button>
      ) : (
        <Text As="a" className={style.authLink} href={urlAuth}>
          <ReactSVG
            src={SVG_URL}
            alt="Authorization"
            className={style.authImg}
          />
        </Text>
      )}
    </div>
  );
};
