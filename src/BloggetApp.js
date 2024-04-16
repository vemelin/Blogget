import {Header} from './components/Header/Header';
import Main from './components/Main';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';

function BloggetApp() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <Header />
        <Main />
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default BloggetApp;
