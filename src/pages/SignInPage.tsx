import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [erroUser, setErroUser] = useState("");
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    const res = await fetch("http://localhost:3000/users");
    const users = await res.json();

    const use = users.find((u: any) => u.email === values.email);

    if (use) {
      if (use.password === values.password) {
        if (use.role == 2 || use.role == undefined) {
          alert("Login Successfully as admin");
          navigate("/admin/products");
        } else {
          alert("Login Successfully as user");
          navigate("/products");
        }
      } else {
        setErroUser("Mật khẩu không đúng");
      }
    } else {
      setErroUser("Tài khoản không tồn tại");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
        <div>{erroUser}</div>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
      <ToastContainer />
    </Form>
  );
};

export default Signin;
