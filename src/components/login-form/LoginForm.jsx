import {Component} from 'react';
import i18n from 'i18n';
import './LoginForm.less';
import $ from 'jquery'

import {router} from 'react-router'

const Button = require('uxcore-button');
const Form = require('uxcore-form');

const {
  InputFormField: Input,
  DateFormField: Date,
  TextAreaFormField: TextArea,
  OtherFormField: Other,
} = Form;

export default class LoginForm extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
  }

  handleSubmit() {
    console.log(this.form.getValues());
    var username = this.form.getValues().values.username
    var password = this.form.getValues().values.password
    $.ajax({
      url: '/login',
      type: "POST",//方法类型
      data: {username: username, password: password},
      success: function (res) {
        console.log('login success => ')
        console.dir(res)
        this.timer = setTimeout(() => {
          location.href = '/#/http_test_record'
        }, 1000);
      }.bind(this),
      error: function (err) {
        console.log('login error => ')
        console.dir(err)

      }.bind(this)
    })


  }

  render() {
    return (
      <div className="mod-login-form">

        <div className='login-title'>登陆界面</div>

        <Form ref={(c) => {
          this.form = c;
        }} className="demo-basic-form">

          <Input jsxname="username" jsxlabel="用户名" jsxplaceholder="请输入用户名"/>
          <Input jsxname="password" jsxlabel="密码" jsxplaceholder="请输入密码"/>
          <Other>
            <Button style={{marginLeft: '88px', marginTop: '16px'}}
                    onClick={() => {
                      this.handleSubmit();
                    }}>确定</Button>
          </Other>
        </Form>
      </div>
    );
  }
}
