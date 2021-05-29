import React from "react";

import { useLogin } from "@modules/auth";

import Button from "@components/atoms/Button";
import Input from "@components/atoms/Input";
import View from "@components/atoms/View";
import Text from "@components/atoms/Text";

import Modal from "@components/molecules/Modal";
import { Form, FormControl } from "@components/molecules/Form";


const LoginPage: React.FC = () => {
  const { loginForm, loginSubmit, onHandleClickOutsideForm } = useLogin();

  return (
    <Modal onClickOutside={onHandleClickOutsideForm}>
      <View className="p-8 rounded" color="primary" bordered>
        <div className="m-2 p-2 text-center">
          <Text as="h1" className="font-semibold text-3xl">
            VC-ASK
          </Text>
          <Text as="h3" className="m-2 font-semibold text-xl" color="secondary">
            Ask me anything
          </Text>
        </div>
        <Form autoComplete="off" onSubmit={loginSubmit}>
          <FormControl label="Tên tài khoản" errorMessage={loginForm.username.errorMessage}>
            <Input
              name="username"
              onChange={loginForm.username.register.onChange}
              ref={loginForm.username.register.ref}
              fullWidth
            />
          </FormControl>
          <FormControl label="Mật khẩu" errorMessage={loginForm.password.errorMessage}>
            <Input
              type="password"
              name="password"
              onChange={loginForm.password.register.onChange}
              ref={loginForm.password.register.ref}
              fullWidth
            />
          </FormControl>
          <div className="p-2">
            <Button type="submit" fullWidth>
              Đăng Nhập
            </Button>
          </div>
        </Form>
      </View>
    </Modal>
  );
};

export default LoginPage;
