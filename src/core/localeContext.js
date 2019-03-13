import propTypes from 'prop-types';

export function localeContext(name, defaultLocale) {
  return BaseComponent => {
    BaseComponent.contextTypes = Object.assign(BaseComponent.contextTypes || {}, {antLocale: propTypes.object, app: propTypes.object});

    BaseComponent.prototype.getLocale = function (key) {
      let locale;
      if (this.context.locale) {
        locale = this.context.locale;
      } else {
        locale = this.context.locale = Object.assign(this.context.antLocale && this.context.antLocale[name] || {}, defaultLocale, this.props && this.props.locale);
      }
      if (key) {
        return locale[key];
      } else {
        return locale;
      }
    };
    return BaseComponent;
  };
}
