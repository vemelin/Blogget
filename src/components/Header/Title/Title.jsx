import React from 'react';
import style from './Title.module.css';
import Text from '../../../UI/Text/Text';

export const Title = (props) => (
  <Text
    As='h1'
    size={22}
    tsize={26}
    center
    className={style.heading}
  >Title</Text>
);
