import {Component} from 'react';
import './HttpTestRecord.less';

import $ from 'jquery'

const Table = require('uxcore-table');

export default class HttpTestRecord extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {
      currentUser: ""
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/api/currentUser',
      type: "GET",//方法类型
      success: function (res) {
        this.setState({
          currentUser: res
        })
      }.bind(this),
      error: function (err) {
        console.log('login error => ')
        console.dir(err)

      }.bind(this)
    })

  }

  render() {
    const columns = [
      {dataKey: 'id', title: 'ID', width: 70, ordered: true},
      {dataKey: 'author', title: '作者', width: 100, ordered: true},
      {dataKey: 'method', title: '请求方法', width: 70},
      {dataKey: 'url', title: 'URL', width: 500},
    ];

    const fetchUrl = '/httptestrecord/findAllUxCore';

    const renderProps = {
      height: 600,
      pageSize: 7,
      pagerSizeOptions: [10, 20, 30, 40],
      showSearch: true,
      showPagerTotal: true,
      actionColumn: {
        edit() {
        },
        del() {
        },
      },
      className: 'kuma-uxtable-split-line',
      fetchParams: {},
      showColumnPicker: false,
      fetchUrl,
      jsxcolumns: columns,
      addRowClassName: function (rowData) {
        return 'multiline';
      }
    };
    return (
      <div>
        当前用户: {this.state.currentUser}
        <Table {...renderProps} />
      </div>
    );
  }
}
