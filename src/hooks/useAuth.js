import {useEffect, useState} from 'react';
import {URL} from '../components/api/const';
import {useSelector} from 'react-redux';

const useAuth = () => {
  const [auth, setAuth] = useState({});
  // const {token, delToken} = useContext(tokenContext);
  const token = useSelector(state => state.token);

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
      // delToken();
    });
    console.log(token);
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};

export default useAuth;
