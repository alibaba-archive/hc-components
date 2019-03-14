import Modal from 'antd/lib/modal';
import NavLink from '../../../src';

export default {
  columns: (schema) => {
    const columns = [];
    for (let name in schema.properties) {
      let item = schema.properties[name];
      item.key = item.dataIndex = name;
      item.title = item.title || name;
      if (!item.disabled) {
        // 操作
        if (item.actions) {
          const menus = [];
          const links = [];
          if (Array.isArray(item.actions)) {
            item
              .actions
              .forEach(action => {
                let navItem;
                let actionCallback;
                let name;
                let key;
                if (Object(action) === action) {
                  if (typeof action.action === 'function') {
                    name = action.title || action.name;
                    key = action.name || action.title;
                    actionCallback = action.action;
                  } else {
                    name = action.title || action.name || action.action;
                    key = action.name || action.action || action.title;
  
                    if (action.modal) {
                      const modal = Object(action.modal) === action.modal
                        ? action.modal
                        : {
                          title: action.title || '操作提示',
                          content: '请确认是否继续操作？'
                        }
                      actionCallback = (e, record, cancelCallback) => {
                        const modalInst = Modal.confirm(Object.assign(modal, {
                          maskCloasable: false,
                          onOk: () => {
                            const actionCallback = this.getAction(action.action);
                            return actionCallback && actionCallback(record);
                          },
                          onCancel: cancelCallback
                        }));
  
                        return modalInst;
                      }
                    } else {
                      actionCallback = this.getAction(action.action)
                    }
                  }
                  navItem = {
                    key: key,
                    name: name,
                    action: actionCallback,
                    disabled: action.disabled || false
                  };
                  Object.assign(navItem, action.getProps && action.getProps(record));
                  if (action.isMenu) {
                    menus.push(navItem);
                  } else {
                    links.push(navItem);
                  }
                } else {
                  if (typeof action === 'function') {
                    actionCallback = action;
                    name = new Date().getTime();
                  } else {
                    name = action;
                    actionCallback = this.getAction(action);
                  }
                  navItem = {
                    key: name,
                    name: name,
                    disabled: false,
                    action: actionCallback
                  };
                  links.push(navItem);
                }
              })
          }
          item.render = (text, record) => {
            return <NavLink menus={menus} links={links}/>
          }
        } else {
          if (item.ellipsis) {
            item.className = "td-ellipsis";
            if (item.render) {
              const render = item.render;
              item.render = (text, record) => {
                return (
                  <div className="text-ellipsis" title={text}>{render(text, record)}</div>
                );
              }
            } else {
              item.render = (text) => {
                return (
                  <div className="text-ellipsis" title={text}>{text}</div>
                );
              }
            }
          }
        }
        columns.push(item);
      }
    }
    return columns;
  }
}
