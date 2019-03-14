/* eslint-disable react/no-deprecated */
import {PropTypes} from 'react';
import _PropTypes from 'prop-types';

const propTypesMap = {};
const overrideMap = {
  instanceOf: true,
  objectOf: true,
  arrayOf: true,
  oneOf: true,
  oneOfType: true,
  shape: true,
  exact: true
};

function hackType(key, propTypes) {
  if (overrideMap[key]) {
    let checker = propTypes[key];
    propTypes[key] = (data) => {
      const result = checker(data);
      result.data = data;
      result.type = key;
      return result;
    };
    propTypes[key].isRequired = (data) => {
      const requiredResult = checker.isRequired(data);
      requiredResult.data = data;
      requiredResult.type = key + 'Required';
      requiredResult.required = true;
      return requiredResult;
    };
  }
  propTypes[key].type = key;
  if (propTypes[key].isRequired) {
    propTypes[key].isRequired.type = key + 'Required';
  }
}
for (let key in PropTypes) {
  hackType(key, PropTypes);

  propTypesMap[key] = {
    type: key
  };
  propTypesMap[key + 'Required'] = {
    type: key,
    required: true
  };
}
for (let key in _PropTypes) {
  hackType(key, _PropTypes);
}

function parseObject(obj) {
  const schema = {
    type: 'object',
    properties: {}
  };
  let type;
  for (let key in obj) {
    type = typeof (obj[key]);
    if (type === 'object') {
      schema.properties[key] = parseObject(obj[key]);
    } else if (type === 'function') {
      if (obj[key].isReactComponent) {
        schema.properties[key] = {
          type: 'any',
          format: 'antd'
        };
      } else {
        schema.properties[key] = {
          type: 'any',
          format: 'func'
        };
      }
    } else {
      schema.properties[key] = {
        type: type
      };
    }
  }
}

export default function schemaParser(component, isRequired) {
  const schema = {
    type: 'object',
    properties: {},
    required: [],
    definitions: {}
  };
  const defaultProps = component.defaultProps || {};
  let item;
  let prop;
  let enums;
  for (let key in component.propTypes) {
    prop = propTypesMap[component.propTypes[key].type];
    if (defaultProps[key] === undefined) {
      item = {
        title: key,
        name: key
      };
    } else {
      item = {
        title: key,
        name: key,
        default: defaultProps[key]
      };
    }
    if (prop.required || isRequired) {
      schema.required.push(key);
    }
    if (overrideMap[prop.type]) {
      switch (prop.type) {
        case 'instanceOf':
        case 'objectOf':
        case 'oneOf':
        case 'arrayOf':
          item.type = 'any';
          item.enum = component.propTypes[key].data;
          break;
        case 'oneOfType':
          enums = component.propTypes[key].data.map(item => {
            return item.type || typeof (item);
          });
          item.type = enums[Math.floor(Math.random(enums.length) * enums.length)];
          break;
        case 'shape':
        case 'exact':
          item.type = 'object';
          item['$ref'] = '#/definitions/' + key;
          schema.definitions[key] = parseObject(component.propTypes[key].data);
          break;
      }
    } else {
      item.type = prop.type;
    }
    schema.properties[key] = item;
  }
  return schema;
}
