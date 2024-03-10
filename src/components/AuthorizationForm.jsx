import React, {useState, Option, UserOutlined} from 'react';
import {Button, Cascader, Form, Input, Select, LockOutlined} from "antd";

const AuthorizationForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="authorization"
      className="authorization-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите Логин!',
          },
        ]}
      >
        <Input
        //   prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Логин" 
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите пароль!',
          },
        ]}
      >
        <Input
        //   prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>

      <Form.Item>
        <a className="login-form-forgot" href="">
          Забыл пароль
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Войти
        </Button>
        или <a href="">Зарегистрироваться</a>
      </Form.Item>
    </Form>
  );
};
const ComponentDemo = AuthorizationForm;


export default AuthorizationForm;