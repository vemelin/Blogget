import {useEffect, useState, useContext} from 'react';
import {URL} from '../components/api/const';
import {tokenContext} from '../context/tokenContext';

const getArticleDetails = (id) => {
  const {token} = useContext(tokenContext);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${URL}/comments/${id}.json?limit=10`,
          {
            headers: {
              Authorization: `bearer ${token}`,
              accept: 'application/json',
            },
          }
        );

        const data = await response.json();
        setComments(data[1].data.children.map(child => child.data));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Reddit posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return {comments, loading};
};

export default getArticleDetails;
