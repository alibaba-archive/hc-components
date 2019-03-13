import React from 'react';

import ReactDOM from 'react-dom';
import Clipboard from 'clipboard';
import message from 'antd/lib/message';
import Button from 'antd/lib/button';
import {localeContext} from '../../core/localeContext';

@localeContext('CopyLogger', {
  copy: '复制',
  copySuccess: '复制成功'
})
export class CopyLogger extends React.PureComponent {
  componentDidMount() {
    /**
     * copy:
     * see: https://clipboardjs.com/
     */
    this._clipboard = new Clipboard(ReactDOM.findDOMNode(this.refs.trigger));
    
    this._clipboard.on('success', (e) => {
      message.info(this.getLocale().copySuccess)
      e.clearSelection();
    });
  }

  componentWillUnmount(){
    this._clipboard.destroy();
  }
  
  render() {
    const inlineStyle = {
      marginRight: '40px',
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      wordBreak: 'break-all',
      lineHeight: '22px'
    }
    return (
      <div style={{whiteSpace: 'nowrap'}}>
        <Button 
          style={{float: 'right'}}
          ref="trigger" 
          size="small" 
          type="ghost" 
          data-clipboard-text={this.props.rid}
        >{this.getLocale().copy}</Button>
        <span style={inlineStyle}>{this.props.message}</span>
      </div>
    )
  }
}
