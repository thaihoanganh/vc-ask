import { useForm } from "react-hook-form";
import { useAppSelector } from "@shared/hooks/redux";
import { useHistory } from "react-router";

export const useAuth = () => {
  const auth = useAppSelector((state) => state.auth);

  return {
    user: auth.data,
  };
};

export const useLogin = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginForm = {
    username: {
      register: register("username", {
        required: "Tên đăng nhập không được bỏ trống",
        minLength: { value: 6, message: "Tên tài khoản phải có ít nhất 6 ký tự" },
      }),
      errorMessage: errors.username && errors.username.message,
    },
    password: {
      register: register("password", {
        required: "Mật khẩu không được bỏ trống",
        minLength: { value: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" },
      }),
      errorMessage: errors.password && errors.password.message,
    },
  };

  const loginSubmit = handleSubmit((data) => console.log(data));

  const onHandleClickOutsideForm = () => {
    return history.push("/");
  };

  return {
    loginForm,
    loginSubmit,
    onHandleClickOutsideForm,
  };
};
