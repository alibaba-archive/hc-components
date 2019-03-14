import Beatle from 'beatle';
import {versionDetector, Layer, gallery} from '../src';

import bootstrap from './bootstrap';
import vizWrapper from './vizWrapper';
import './index.less';

const app = new Beatle({
  store: {},
  name: 'demo',
  routes: require.context('./scenes', true, /index\.(jsx|js)$/),
  ajax: {
    normalize: true,
  }
});

app.layer = new Layer({app});
app.ready = bootstrap(
  app,
  () => {
    return app.layer._promise;
  },
  'global_demo_version'
);
app.ready(({versionKey, prefix, dom}) => {
  if ([0, 1].indexOf(window.location.pathname.indexOf(prefix)) > -1) {
    if (versionKey && window.CONFIG && window.CONFIG.VERSION) {
      versionDetector(versionKey, window.CONFIG.VERSION);
    }
    const Application = app.route('/');

    Application.childRoutes = Application.childRoutes.concat(vizWrapper.getRoutes(gallery.components.items.antd.items));
    app.run(dom, prefix);
  }
});


