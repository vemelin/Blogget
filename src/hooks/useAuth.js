import axios from 'axios';
import {useEffect, useState} from 'react';
import {URL} from '../components/api/const';
import {useSelector, useDispatch} from 'react-redux';
import {deleteToken} from '../store/tokenReducer';
import {
  authRequest,
  authRequestSuccess,
  authRequestError,
} from '../store/auth/action';

const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector(state => state.getToken.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    dispatch(authRequest());

    axios(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(({data: {name, icon_img: iconImg}}) => {
      const img = iconImg.replace(/\?.*$/, '');
      const data = {name, img};
      setAuth(data);
      dispatch(authRequestSuccess(data));
    }).catch((error) => {
      console.error(error);
      setAuth({});
      dispatch(deleteToken());
      dispatch(authRequestError(error));
    });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};

export default useAuth;
