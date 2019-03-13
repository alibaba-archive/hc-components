import React from 'react';
import PropTypes from 'prop-types';

export class SimpleLayer extends React.PureComponent {
  static propTypes = {
    components: PropTypes.array,
    LayerItem: PropTypes.any,
    LayerGrid: PropTypes.any,
    style: PropTypes.object
  };

  render() {
    const {components, LayerItem, LayerGrid, style} = this.props;
    return (
      <LayerGrid className="o-layer o-layer-simple" style={style}>
        {components.map((item, index) => {
          return (<LayerItem key={item.key || index} {...item.attrs}  className="o-layer-elem_box" >
            {item && item.component ? (<item.component />) : null}
          </LayerItem>);
        })}
      </LayerGrid>
    );
  }
}
