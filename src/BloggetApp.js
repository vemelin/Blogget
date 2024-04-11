import {Header} from './components/Header/Header';
import Main from './components/Main';
import {tokenContext} from './components/context/tokenContext';
import useToken from './hooks/token';

function BloggetApp() {
  const [token, delToken] = useToken('');
  const {Provider} = tokenContext;
  return (
    <Provider value={{token, delToken}}>
      <Header />
      <Main />
    </Provider>
  );
}

export default BloggetApp;
