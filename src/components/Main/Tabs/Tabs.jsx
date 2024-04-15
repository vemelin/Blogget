import React, {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import assignID from '../../../utils/generateID';
import propTypes from 'prop-types';
import debounceRaf from '../../../utils/debounce';

import Text from '../../../UI/Text/Text';

// Icons
import {ReactComponent as ArrowIcon} from './assets/arrow.svg';
import {ReactComponent as Home} from './assets/home_last.svg';
import {ReactComponent as Top} from './assets/top.svg';
import {ReactComponent as Best} from './assets/best.svg';
import {ReactComponent as Hotest} from './assets/hot.svg';

const LIST = [
  {value: 'Main', Icon: Home},
  {value: 'Top', Icon: Top},
  {value: 'Best', Icon: Best},
  {value: 'Hotest', Icon: Hotest},
].map(assignID);

const Tabs = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDropDown, setDropDown] = useState(false);
  const [seletedItem, setSelected] = useState('');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setOpen(!isOpen)}>
            {seletedItem ? seletedItem : 'Select Menu'}
            <ArrowIcon />
          </button>
        </div>
      )}
      {(isOpen || !isDropDown) && (
        <ul className={style.list} onClick={() => setOpen(false)}>
          {LIST.map(({value, id, Icon}) => (
            <Text As='li'
              className={style.item}
              key={id}
              weight='medium' >
              <button
                className={style.btn}
                onClick={() => setSelected([value])}>
                {value}
                {Icon && <Icon />}
              </button>
            </Text>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  LIST: propTypes.array
};

export default Tabs;

/*
  <Text As='li' className={style.item} key={id} >
  <Text As='button'
    className={style.btn}
    onClick={() => setSelected([value])}>
    {value}
    {Icon && <Icon />}
  </Text>
  </Text>
*/
