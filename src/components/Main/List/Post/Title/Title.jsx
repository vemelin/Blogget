import {React, useState} from 'react';
import style from './Title.module.css';
import Text from '../../../../../UI/Text/Text';
import Modal from '../../../../Modal/Modal';

const Title = ({data}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleLogout = () => {
    // window.location.href = '/#author';
    // window.history.pushState('http://localhost:3000', 'Title', '/#author');
  };

  return (
    <div>
      <Text
        onClick={(e) => {
          e.preventDefault();
          setModalOpen(true);
          handleLogout();
        }}
        As="a"
        className={style.linkPost}
        size={18}
        tsize={24}
        href={'#auth'}
      >
        {data.title}
      </Text>
      {isModalOpen && (
        <Modal
          data={data}
          closeModal={() => {
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Title;
