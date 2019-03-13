import React from 'react';

import {NavLink} from '../navLink';
import './index.less';

/**
 * data = {
 *  title,
 *  desc,
 *  img
 * }
 */
/* eslint-disable react/prop-types */
export const Exception = ({className, data, links, ...rest}) => {
  return (
    <div className={'j-com-exception ' + className} {...rest}>
      <div className="imgBlock">
        <div
          className="imgEle"
          style={{backgroundImage: `url(${data.img})`}}
        />
      </div>
      <div className="content">
        <h1>{data.title}</h1>
        <div className="desc">{data.desc}</div>
        {links && (<div className="links"><NavLink links={links} /></div>)}
      </div>
    </div>
  );
};
