import {useEffect, useState} from 'react';
import {URL} from '../components/api/const';
import {useSelector} from 'react-redux';
import {deleteToken} from '../store/tokenReducer';

const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector(state => state.getToken.token);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then((response) => {
      if (response.status === 401) {
        throw new Error(response.status);
      }
      return response.json();
    }).then(({name, icon_img: iconImg}) => {
      const img = iconImg.replace(/\?.*$/, '');
      setAuth({name, img});
    }).catch((err) => {
      console.err(err);
      setAuth({});
      deleteToken();
    });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};

export default useAuth;
