import style from './Main.module.css';
import Tabs from './Tabs/Tabs';
import List from './List/List';

export const Main = () => (
  <main className={style.main}>
    <Tabs />
    <List />
  </main>
);
