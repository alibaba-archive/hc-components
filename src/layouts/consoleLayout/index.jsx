import React from 'react';

import {Link} from 'react-router';
import Layout from 'antd/lib/layout';

import {Sider} from '../../components/sider';
import {Header} from '../../components/header';

import {BasicLayout} from '../basicLayout';
import './index.less';

const COLLAPSED_KEY = 'beatle_console_sidebar';

export class ConsoleLayout extends BasicLayout {
  static displayName = 'ConsoleLayout';

  static layoutBlocks = {
    Header,
    Link,
    Sider
  };

  constructor(props) {
    super(props);
    this.state = {
      inited: true,
      collapsed: window.localStorage && window.localStorage.getItem(COLLAPSED_KEY) === 'true' || false
    };
  }

  render() {
    const collapseCfg = {
      collapsed: this.state.collapsed,
      onCollapse: collapsed => {
        // if (this.state.inited && this.state.collapsed) {
        //   this.setState({inited: false});
        //   return;
        // }
        this.setState({collapsed: collapsed, inited: false});
        window.localStorage && window.localStorage.setItem(COLLAPSED_KEY, collapsed);
      }
    };
    const Sider = this.getComponent('Sider');
    const BLink = this.getComponent('Link');
    const Header = this.getComponent('Header');

    return (
      <div className={'j-layout-console ' + this.props.className} style={this.props.style}>
        <Layout className="ant-layout-has-sider">
          <Sider {...collapseCfg} Link={BLink} />
          <Layout>
            <Header {...collapseCfg} />
            <Layout.Content>
              {this.props.viewContent || this.props.children}
            </Layout.Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
