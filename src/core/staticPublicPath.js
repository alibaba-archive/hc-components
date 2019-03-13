export function staticPublicPath(name, standalone, workspace = 'openad/oa-ui/') {
  /* eslint-disable no-undef,camelcase */
  if (!standalone && window.CONFIG && window.CONFIG.staticPath) {
    __webpack_public_path__ = window.__static_public_path__ = window.CONFIG.staticPath + '/';
  } else {
    if (document.domain.slice(-4) === '.com' && (!window.CONFIG || window.CONFIG.ENV === 'online')) {
      __webpack_public_path__ = window.__static_public_path__ = '//g.alicdn.com/' + workspace + name + '/0.0.1/';
    } else if (document.domain.indexOf('local') !== 0) {
      __webpack_public_path__ = window.__static_public_path__ = '//g-assets.daily.taobao.net/' + workspace + name + '/0.0.1/';
    }
  }
}

