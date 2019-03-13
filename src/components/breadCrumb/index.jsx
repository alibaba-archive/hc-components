import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Breadcrumb from 'antd/lib/breadcrumb';

import {NavLink} from '../navLink';
import './index.less';

export class BreadCrumb extends React.PureComponent {
  static parse = function (route, subRoutes) {
    const navs = [];
    if (route) {
      navs.push({
        text: route.title
      });
      if (route.navKey && subRoutes[route.navKey]) {
        navs.unshift({
          text: subRoutes[route.navKey].title || route.navKey
        });
      }
      while ((route = route.parent) && route.title) {
        navs.unshift({link: route.resolvePath, text: route.title});
      }
    }
    return navs;
  }
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,

    Link: PropTypes.any,
    combox: PropTypes.element,
    navs: PropTypes.array,
    links: PropTypes.array,
    extra: PropTypes.any
  }

  static defaultProps = {
    className: '',

    Link: Link,
    navs: []
  }

  render() {
    const {className, style, navs, links, extra} = this.props;

    return (
      <div className={'j-com-breadcrumb ' + className} style={style}>
        <Breadcrumb>
          {navs
            .map((item, index) => {
              if (item.link) {
                return (
                  <Breadcrumb.Item key={index}>
                    <this.props.Link to={item.link}>{item.text}</this.props.Link>
                  </Breadcrumb.Item>
                );
              } else {
                return (
                  <Breadcrumb.Item key={index}>
                    {item.text}
                  </Breadcrumb.Item>
                );
              }
            })}
          {links || extra ? (<Breadcrumb.Item className="j-breadcrumb-extra">
            {links && <NavLink links={links} />}
            {extra}
          </Breadcrumb.Item>) : null}
        </Breadcrumb>
        {this.props.combox}
      </div>
    );
  }
}

