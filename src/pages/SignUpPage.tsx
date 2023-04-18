import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IUser } from "../types/user";
import { useNavigate } from "react-router-dom";

interface IProps {
  onSignup: (user: IUser) => void;
}
const Signup = (props: IProps) => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    props.onSignup(values);
    toast.success("Đăng ký thành công");
    setTimeout(() => {
      navigate("/signin");
    }, 2000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="UserName"
          name="username"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default Signup;
