const context = require.context('./', true, /\w+\.js$/);

const exportObj = {};
context
  .keys()
  .forEach(key => {
    if(key.indexOf('./index.js') === -1){
      exportObj[key.split('/').pop().split('.')[0]] = context(key);
    }
  });

export default exportObj;
