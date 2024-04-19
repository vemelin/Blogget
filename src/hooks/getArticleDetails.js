import {useEffect, useState, useContext} from 'react';
import {URL} from '../components/api/const';
import {tokenContext} from '../context/tokenContext';

const getArticleDetails = (get) => {
  const {token} = useContext(tokenContext);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Reddit posts
    // fetch(`${URL}/comments/${get.id}`, {
    //   headers: {
    //     Authorization: `bearer ${token}`,
    //     accept: 'application/json',
    //   },
    // })
    //   .then((response) => {
    //     if (response.status === 401) {
    //       throw new Error(response.status);
    //     }
    //     return response.json();
    //   })
    //   .then(
    //     ([
    //       {
    //         data: {
    //           children: [{data: post}],
    //         },
    //       },
    //       {
    //         data: {
    //           children,
    //         },
    //       },
    //     ]) => {
    //       const comments = children.map(item => item.data);

    //       setComments([post, comments]);
    //       setLoading(false);
    //     },
    //   )
    //   .catch((err) => {
    //     console.error(err);
    //   });

    const fetchPosts = async () => {
      try {
        // const response = await fetch(`${URL}/best.json?limit=10`);
        const response = await fetch(
          `${URL}/comments/${get.id}.json`,
          {
            headers: {
              Authorization: `bearer ${token}`,
              accept: 'application/json',
            },
          }
        );

        const data = await response.json();

        // setComments(data.data.children.map(child => child.data));
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
