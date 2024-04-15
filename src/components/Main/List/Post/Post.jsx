import {React} from 'react';
import noPhoto from './assets/placeholder.jpeg';
import style from './Post.module.css';
import propTypes from 'prop-types';

import Image from './Image/Image';
import Title from './Title/Title';
import Rating from './Rating/Rating';
import Button from './Button/Button';
import PostDate from './PostDate/PostDate';
import AuthorName from './AuthorName/AuthorName';

import {useReddit} from '../../../../hooks/RedditProvider';

/* eslint-disable react/no-unknown-property */

const Post = () => {
  const {posts, loading} = useReddit();
  // const [imageLoaded, setImageLoaded] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  const img = document.querySelectorAll('img');
  img.forEach(el => {
    console.log(el.onload);
    if (el.naturalWidth === 0 && el.naturalHeight === 0) {
      // The image does not have a preview
      console.log('test');
    } else {
      console.log(el);
      // The image has a preview
    }
  });

  const handleImageLoad = () => {
    console.log(img);
    // Set imageLoaded to true when the image has finished loading
    // setImageLoaded(true);
  };


  return (
    posts.map(data => (
      <li className={style.post} key={data.id}>
        { posts ? (
              <Image src={data.thumbnail} title={data.title}
                onLoad={handleImageLoad} />
          ) : (
            <Image src={noPhoto} title={data.title} />
          )}
        <div className={style.content}>
          <Title title={data.title} />
          <AuthorName authorName={data.author} />
          <Button control={'delete'}/>
        </div>
        <div className={style.rating}>
          <Button control={'up'} />
          <Rating label={data.ups} />
          <Button control={'down'}/>
        </div>
        <PostDate dateTime={data.created} />
      </li>
    ))
  );
};

Post.propTypes = {
  postData: propTypes.array,
};

export default Post;
