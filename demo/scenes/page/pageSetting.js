export default {
  skeleton: {
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
      componentType: 'hc'
    },
    blocks: [
      {name: 'basic-info'}
    ],
  },
  blocks: [
    {
      name: 'basic-info',
      pt: {
        dataset: {
          dataFilter: (ret) => {
            return ret.data;
          },
          component: {
            cname: 'Alert',
            componentType: 'antd',
            props: {
              message: 'Success Tip',
              description: 'Detailed description and advices about successful copywriting',
              type: 'success',
              showIcon: true
            }
          }
        }
      },
      ds: {
        data: {
          message: 'Success Tip',
          description: 'Detailed description and advices about successful copywriting'
        }
      }
    }
  ]
};
