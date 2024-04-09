import React, {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import assignID from '../../../utils/generateID';
import PropTypes from 'prop-types';
import debounceRaf from '../../../utils/debounce';

// Icons
import {ReactComponent as ArrowIcon} from './assets/arrow.svg';
import {ReactComponent as Home} from './assets/home.svg';
import {ReactComponent as Viewed} from './assets/eye.svg';
import {ReactComponent as Save} from './assets/save.svg';
import {ReactComponent as Posts} from './assets/post.svg';

const LIST = [
  {value: 'Main', Icon: Home},
  {value: 'Viewed', Icon: Viewed},
  {value: 'Saved', Icon: Save},
  {value: 'My Publications', Icon: Posts},
].map(assignID);

const Tabs = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDropDown, setDropDown] = useState(false);

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
    window.addEventListener('resize', debounceResize());
    return () => {
      window.removeEventListener('resize', debounceResize());
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setOpen(!isOpen)}>
          Add Item
            <ArrowIcon />
          </button>
        </div>
      )}
      {isOpen || !isDropDown && (
        <ul className={style.list} onClick={() => setOpen(false)}>
          {LIST.map(({value, id, Icon}) => (
            <li className={style.item} key={id}>
              <button className={style.btn} onClick={() => {}}>
                {value}
                {Icon && <Icon />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.PropTypes = {
  LIST: PropTypes.array
};

export default Tabs;
