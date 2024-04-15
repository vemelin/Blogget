import {Header} from './components/Header/Header';
import Main from './components/Main';
import {AuthContextProvider} from './components/context/authContext';
import {TokenContextProvider} from './components/context/tokenContext';

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
