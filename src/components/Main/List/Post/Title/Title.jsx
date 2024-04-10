import React from 'react';
import style from './Title.module.css';
import Text from '../../../../../UI/Text/Text';

const Title = ({title}) => {
  return (
    <Text
      As='h2'
      className={style.title} >
      <Text
        As='a'
        className={style.linkPost}
        size={18} tsize={24}
        href={'#author'}>
        {title}
      </Text>
    </Text>
  );
};

export default Title;
