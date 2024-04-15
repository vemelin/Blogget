import {useContext, useState} from 'react';
import React from 'react';
import propTypes from 'prop-types';
import style from './Authorization.module.css';
import SVG_URL from '../../../img/login.svg';
import {ReactSVG} from 'react-svg';

import Text from '../../../UI/Text/Text';
import urlAuth from '../../api/auth';
import {tokenContext} from '../../context/tokenContext';
import {authContext} from '../../context/authContext';

export const Authorization = () => {
  const {deleteToken} = useContext(tokenContext);
  const [isOpen, setOpen] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const handleLogout = () => {
    // Clear Token and delete it from localStorage
    deleteToken();
    clearAuth();
    // redirect to the home page
    window.location.href = '/';
  };

  return (
    <div className={style.container}>
      {auth.name ? (
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

Authorization.propTypes = {
  token: propTypes.string,
};
