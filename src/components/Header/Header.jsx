import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.module.css';
import {Layout} from '../Layout/Layout';
import {Logo} from './Logo/Logo';
import {Title} from './Title/Title';
import {Search} from './Search/Search';
import {Authorization} from './Authorization/Authorization';

export const Header = ({token}) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Title />
        <Search />
        <Authorization token = {token}/>
      </div>
    </Layout>
  </header>
);

Header.PropTypes = {
  token: PropTypes.string,
};
