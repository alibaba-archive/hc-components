import React from 'react';
import PropTypes from 'prop-types';
import l20n from 'hc-l20n';

import Beatle from 'beatle';

import Modal from 'antd/lib/modal';

import DocumentTitle from 'react-document-title';
import {bootstrap, GModal, LoadingBar, getLayout, BreadCrumb, Sider, Layer, Cascader, HocCreator, RouteHelper, Resizer} from '../../src';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const brand = {
  title: 'Demo',
  logo: '//img.alicdn.com/tfs/TB14dINRpXXXXcyXXXXXXXXXXXX-64-64.png?t=1517212583908'
};
const footer = {
  links: [
    {
      title: '帮助',
      href: ''
    }, {
      title: '隐私',
      href: ''
    }, {
      title: '条款',
      href: '',
      blankTarget: true
    }
  ],
  copyright: '© 2009-2018 Aliyun.com 版权所有 ICP证：浙B2-20080101'
};


export default class Application extends React.PureComponent {
  static contextTypes = {
    app: PropTypes.object,
    router: PropTypes.object,
    location: PropTypes.object,
  }

  static propTypes = {
    children: PropTypes.element,
    orderKeys: PropTypes.array,
    appRoutes: PropTypes.array,
    brand: PropTypes.object,
    subMenus: PropTypes.object
  }

  static defaultProps = {
    orderKeys: [],
    appRoutes: [],
    brand: {},
    subMenus: {}
  }

  static childContextTypes = {
    navs: PropTypes.array,
    l20n: PropTypes.object,
    layer: PropTypes.object,
    subMenus: PropTypes.object,
    cascader: PropTypes.object,
    resizer: PropTypes.object,
    hocCreator: PropTypes.object,
    routeHelper: PropTypes.object,
    brand: PropTypes.object,
    footer: PropTypes.object
  }

  getChildContext() {
    if (this._childContext) {
      this._childContext.navs = this.props.children ? BreadCrumb.parse(this.props.children.props.route, this.props.subMenus) : [];
      return this._childContext;
    } else {
      return this._childContext = {
        brand: this.props.brand || brand,
        footer: footer,
        l20n: l20n,
        navs: this.props.children ? BreadCrumb.parse(this.props.children.props.route, this.props.subMenus) : [],
        subMenus: this.props.subMenus,
        layer: new Layer(this.context),
        resizer: new Resizer(),
        cascader: new Cascader(),
        hocCreator: new HocCreator(),
        routeHelper: new RouteHelper(this.context)
      };
    }
  }

  constructor(props, context) {
    super(props, context);

    const {orderKeys, appRoutes, subMenus} = props;
    const {app} = context;
    window.a = app;
    this._layoutOption = {
      // Link组件
      Link: Beatle.Link,
      // Sider组件
      components: {
        Sider: {
          props: {
            orderKeys: orderKeys,
            Link: Beatle.Link,
            getResolvePath: Beatle.getResolvePath,
            ref: inst => {
              if (inst && !app._orderRoutes) {
                app._orderRoutes = inst.state.routes;
              }
            },
            routes: app.getRoutes()[0].childRoutes || [],
            subMenus: subMenus,
            width: 230,
            collapsedWidth: 60,
            flex: true,
            menu: {
              // theme: 'light',
              inlineIndent: 15
            },
            brand: this.props.brand || brand
          },
          getProps: () => {
            const route = this.props.children && this.props.children.props.route;
            return {
              route: route
            };
          }
        },
        Header: {
          props: {
            Link: ({to, children}) => (<a href={to}>{children}</a>),
            Menu: Sider,
            route: {
              path: bootstrap.getResolvePath(context.app)
            },
            subMenus: {},
            orderKeys: [],
            menu: {
              mode: 'horizontal'
            },
            brand: null,
            nick: '游客'
          },
          getProps: () => {
            return {
              routes: appRoutes
            };
          }
        }
      }
    };
  }

  getRouteTitle(route) {
    let title = route && route.component && route.component.routeOptions.title || '';
    if (React.isValidElement(title)) {
      const arr = [];
      title.props.children.forEach(item => {
        if (!React.isValidElement(item)) {
          arr.push(item);
        }
      });
      title = arr.join('-');
    }
    return title + ' - ';
  }

  render() {
    const viewContent = this.props.children;
    const route = viewContent && viewContent.props.route;
    return (
      <DocumentTitle title={this.getRouteTitle(route) + 'insight'}>
        <div className="j-scene-application">
          <LoadingBar
            style={{position: 'fixed', height: 2, top: 48, zIndex: 999, backgroundColor: '#20C1EA'}}
            updateTime={100}
            maxProgress={95}
            progressIncrease={10}
          />
          <div className="j-scene-wrapper">
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              {getLayout({
                layoutOption: this._layoutOption,
                layout: 'ConsoleLayout',
                route: route
              }, viewContent)}
            </MuiThemeProvider>
            <GModal width={650} component={Modal} />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
