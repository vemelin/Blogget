import {useState, useEffect, createContext, useContext} from 'react';
import propTypes from 'prop-types';
import {URL} from '../components/api/const';
import {useSelector} from 'react-redux';

// Create a context to manage Reddit posts
const RedditContext = createContext();

// Custom hook to access the Reddit context
export const useRedditPost = () => useContext(RedditContext);

export const PostContextProvider = ({children}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector(state => state.token);


  // const token = store.getState();
  console.log(token);

  useEffect(() => {
    // Fetch Reddit posts
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${URL}/best.json?limit=10`, {token} && {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        const data = await response.json();
        setPosts(data.data.children.map(child => child.data));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Reddit posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <RedditContext.Provider value={{posts, loading}}>
      {children}
    </RedditContext.Provider>
  );
};

PostContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};
