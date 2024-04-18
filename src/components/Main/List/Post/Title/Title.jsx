import {React, useState} from 'react';
import style from './Title.module.css';
import Text from '../../../../../UI/Text/Text';
import Modal from '../../../../Modal/Modal';

const Title = ({data}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Text
        onClick={() => {
          setModalOpen(true);
        }}
        As="a"
        className={style.linkPost}
        size={18}
        tsize={24}
        href={'#author'}
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
