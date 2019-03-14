import React from 'react';
import PropTypes from 'prop-types';
import {formatLayer} from '../../../src';

import pageSetting from './pageSetting';

export default class Page extends React.Component {
  static routeOptions =  {
    title: 'CreateByPage',
    value: 2
  };

  static propTypes = {
    setting: PropTypes.object
  }

  static contextTypes = {
    layer: PropTypes.object
  }

  render() {
    return (<div className="o-scene o-scene-page">
      {this.context.layer.render(formatLayer(pageSetting))}
    </div>);
  }
}


