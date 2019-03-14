const formatter = {
  options : (schema) => {
    const options = [];
    const properties = schema.properties
      ? schema.properties
      : schema;
    for (let name in properties) {
      let item = properties[name];
      item.key = item.name = name;
      if (!item.disabled) {
        if (item.type === 'object') {
          item.children = formatter.options(item);
        } else if (item.type === 'array') {
          if(Array.isArray(item.items)) {
            item.children = item.items.map(d => {
              d.key = d.name;
              d.title = d.title || d.name;
              d.placeholder = d.placeholder || d.description;
              return d;
            });
          }else{
            item.children = formatter.options(item.items);
          }
        } else {
          item.title = item.title || name;
          item.placeholder = item.placeholder || item.description;
        }
        options.push(item);
      }
    }
    return options;
  }
}

export default formatter;
