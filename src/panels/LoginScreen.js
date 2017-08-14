import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Row,
  Col
} from 'antd';
import LoginUser from './../session/LoginUser';
const FormItem = Form.Item;

class RenderLoginScreen extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      LoginUser(values)
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)} className="login-form">
        <Row style={{ align: 'center' }} >
          <Col offset={8} span={6} >
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: "What's your name bruh ?" }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                )}
            </FormItem>
          </Col>
        </Row>
        <Row style={{ align: 'center' }} >
          <Col offset={8} span={6} >
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Passcode ?' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
            </FormItem>
          </Col>
        </Row>
        <FormItem>
          <Row>
            <Col offset={8} span={4}>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
                )}
            </Col>
            <Col>
              <a className="login-form-forgot" href="">Forgot password</a>
            </Col>
          </Row>
          <Row>
            <Col offset={8} >
              <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '360px', height: '35px' }} >
                Log in
            </Button>
            </Col>
          </Row>
          <Row>
            <Col offset={8} >
              Or <a href="">register now!</a>
            </Col>
            <Col offset={12} >
                {
                  this.props.canfetch === true
                  ? <Link to={"/"} onClick={() => console.log('CLICKED GOTO NOTES')} >
                      <Icon type={"apple"} size='large' />
                      <span className="nav-text">Proceed to Notes</span>
                    </Link>
                  : ''
                }
            </Col>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  let canfetch = ( state.SessionReducer.token !== '' ? true : false)
  return {
      canfetch,
  }
}

const FormLoginScreen = Form.create()(RenderLoginScreen);
const LoginScreen= connect(mapStateToProps)(FormLoginScreen);

export default LoginScreen;