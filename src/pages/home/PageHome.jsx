import {Component, LogicRender} from 'refast';
import {withRouter} from 'react-router';
import './PageHome.less';
import * as logic from './logic';
import LoginForm from "../../components/login-form/LoginForm";

class PageHome extends Component {

  constructor(props) {
    super(props, logic);
  }


  render() {
    return (
      <div className="page-home">
        <LoginForm/>
      </div>
    );
  }
}

export default withRouter(PageHome);
