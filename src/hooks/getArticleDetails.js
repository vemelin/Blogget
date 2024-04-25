/* eslint-disable max-len */
import {useEffect, useState} from 'react';
import {URL} from '../components/api/const';
import {useSelector} from 'react-redux';

const getArticleDetails = (get) => {
  const token = useSelector(state => state.getToken.token);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = get;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response =
          await fetch(`${URL}/comments/${id}.json?limit=10`,
            (!token) ? {
              headers: {
                Authorization: `bearer ${token}`,
              },
            } : {}
          );

        const data = await response.json();
        console.log(data);
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

// const Snoowrap = require('snoowrap');

// const reddit = new Snoowrap({
//   userAgent: 'Chrome/51.0.2704.103 Safari/537.36', // Provide a unique User-Agent header
//   clientId: 'dC_YaA1hEtMDxR9XRUo6kw',
//   clientSecret: `Xwew3Y8aF6fysRLjxjJzF69wyE3OeA`,
//   username: 'vemelin@gmail.com',
//   password: 'your_reddit_password'
// });

// // Get a specific Reddit post by its ID
// reddit.getSubmission('post_id').expandReplies({limit: Infinity, depth: Infinity}).then(post => {
//   // Access the comments property of the post
//   const comments = post.comments;

//   // Loop through the comments
//   comments.forEach(comment => {
//     // Output the comment body
//     console.log(comment.body);
//   });
// }).catch(error => {
//   console.error('Error retrieving post:', error);
// });

// const getArticleDetails = (get) => {
//   const {token} = useContext(tokenContext);
//   const [comments, setComments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const {subreddit, id} = get;

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response =
//           await fetch(`${URL}/r/${subreddit}/comments/${id}.json?limit=10`,
//             {
//               headers: {
//                 'Authorization': `bearer ${token}`,
//                 'Content-Type': 'application/json'
//               },
//             });

//         const data = await response.json();
//         setComments(data[1].data.children.map(child => child.data));
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching Reddit posts:', error);
//       }
//     };
//     fetchPosts();
//   }, []);

//   return {comments, loading};
// };

// export default getArticleDetails;
