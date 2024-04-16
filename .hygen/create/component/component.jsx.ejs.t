---
to: <%= absPath %>/<%= component_name %>.jsx
---

import React from 'react';
import style from './<%= component_name %>.module.css';

const <%= component_name %> = () => {
  return (
    <div className={style.<%= component_name %>}></div>
  );
};

export default <%= component_name %>;
