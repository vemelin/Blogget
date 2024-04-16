import React from 'react';
import style from './Header.module.css';
import {Layout} from '../Layout/Layout';
import {Logo} from './Logo/Logo';
import {Title} from './Title/Title';
import {Search} from './Search/Search';
import {Authorization} from './Authorization/Authorization';

export const Header = props => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Title />
        <Search />
        <Authorization auth = {{
          name: 'Yahoo',
          isAuthorized: false,
        }}/>
      </div>
    </Layout>
  </header>
);
