import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../utils/storage";

export const useLogin = () => {
  const [email, setEmail] = useState<string>(
    () => storage.get<string>("email") ?? "",
  );
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(
    () => storage.get<string>("email") !== null,
  );
  const navigate = useNavigate();
  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") return;
    if (remember) storage.set("email", email);
    else storage.remove("email");
    setPassword("");
    navigate("/");
  };
  return {
    email,
    changeEmail: setEmail,
    password,
    changePassword: setPassword,
    remember,
    changeRemember: setRemember,
    handleLogin,
  };
};
