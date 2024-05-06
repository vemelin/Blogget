import {useEffect, useState} from 'react';
import {URL} from '../components/api/const';
import {useSelector} from 'react-redux';

const useRedditPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector(state => state.getToken.token);

  // console.log(token);

  // 'User-Agent': 'reddit-oauth/1.1.1 by aihamh',
  // 'Authorization': `bearer ${token}`,
  // 'Accept': 'application/json',

  useEffect(() => {
    // Fetch Reddit posts
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${URL}/best.json?limit=10`, {
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

  return [posts, loading];
};

export default useRedditPost;
