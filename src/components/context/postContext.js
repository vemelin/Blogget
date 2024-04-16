import {React} from 'react';
import propTypes from 'prop-types';
import {useRedditPost} from '../../hooks/useRedditPost';

export const postContext = React.createContext({});

export const PostContextProvider = ({children}) => {
  const [posts, loading] = useRedditPost([]);
  console.log(posts, loading);
  return (
    <postContext.Provider value={{posts, loading}}>
      {children}
    </postContext.Provider>
  );
};

PostContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};
