import Beatle from 'beatle';
import {versionDetector} from '../src';

import bootstrap from './bootstrap';
import './index.less';

const app = new Beatle({
  store: {},
  name: 'demo',
  routes: require.context('./scenes', true, /index\.(jsx|js)$/),
  ajax: {
    normalize: true,
  }
});

app.ready = bootstrap(
  app,
  () => {
    return Promise.resolve();
  },
  'global_demo_version'
);

app.ready(({versionKey, prefix, dom}) => {
  if ([0, 1].indexOf(window.location.pathname.indexOf(prefix)) > -1) {
    if (versionKey && window.CONFIG && window.CONFIG.VERSION) {
      versionDetector(versionKey, window.CONFIG.VERSION);
    }
    app.run(dom, prefix);
  }
});


