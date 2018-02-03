import {Component, LogicRender} from 'refast';
import {withRouter} from 'react-router';
import './PageHome.less';
import * as logic from './logic';
import LoginForm from "../../components/login-form/LoginForm";

class PageHome extends Component {

  constructor(props) {
    super(props, logic);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.dispatch(['updateState', 'search'], {workNo: e.target.value});
  }

  render() {
    const {state: {data, workNo, empty, loading}, handleChange} = this;
    return (
      <div className="page-home">
        {/*<input*/}
        {/*className="kuma-input"*/}
        {/*onChange={handleChange}*/}
        {/*placeholder="请输入员工工号"*/}
        {/*value={workNo}*/}
        {/*/>*/}
        {/*<SearchWord workNo={workNo}/>*/}
        {/*<LogicRender empty={empty} loading={loading}>*/}
        {/*<SearchData data={data}/>*/}
        {/*</LogicRender>*/}
        {/*<User/>*/}
        <LoginForm/>
      </div>
    );
  }
}

export default withRouter(PageHome);
