import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Collapse from 'antd/lib/collapse';
import Input from 'antd/lib/input';
import Tooltip from 'antd/lib/tooltip';
import Icon from 'antd/lib/icon';
import Alert from 'antd/lib/alert';
import {DragItem} from '../dnd/dragItem';

import './index.less';

export class TagSearcher extends Component {
  static propTypes = {
    entityCode: PropTypes.string.isRequired,
    tagCode: PropTypes.string.isRequired,
    keyword: PropTypes.string.isRequired,
    objectList: PropTypes.array.isRequired,
    doFetchTagList: PropTypes.func.isRequired,
    children: PropTypes.any,
    doDrag: PropTypes.func,
    searchPlaceholder: PropTypes.string
  }

  static defaultProps = {
    entityCode: '',
    tagCode: '',
    keyword: '',
    objectList: []
  }

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      entityCode: '',
      tagCode: '',
      objectList: [],
      tagsMap: {},
      dimsMap: {}
    };
    this.handleChange(props.entityCode, props.tagCode, props.objectList);
  }

  componentWillReceiveProps(nextProps) {
    // #! objectList发生变化时因为请求单个entity的tagList #! 只有可能改变entityCode和tagCode, 用来定位
    const mergeProps = {
      entityCode: this.state.entityCode,
      tagCode: this.state.tagCode,
      objectList: this.state.objectList,
      keyword: this.state.keyword
    };
    let keyword = this.state.keyword;
    let hasReceive = true;

    switch (true) {
      case this.props.entityCode !== nextProps.entityCode:
        mergeProps.entityCode = nextProps.entityCode;
        break;
      case this.props.tagCode !== nextProps.tagCode:
        mergeProps.tagCode = nextProps.tagCode;
        break;
      case nextProps.objectList !== this.props.objectList:
        mergeProps.objectList = nextProps.objectList;
        break;
      case this.props.keyword !== nextProps.keyword:
        keyword = '';
        // #! 因为setState是异步的
        this.setState({keyword: ''});
        mergeProps.keyword = nextProps.keyword;
        break;
      default:
        hasReceive = false;
        break;
    }
    if (hasReceive) {
      // #! 搜索时，请求tagList会导致objectList更新
      if (keyword) {
        const [entityCodeOrName] = this
          .state
          .keyword
          .split('.');

        const objectList = nextProps
          .objectList
          .filter(item => item.entityCode.indexOf(entityCodeOrName) > -1 || item.entityName.indexOf(entityCodeOrName) > -1);
        this.handleChange(mergeProps.entityCode, mergeProps.tagCode, objectList);
      } else if (mergeProps.keyword) {
        this.handleSearch(mergeProps.keyword);
      } else {
        this.handleChange(mergeProps.entityCode, mergeProps.tagCode, mergeProps.objectList);
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState;
  }

  getDims(object) {
    // #! entity
    if (object.dims) {
      return object
        .dims
        .map(dim => ({name: dim.dimCode, code: dim.dimId, entityCode: object.entityCode}));
      // #! link
    } else if (object.objects) {
      return object
        .objects
        .map(obj => ({
          name: obj.entityCode + '.' + obj.dims[0].dimCode,
          code: obj.relationshipId,
          entityCode: object.entityCode
        }));
    }
  }

  // #! 展开object或者定位object和tag
  handleChange(entityCode, tagCode, objectList) {
    const tagsMap = {};
    const dimsMap = {};
    const object = entityCode ?
      objectList.find(item => item.entityCode === entityCode) :
      objectList[0];
    let focusItem;
    if (object) {
      // #! 需要定位的元素, 定位到entity
      if (entityCode) {
        focusItem = object;
      }
      if (object.tagList) {
        tagsMap[entityCode] = {
          list: object.tagList
        };
        if (tagCode) {
          // #! 如果有tagCode则是定位到tag
          focusItem = object
            .tagList
            .find(tag => tag.tagCode === tagCode);
          tagsMap[entityCode].tagCode = focusItem ? focusItem.tagCode : '';
        }
      } else if (entityCode) {
        tagsMap[entityCode] = {
          loading: true,
          list: []
        };
        // #! 请求
        this
          .props
          .doFetchTagList(entityCode);
      }
      dimsMap[entityCode] = this.getDims(object);
    }
    if (focusItem) { // undefined表示collaspse的点击
      // 延迟200毫秒后定位
    }
    this.setState({
      tagCode,
      entityCode,
      objectList,
      tagsMap,
      dimsMap
    });
  }

  handleSearch(keyword) {
    const [entityCodeOrName,
      tagCodeOrName] = keyword.split('.');
    const tagsMap = {};
    const dimsMap = {};
    let objectList = this.props.objectList;
    if (entityCodeOrName) {
      objectList = objectList.filter(item => {
        // #! 匹配name或者code
        if (item.entityCode.indexOf(entityCodeOrName) > -1 || item.entityName.indexOf(entityCodeOrName) > -1) {
          if (tagCodeOrName) {
            if (item.tagList) {
              // #! 匹配name或者code
              tagsMap[item.entityCode] = {
                list: item
                  .tagList
                  .filter(tag => tag.tagCode.indexOf(tagCodeOrName) > -1 || tag.tagName.indexOf(tagCodeOrName) > -1)
              };
            } else {
              tagsMap[item.entityCode] = {
                loading: true,
                list: []
              };
              this
                .props
                .doFetchTagList(item.entityCode);
            }
          } else {
            if (item.tagList) {
              tagsMap[item.entityCode] = {
                list: item.tagList
              };
            } else {
              tagsMap[item.entityCode] = {
                loading: true,
                list: []
              };
              this
                .props
                .doFetchTagList(item.entityCode);
            }
            dimsMap[item.entityCode] = this.getDims(item);
          }
          return true;
        } else {
          return false;
        }
      });
    }

    const entityCode = objectList[0] && objectList[0].entityCode;
    const tagCode = tagsMap[entityCode] && tagsMap[entityCode].list.length && tagsMap[entityCode].list[0].tagCode;
    this.setState({entityCode: entityCode, tagCode: tagCode, objectList, tagsMap, dimsMap});
  }

  clearSearch() {
    this.setState({keyword: ''});
    this.handleSearch('');
  }

  render() {
    const {keyword, entityCode, objectList, tagsMap, dimsMap} = this.state;
    // #! 判断是否需要拖拽
    const doDrag = this.props.doDrag;
    let ItemDom = DragItem;
    if (!doDrag) {
      /* eslint-disable no-unused-vars */
      ItemDom = ({children}) => {
        return (<div>{this.props.children}</div>);
      };
    }

    // #! 遍历输出所有object,
    // 展开的object必然有dims，不展开则没有；展开的object必然有tagList（分为空和有列表数据，！！完全找不到则需要发请求去拿），不展开则没有
    // 。 #! handleChange，展开object；handleSearch，搜索object或tag
    return (
      <div className="j-com-tagSearcher">
        <Input.Search
          placeholder={this.props.searchPlaceholder || '使用 实体.标签 进行模糊搜索'}
          value={keyword}
          suffix={keyword ? (<Icon type="close-circle" onClick={() => this.clearSearch()} />) : null}
          onChange={(e) => {
            this.setState({keyword: e.target.value});
          }}
          onSearch={() => this.handleSearch(this.state.keyword)} />
        <div className="j-com-elem-oltList">
          {this.props.keyword ? (<Alert message="通过判定式定位" type="info" closable onClose={() => this.clearSearch()} />) : null}
          <Collapse
            accordion
            activeKey={entityCode}
            onChange={(key) => this.handleChange(key, '', objectList)}>
            {objectList.map(entity => {
              return (
                <Collapse.Panel
                  key={entity.entityCode}
                  header={(
                    <ItemDom key={entity.entityCode} doAction={doDrag} type="entity" data={entity}>
                      <div className="j-com-elem-icon-entity"></div>
                      <span title={`${entity.entityCode}(${entity.entityName})`}>
                        {`${entity.entityCode}(${entity.entityName})`}
                      </span>
                    </ItemDom>
                  )}>
                  <ul>
                    {dimsMap[entity.entityCode] && dimsMap[entity.entityCode].map((dim, index) => {
                      return (
                        <li key={index}>
                          <ItemDom key={dim.code} doAction={doDrag} type="dim" data={dim}>
                            <div className="j-com-elem-icon-dim"></div>
                            <Tooltip
                              placement="right"
                              title={`${entity.entityType === 'object' && '实体' || '关系'}(${entity.entityName})下可用的标签`}>
                              <Icon type="pushpin-o" className="j-com-elem-icon-pushpin-o" />
                            </Tooltip>
                            <span title={dim.name}>
                              {dim.name}
                            </span>
                          </ItemDom>
                        </li>
                      );
                    })}
                  </ul>
                  <ul>
                    {tagsMap[entity.entityCode] && (tagsMap[entity.entityCode].loading ?
                      (
                        <li>
                          <span>正在拉取...</span>
                        </li>
                      ) :
                      tagsMap[entity.entityCode].list.length ?
                        tagsMap[entity.entityCode].list.map((tag, index) => {
                          return (
                            <li key={index}>
                              <ItemDom key={tag.tagCode} doAction={doDrag} type="tag" data={tag}>
                                <div className="j-com-elem-icon-tag"></div>
                                <Tooltip
                                  placement="right"
                                  title={`${entity.entityType === 'object' && '实体' || '关系'}(${entity.entityName})下可用的标签`}>
                                  <Icon type="tag-o" className="j-com-elem-icon-tag-o" />
                                </Tooltip>
                                <span title={`${tag.tagCode}(${tag.tagName})`}>
                                  {`${tag.tagCode}(${tag.tagName})`}
                                </span>
                              </ItemDom>
                            </li>
                          );
                        }) :
                        (
                          <li>
                            <span>无标签</span>
                          </li>
                        ))}
                  </ul>
                </Collapse.Panel>
              );
            })}
          </Collapse>
        </div>
      </div>
    );
  }
}
