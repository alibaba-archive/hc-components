import React from 'react';

import Card from 'antd/lib/card';
import {Link} from 'react-router';
import {GlobalFooter} from '../../components/globalFooter';
import {BreadCrumb} from '../../components/breadCrumb';
import {BasicLayout} from '../basicLayout';
import './index.less';

export class ContentLayout extends BasicLayout {
  static displayName = 'ContentLayout';

  static layoutBlocks = {
    Footer: GlobalFooter,
    Link,
    BreadCrumb
  }

  render() {
    const Footer = this.getComponent('Footer');
    const BLink = this.getComponent('Link');
    const BreadCrumb = this.getComponent('BreadCrumb');
    return (
      <div className={'j-layout-content ' + this.props.className} style={this.props.style}>
        <BreadCrumb Link={BLink} />
        <div className="j-content">
          <Card bordered={false}>
            {this.props.viewContent || this.props.children}
          </Card>
        </div>
        <Footer className="j-footer" />
      </div>
    );
  }
}
