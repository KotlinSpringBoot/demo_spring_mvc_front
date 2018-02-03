import {withRouter} from 'react-router';
import i18n from 'i18n';
import {Component} from 'refast';
import logic from './logic';
import './PageHttpTestRecord.less';
import HttpTestRecord from "../../components/http_test_record/HttpTestRecord";

import $ from 'jquery'



class PageHttpTestRecord extends Component {

  constructor(props) {
    super(props, logic);
  }

  componentWillMount() {
    const router = this.props.router;

    $.ajax({
      url: '/api/isLogin',
      type: 'GET',
      success: function (res) {
        console.log('res => ')
        console.log(JSON.stringify(res))
        console.dir(res)
        if (res == true) {

        } else {
          router.push('/home');
        }
      }.bind(this),
      error: function (err) {
        console.log('err => ')
        console.log(JSON.stringify(err))
        console.dir(err)
        router.push('/home');

      }.bind(this)

    })


  }

  render() {
    return (
      <div className="page-http_test_record">
        <HttpTestRecord/>
      </div>
    );
  }
}

export default withRouter(PageHttpTestRecord);
