import PropTypes from 'prop-types';
import urllib from 'url';

export class RouteHelper {
  static contextTypes = {
    location: PropTypes.object,
    router: PropTypes.object
  }

  constructor(context) {
    this._fns = [];
    this.context = context;
    this.setState(null, window.location.href);
    context.router.listen((location) => {
      this.context.location = location;
      this.setState(null, window.location.href);
    });
  }

  get location() {
    return this.context.location;
  }

  replace(query) {
    const newLocation = this.context.router.createLocation(this.context.location.pathname);
    newLocation.query = Object.assign(this.context.location.query, query);
    this.context.router.replace(newLocation);
  }

  push(url) {
    this.context.router.push(url);
  }

  watch(watcher, callback) {
    this._fns.push({
      watcher: watcher,
      callback: callback
    });
  }

  unwatch(watcher) {
    const index = this._fns.findIndex(cfg => cfg.watcher === watcher);
    this._fns.splice(index, 1);
  }

  setState(query, url) {
    let newState = {};
    if (url) {
      const u = urllib.parse(url, true);
      Object.assign(newState, u.query);
    }

    if (query) {
      Object.assign(newState, query);
    }

    try {
      let cfg;
      for (let i = 0, len = this._fns.length; i < len; i++) {
        cfg = this._fns[i];
        if (cfg.watcher(newState, this.state)) {
          cfg.callback(newState);
        }
      }
    } catch (e) {
      window.console.error(e);
    }
    this.state = newState;
  }
}
