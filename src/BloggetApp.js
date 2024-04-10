import {Header} from './components/Header/Header';
import Main from './components/Main';
import useToken from './hooks/token';

function BloggetApp() {
  const [token] = useToken('');
  return (
    <>
      <Header token={token}/>
      <Main />
    </>
  );
}

export default BloggetApp;
