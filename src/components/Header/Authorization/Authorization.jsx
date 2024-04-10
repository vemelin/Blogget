import {useEffect, useState} from 'react';
import {URL} from '../../../components/api/const';
import React from 'react';
import PropTypes from 'prop-types';
import style from './Authorization.module.css';
import SVG_URL from '../../../img/login.svg';
import {ReactSVG} from 'react-svg';

import Text from '../../../UI/Text/Text';
import urlAuth from '../../api/auth';

/* eslint-disable */
export const Authorization = ({token}) => {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    if (!token) return;
    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '')
        setAuth({name, img})
      }
      )
      .catch(() => {
        console.err(err);
        setAuth({});
      });
  }, [token]);

  return (
    <div className={style.container}>
      { auth.name ? 
          <button className={style.btn}>
            <img className={style.img} src={auth.img} title={auth.name} />
            <Text As='span'>{auth.name}</Text>
          </button> : 
            <Text As='a' className={style.authLink} href={urlAuth}>
              <ReactSVG src={SVG_URL}
                alt='Authorization' 
                className={style.authImg}  
                />
            </Text>
      }
    </div>
  )
};

Authorization.PropTypes = {
  token: PropTypes.string,
}