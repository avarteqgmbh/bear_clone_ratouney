import React, { Component } from 'react';
import { Button, Checkbox, Col, Form, Icon, Input, Row } from 'antd';
import { connect } from 'react-redux';
import { loginRequest } from './../sessions/Actions';

const FormItem = Form.Item;

class RenderLoginForm extends Component {
  handleSubmit(form, onFormSubmit, e) {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        onFormSubmit(values.username, values.password);
      }
    });
  }
  render() {
    const { form, onFormSubmit } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={(e) => { this.handleSubmit(form, onFormSubmit, e); }} className="login-form">
        <Row style={{ align: 'center', textAlign: 'center' }} >
          <Col offset={8} span={6} >
            <h1>Hello there</h1>
          </Col>
        </Row>
        <Row style={{ align: 'center' }} >
          <Col offset={8} span={6} >
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: "What's your name bruh ?" }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="John Doe " />,
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
                <Input
                  prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                  type="password"
                  placeholder="Not John Doe"
                />,
                )}
            </FormItem>
          </Col>
        </Row>
        <FormItem>
          <Row>
            <Col offset={8} span={4}>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue:  true,
              })(
                <Checkbox>Remember me</Checkbox>,
                )}
            </Col>
            <Col>
              <a className="login-form-forgot" href="">Forgot password</a>
            </Col>
          </Row>
          <Row>
            <Col offset={8} >
              <Button
                loading={this.props.loggin}
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: '360px', height: '35px' }}
              >
                Log in
                            </Button>
            </Col>
          </Row>
          <Row>
            <Col offset={8} >
              Or <a href="">register now!</a>
            </Col>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggin: state.SessionReducer.api_login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFormSubmit: (username, password) => {
      dispatch(loginRequest(username, password));
    },
  };
}

const WrappedLoginForm = Form.create()(RenderLoginForm);
const LoginForm = connect(mapStateToProps, mapDispatchToProps)(WrappedLoginForm);

export default LoginForm;
