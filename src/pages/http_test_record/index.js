
export default {
  path: 'http_test_record',
  title: 'http_test_record',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./PageHttpTestRecord'));
    }, 'http_test_record');
  },
};
