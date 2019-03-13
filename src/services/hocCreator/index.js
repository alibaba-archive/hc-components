import React from 'react';
import {GModal} from '../../components/modal';
import {DataSet} from '../../components/dataSet';

export class HocCreator {
  _modals = [];

  /**
   * modalOption = {
   *  // 对话框的配置
   *  modalProps,
   *  // 对话框打开类型
   *  modalType,
   *  // 独立打开
   *  standalone,
   *  // 子组件的属性
   *  childProps
   * }
   */
  getModalComponent(Widget, modalOption, richProps) {
    const modalType = modalOption.modalType || 'open';
    // 有richProps说明是一个动态数据的组件
    if (richProps) {
      Widget = this.getRichComponent(Widget, richProps);
    }
    const option = Object.assign({
      content: (<Widget {...modalOption.childProps} />),
    }, modalOption.modalProps);

    const modal = GModal[modalType](option);

    // 多个对话框可以叠加
    if (modalOption.standalone) {
      this._modals.push(modal);
    } else {
      // 否则把之前的对话框干掉，只显示当前的
      this._modals[0] && this._modals[0].destroy();
      this._modals[0] = modal;
    }
    return modal;
  }

  destroy() {
    const modal = this._modals.pop();
    modal && modal.destroy();
  }

  getRichComponent(Widget, richProps) {
    class RichWidget extends React.PureComponent {
      getRealInstance() {
        return this._wrappedComponent;
      }

      handleResolve(v, params) {
        this._wrappedComponent.handleResolve(v, params);
      }

      render() {
        if (richProps.childProps) {
          Object.assign(richProps.childProps, this.props);
        }
        return (<DataSet
          ref={inst => this._wrappedComponent = inst}
          {...richProps}>
          <Widget />
        </DataSet>);
      }
    }
    return RichWidget;
  }
}
