import React from 'react';
import PropTypes from 'prop-types';

import Card from 'antd/lib/card';
import Affix from 'antd/lib/affix';
import Icon from 'antd/lib/icon';

import {Link} from 'react-router';
import {BreadCrumb} from '../../components/breadCrumb';
import {GlobalFooter} from '../../components/globalFooter';
import {BasicLayout} from '../basicLayout';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import './index.less';

const styles = {
  root: {
    flexGrow: 1,
  },
  appFrame: {
    minHeight: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px'
  },
  drawerHeaderRight: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px'
  },
  content: {
    flexGrow: 1,
    padding: 0,
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
  iconSelected: {
    color: '#00bfdc',
    background: '#e6f7ff',
    boxShadow: '-1px -1px 1px #c5dff5'
  },
  title: {
    height: 30,
    width: '100%',
    lineHeight: '30px',
    paddingLeft: '10px',
    whiteSpace: 'nowrap',
    wordBreak: 'break-all',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  }
};
export class FlexContentLayout extends BasicLayout {
  static displayName = 'FlexContentLayout';

  static layoutBlocks = {
    Footer: GlobalFooter,
    Link,
    BreadCrumb
  }

  static propTypes = {
    className: PropTypes.string,
    leftTitle: PropTypes.node,
    rightTitle: PropTypes.node,
    drawerStyle: PropTypes.object,
    openLeft: PropTypes.bool,
    openRight: PropTypes.bool,
    hasSider: PropTypes.bool,
    drawerWidth: PropTypes.number,
    zIndex: PropTypes.number,
    affix: PropTypes.bool,
    style: PropTypes.object,
    mainStyle: PropTypes.object,
    contentStyle: PropTypes.object
  }

  static defaultProps = {
    drawerWidth: 200,
    overviewWidth: 250,
    affix: true,
    style: {},
    mainStyle: {}
  }

  constructor(props) {
    super(props);
    const drawerStyle = Object.assign({zIndex: this.props.zIndex || 1000}, props.drawerStyle);
    this.state = {
      openLeft: !!this.props.openLeft,
      openRight: !!this.props.openRight,
      drawerStyle: drawerStyle
    };
  }

  handleLeftDrawer = (open) => {
    if (open === false) {
      this.setState({openLeft: false});
    } else {
      this.setState({openLeft: !this.state.openLeft}); // openProcessor: false
    }
  };

  handleRightDrawer = (open) => {
    if (open === false) {
      this.setState({openRight: false});
    } else {
      this.setState({openRight: !this.state.openRight});
    }
  };

  handleRightDrawerClose = () => {
    this.setState({openRight: false});
  };

  render() {
    const Footer = this.getComponent('Footer');
    const BLink = this.getComponent('Link');
    const BreadCrumb = this.getComponent('BreadCrumb');

    const LeftDrawer = this.getComponent('LeftDrawer');
    const RightDrawer = this.getComponent('RightDrawer');
    const Overview = this.getComponent('Overview');
    const Combox = this.getComponent('Combox');
    const {className, drawerWidth, overviewWidth, leftTitle, rightTitle, affix, style, mainStyle} = this.props;
    const {drawerStyle, openLeft, openRight} = this.state;
    const hasOverview = this.hasComponent('Overview');
    const hasLeftDrawer = this.hasComponent('LeftDrawer');
    const hasRightDrawer = this.hasComponent('RightDrawer');

    const StepConnector = this.getComponent('StepConnector');
    const hasStepConnector = this.hasComponent('StepConnector');

    const beforeDrawer = hasLeftDrawer ? (
      <Drawer
        open={openLeft}
        style={styles.drawerPaper}
        width={drawerWidth}
        containerStyle={drawerStyle}
      >
        <div style={styles.drawerHeader}>
          <div style={styles.title}>{leftTitle}</div>
          <Icon type="left-square-o" onClick={() => this.handleLeftDrawer(false)}  />
        </div>
        <Divider />
        <LeftDrawer Link={BLink} />
      </Drawer>
    ) : null;
    const afterDrawer = hasRightDrawer ? (
      <Drawer
        openSecondary={true}
        open={openRight}
        style={styles.drawerPaper}
        width={drawerWidth}
        containerStyle={drawerStyle}
      >
        <div style={styles.drawerHeaderRight}>
          <Icon type="right-square-o" onClick={() => this.handleRightDrawer(false)} />
          <div style={styles.title}>{rightTitle}</div>
        </div>
        <Divider />
        <RightDrawer Link={BLink} />
      </Drawer>
    ) : null;
    const Head = (<div className="j-elem-iconbox">
      {hasLeftDrawer ? (<Icon type="compass" onClick={this.handleLeftDrawer} style={openLeft ? styles.iconSelected : {}} />) : null}
      {hasRightDrawer ? (<Icon type="appstore-o" onClick={this.handleRightDrawer} style={openRight ? styles.iconSelected : {}} />) : null}
      {hasStepConnector ? (<div className="j-step-connector"><StepConnector /></div>) : null}
      <BreadCrumb Link={BLink} style={{marginLeft: hasLeftDrawer ? 35 : 0, marginRight: hasRightDrawer ? 35 : 0}} />
    </div>);
    return (
      <div className={'j-layout-flexContent ' + className} style={Object.assign(style, styles.root)}>
        {affix ? (<Affix>{Head}</Affix>) : Head}
        <div style={styles.appFrame}>
          {beforeDrawer}
          <main
            style={Object.assign(
              {
                minHeight: document.body.offsetHeight - 107
              },
              styles.content,
              mainStyle,
              openLeft ? {marginLeft: drawerWidth} : styles['contentShift-left'],
              openRight ? {marginRight: drawerWidth} : styles['contentShift-right']
            )}
          >
            <div style={styles.drawerHeader} />
            <Card bordered={false} className="j-content" style={this.props.contentStyle}>
              <div className="j-content-wrap" style={{width: hasOverview ? 'calc(100% - ' + overviewWidth + 'px)' : ''}}>{this.props.viewContent || this.props.children}</div>
              <div  className="j-content-overview" style={{flexBasis: overviewWidth, display: hasOverview ? '' : 'none'}}>
                <Overview />
              </div>
            </Card>
            <Combox />
            <Footer className="j-footer" />
          </main>
          {afterDrawer}
        </div>
      </div>
    );
  }
}
