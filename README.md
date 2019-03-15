```javascript
(function () {
  const CONFIG = window.CONFIG || {};
  /* eslint-disable no-undef,camelcase */
  if (!CONFIG.standalone && CONFIG.staticPath) {
    __webpack_public_path__ = window.__static_public_path__ = CONFIG.staticPath + '/';
  } else {
    if (document.domain.slice(-4) === '.com' && (CONFIG.ENV === 'online')) {
      __webpack_public_path__ = window.__static_public_path__ = '//g.alicdn.com/openad/oa-ui/' +  CONFIG.name + '/0.0.1/';
    } else if (document.domain.indexOf('local') !== 0) {
      __webpack_public_path__ = window.__static_public_path__ = '//g-assets.daily.taobao.net/openad/oa-ui/' +  CONFIG.name + '/0.0.1/';
    }
  }
})();

```