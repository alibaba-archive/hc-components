import React from 'react';
import PropTypes from 'prop-types';

import layerConfig from './layerConfig';

export default class Layer extends React.Component {
  static routeOptions =  {
    title: 'CreateByLayer',
    value: 1
  };

  static contextTypes = {
    layer: PropTypes.object
  }

  render() {
    return (<div className="o-scene o-scene-layer" style={{margin: '-10px -20px'}}>
      {this.context.layer.render(layerConfig)}
    </div>);
  }
}


