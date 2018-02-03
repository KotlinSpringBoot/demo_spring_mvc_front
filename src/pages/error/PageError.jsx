import { Component } from 'react';
import { withRouter } from 'react-router';
import './PageError.less';

export default withRouter(class PageError extends Component {

  componentDidMount() {
    const { router } = this.props;
    this.timer = setTimeout(() => { router.push('/home'); }, 1000);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return (
      <div className="page-error">
        这里是错误页，即将跳转到首页
      </div>
    );
  }
});
