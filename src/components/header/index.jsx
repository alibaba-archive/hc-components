import React from 'react';
import PropTypes from 'prop-types';

import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Dropdown from 'antd/lib/dropdown';
import Spin from 'antd/lib/spin';
import Avatar from 'antd/lib/avatar';

import {HeaderSearch} from '../headerSearch';

import './index.less';

import {localeContext} from '../../core/localeContext';

@localeContext('Header', {
  searchPlaceholder: '站内搜索',
  profile: '个人中心',
  setting: '设置',
  logout: '退出登录'
})
export class Header extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    route: PropTypes.object,
    routes: PropTypes.array,
    subMenus: PropTypes.object,
    menu: PropTypes.any,
    brand: PropTypes.object,
    Link: PropTypes.any,
    Menu: PropTypes.any,
    orderKeys: PropTypes.array,
    getResolvePath: PropTypes.func,

    collapsed: PropTypes.bool,
    onCollapse: PropTypes.func,
    avatar: PropTypes.string,
    nick: PropTypes.string,
    noSider: PropTypes.bool,
    loading: PropTypes.element,
    theme: PropTypes.string,
    onChange: PropTypes.func,
    hasSetting: PropTypes.bool,
    search: PropTypes.any
  }

  static defaultProps = {
    className: ''
  }

  constructor(props) {
    super(props);
  }

  toggleClick = () => {
    this
      .props
      .onCollapse(!this.props.collapsed);

    this._resizeTimer = setTimeout(() => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', true, false);
      window.dispatchEvent(event);
    }, 600);
  }

  componentWillUnmount() {
    clearTimeout(this._resizeTimer);
  }

  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e);
  }

  render() {
    const {loading, className, hasSetting, search, style, collapsed, nick, noSider, avatar, theme, route, routes, subMenus, menu, brand, Link, orderKeys, getResolvePath} = this.props;
    const IMenu = this.props.Menu;
    return (
      <Layout.Header className={'j-com-header ' + className + (theme ? ' j-com-header-' + theme : '')} style={style} >
        {loading}
        {noSider ? null : (<Icon
          className='j-header-trigger'
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggleClick} />)}
        <div className='j-header-right' style={{display: nick === false ? 'none' : ''}}>
          {search !== undefined ? search : (<HeaderSearch
            className='j-header-action j-header-search'
            placeholder={this.getLocale('searchPlaceholder')}
            dataSource={[]}
            onSearch={v => this.handleChange({value: v, key: 'search'})}
            onPressEnter={v => this.handleChange({value: v, key: 'search'})}
          />)
          }{nick ? (
            <Dropdown
              overlay={(
                <Menu className='j-header-menu' selectedKeys={[]} onClick={this.handleChange}>
                  <Menu.Item key="profile"><Icon type="user" />{this.getLocale('profile')}</Menu.Item>
                  {hasSetting ? (<Menu.Item key="setting"><Icon type="setting" />{this.getLocale('setting')}</Menu.Item>) : null}
                  <Menu.Divider />
                  <Menu.Item key="logout"><Icon type="logout" />{this.getLocale('logout')}</Menu.Item>
                </Menu>
              )}>
              <span className='j-header-action j-header-account'>
                {avatar && (<Avatar size="small" className='j-header-avatar' src={avatar} />)} {nick}
              </span>
            </Dropdown>
          ) : (<Spin size="small" style={{marginLeft: 8}} />)}
        </div>
        {IMenu ? (<IMenu style={{marginLeft: noSider ? 70 : 0}} route={route} routes={routes} subMenus={subMenus} menu={menu} orderKeys={orderKeys} Link={Link} getResolvePath={getResolvePath} brand={brand} />) : null}
      </Layout.Header>
    );
  }
}
