export default {
  layout: {
    cname: 'FlexContentLayout',
    option: {
      props: {
        drawerStyle: {position: 'absolute'}
      },
      components: [
        {
          key: 'BreadCrumb',
          cname: 'BreadCrumb',
          componentType: 'hc',
          contextTypes: ['navs'],
          getProps: (props, context) => {
            return {
              navs: context.navs
            };
          }
        },
        {
          key: 'Footer',
          cname: 'GlobalFooter',
          componentType: 'hc',
          contextTypes: ['footer'],
          getProps: (props, context) => {
            return context.footer;
          }
        }
      ]
    }
  },
  layer: {
    cname: 'SimpleLayer',
    componentType: 'hc',
    components: [
      {
        cname: 'Alert',
        componentType: 'antd',
        props: {
          message: 'Success Tip',
          description: 'Detailed description and advices about successful copywriting',
          type: 'success',
          showIcon: true
        }
      }
    ]
  }
};
