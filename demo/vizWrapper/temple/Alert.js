export default {
  list: [{
    name: 'basic - success',
    data: {
      message: 'Success Text',
      type: 'success'
    }
  }, {
    name: 'basic - info',
    data: {
      message: 'Info Text',
      type: 'info'
    }
  }, {
    name: 'basic - warning',
    data: {
      message: 'Warning Text',
      type: 'Warning'
    }
  }, {
    name: 'basic - error',
    data: {
      message: 'Error Text',
      type: 'Error'
    }
  }, {
    name: 'closable - warning',
    data: {
      message: 'Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text',
      type: 'warning',
      closable: true
    }
  }, {
    name: 'closable - error',
    data: {
      message: 'Error Text',
      description: 'Error Description Error Description Error Description Error Description Error Description Error Description',
      type: 'error',
      closable: true
    }
  }, {
    name: 'basic - close text',
    data: {
      message: 'Info Text',
      type: 'info',
      closeText: 'Close Now'
    }
  }, {
    name: 'icon - close text',
    data: {
      message: 'Success Text',
      type: 'success',
      closeText: 'Close Now',
      showIcon: true
    }
  }, {
    name: 'banner - closable',
    data: {
      message: 'Info Text',
      type: 'info',
      closable: true,
      showIcon: true,
      banner: true
    }
  }]
};

