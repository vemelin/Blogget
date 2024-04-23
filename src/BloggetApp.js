import {Header} from './components/Header/Header';
import Main from './components/Main';
import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {store} from './store';

function BloggetApp() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Header />
        <Main />
      </AuthContextProvider>
    </Provider>
  );
}

export default BloggetApp;
