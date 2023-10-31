import { Header } from 'antd/es/layout/layout';
import React from 'react';
import { FPTEducation } from '../icons/Logo';
import { Button, Typography, Form, Input, Row, Col, Card, Select } from 'antd';
import GoogleButton from 'react-google-button';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Login = () => {
  return (
    <>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #000',
        }}
      >
        <div className='fpt-logo'>
          <FPTEducation />
        </div>
      </Header>
      <Row className='title-login'>
        <Col span={8} offset={4}>
          <Typography.Title level={3}>Đăng nhập</Typography.Title>
        </Col>
      </Row>

      <Row className='form-login'>
        <Col span={8} offset={4}>
          <Card title='Đăng nhập với FEID'>
            <Form
              name='basic'
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <div>
                  <Typography.Text>Tài khoản: </Typography.Text>
                  <Input />
                </div>
              </Form.Item>

              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <div>
                  <Typography.Text>Mật khẩu:</Typography.Text>
                  <Input.Password />
                </div>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button htmlType='submit'>Đăng nhập</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Đăng nhập với @fpt.edu.vn'>
            <Select
              placeholder='Chọn campus'
              onChange={handleChange}
              options={[
                {
                  value: 'HCM',
                  label: 'Hồ Chí Minh',
                },
                {
                  value: 'DN',
                  label: 'Đà Nẵng',
                },
                {
                  value: 'HN',
                  label: 'Hà Nội',
                },
                {
                  value: 'QN',
                  label: 'Quy Nhơn',
                },
                {
                  value: 'CT',
                  label: 'Cần Thơ',
                },
              ]}
            />
            <GoogleButton
              type='light'
              label='Đăng nhập với google'
              className='custom-google-button'
              onClick={() => {
                console.log('Google button clicked');
              }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Login;
