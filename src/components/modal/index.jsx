import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'antd/lib/modal';

export class GModal extends React.PureComponent {
  static propTypes = {
    component: PropTypes.any,
    width: PropTypes.any
  }

  static defaultProps = {
    component: Modal
  }

  constructor(props) {
    super(props);

    this.state = {
      activeKeys: [],
      timestamp: +new Date().getTime(),
      modals: {}
    };

    props.component.open = config => {
      config.key = config.key || (+new Date().getTime());
      config.width = config.width || this.props.width;
      this.applyChange(config, 'add');

      return {
        destroy: () => {
          this.applyChange(config, 'delete');
        },
        closeModal: () => {
          this.applyChange(config, 'delete');
        }
      };
    };
  }

  applyChange(config, operate) {
    const {modals, activeKeys} = this.state;
    switch (operate) {
      case 'add':
        config.onOk = this.getAction(config.onOk, config);
        config.onCancel = this.getAction(config.onCancel, config);
        if (config.visible === undefined) {
          config.visible = true;
        }
        modals[config.key] = config;
        activeKeys.push(config.key);
        this.setState({
          timestamp: +new Date().getTime()
        });
        break;
      case 'update':
        modals[config.key] = Object.assign({}, modals[config.key], config);
        var idx = activeKeys.indexOf(config.key);
        if (idx) {
          activeKeys.splice(idx, 1);
        }
        activeKeys.push(config.key);
        this.setState({
          timestamp: +new Date().getTime()
        });
        break;
      case 'delete':
        delete modals[config.key];
        activeKeys.pop();
        this.setState({
          timestamp: +new Date().getTime()
        });
        break;
      default:
        break;
    }
  }

  getAction(actionFn, config) {
    const closeModal = () => {
      this.applyChange(config, 'delete');
    };
    return () => {
      if (actionFn) {
        const ret = actionFn(closeModal);
        if (ret && ret.then) {
          this.applyChange({key: config.key, confirmLoading: true}, 'update');
          ret.then(() => {
            // It's unnecessary to set loading=false, for the Modal will be unmounted after
            // close. this.update({   key: config.key,   confirmLoading: false });
            closeModal();
          }, () => {
            this.applyChange({key: config.key, confirmLoading: false}, 'update');
          });
        } else if (ret !== false) {
          if (this.state.modals[config.key]) {
            closeModal();
          }
        }
      } else {
        closeModal();
      }
    };
  }

  render() {
    const modals = this.state.modals;
    return (
      <div>
        {Object
          .keys(modals)
          .map(key => {
            return (
              <this.props.component {...modals[key]} key={key}>
                <div className={`${modals[key].prefixCls || 'j-com-modal'}-body-wrapper`}>{modals[key].content}</div>
              </this.props.component>
            );
          })}
      </div>
    );
  }
}
