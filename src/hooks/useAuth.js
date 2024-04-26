import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {authLogout, authRequestAsync} from '../store/auth/action';

const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.getToken.token);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => dispatch(authLogout());

  return [auth, loading, clearAuth];
};

export default useAuth;
