import React, { Component } from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Row,
  Col
} from 'antd';
const FormItem = Form.Item;

class RenderLoginScreen extends Component {
  handleSubmit(e) {
    console.log("Props : ", this.props)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
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
          </Row>
        </FormItem>
      </Form>
    );
  }
}

const LoginScreen = Form.create()(RenderLoginScreen);

export default LoginScreen;