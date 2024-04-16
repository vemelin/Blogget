import {useState, React} from 'react';
import style from './Title.module.css';
import Text from '../../../../../UI/Text/Text';

const Title = ({title}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <Text
      As='h2'
      className={style.title} >
      <Text
        As='a'
        className={style.linkPost}
        size={18} tsize={24}
        href={'#author'}
        onClick={() => setModalOpen(true)}>
        {title}
      </Text>
      {isModalOpen && <div>Test</div>}
    </Text>
  );
};

export default Title;
