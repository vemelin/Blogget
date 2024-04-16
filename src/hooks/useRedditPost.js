import {useState, useEffect} from 'react';
// import {URL} from '../components/api/const';

export const useRedditPost = () => {
  const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setPosts(['test', 'pest']);
      // setLoading(['loading']);
    };
    return fetchPost();
    // // Fetch Reddit posts
    // const fetchPosts = async () => {
    //   try {
    //     const response = await fetch(`${URL}/best.json?limit=10`);
    //     console.log(response);
    //     const data = await response.json();
    //     console.log(response);
    //     setPosts(data.data.children.map(child => child.data));
    //     setLoading(false);
    //   } catch (error) {
    //     console.error('Error fetching Reddit posts:', error);
    //   }
    // };

    // fetchPosts();
  }, []);

  return [posts];
};
