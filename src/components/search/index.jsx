import React from 'react';
import PropTypes from 'prop-types';
import AutoComplete from 'antd/lib/auto-complete';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';

/**
 * Search搜索组件
 */
export class Search extends React.PureComponent {
  static propTypes = {
    getResolver: PropTypes.func,
    defaultValue: PropTypes.string,
    dataSource: PropTypes.array,
    options: PropTypes.array,
    rowKey: PropTypes.string,
    renderItem: PropTypes.func,
    labelKey: PropTypes.string,
    onChange: PropTypes.func,
    mode: PropTypes.string,
    onSelect: PropTypes.func,
    noSearch: PropTypes.bool,
    style: PropTypes.object,
    delay: PropTypes.number,
    params: PropTypes.object
  }

  static defaultProps = {
    rowKey: 'id',
    labelKey: 'value',
    dataSource: []
  }
  // 把数据存入dataSource使组件可以通过ref拿到原始数据；
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.dataSource,
      select: {
        value: props.defaultValue,
        dataSource: props.options ? props.options : props.dataSource.map(item => (<AutoComplete.Option key={item[props.rowKey]}>{this.renderOption(item)}</AutoComplete.Option>))
      }
    };
    if (props.getResolver) {
      this.getOptions(props.getResolver(null, this.props.params), props.defaultValue);
    }
  }

  find(condition) {
    return this.state.dataSource.find(condition);
  }

  renderOption(item) {
    const {labelKey, renderItem} = this.props;
    if (renderItem) {
      return renderItem(item);
    } else {
      return item[labelKey];
    }
  }

  getOptions(resolver, value) {
    const {rowKey} = this.props;
    return resolver.then(ret => {
      const nextState = {
        dataSource: ret.dataSource,
        select: Object.assign({}, ret, {
          dataSource: ret.dataSource.map(item => (<AutoComplete.Option key={item[rowKey]}>{this.renderOption(item)}</AutoComplete.Option>))
        })
      };
      if (value) {
        nextState.select.value = value;
      }
      this.setState(nextState);
    });
  }
  /**
   * @param {string} value-输入框的内容
   * @param {} params
   */
  handleSearch = (value, params) => {
    const select = Object.assign({}, this.state.select, {value: value});
    if (!this.props.noSearch && this.props.getResolver) {
      this.getOptions(this.props.getResolver(value, params));
    } else {
      this.setState({select: select});
    }
  }

  render() {
    const style = this.props.style || {};
    const onSelect = this.props.onSelect;
    const InputSearch = this.props.noSearch ? null : (<Input suffix={<Icon type="search" />} />);
    style.width = style.width || 240;
    style.height = style.height || 32;
    return (<AutoComplete
      style={style}
      allowClear={true}
      {...this.props}
      {...this.state.select}
      filterOption={(inputValue, option) => {
        return inputValue === option.key || option.props.children.indexOf(inputValue) > -1;
      }}
      onSearch={() => {
        const delay = this.props.delay;
        if (delay) {
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            this.handleSearch();
          }, delay);
        } else {
          this.handleSearch();
        }
      }}
      onSelect={(v, o) => {
        onSelect && onSelect(v, o);
        const select = Object.assign({}, this.state.select, {value: v});
        this.setState({select: select});
      }}
    >{InputSearch}</AutoComplete>);
  }
}
