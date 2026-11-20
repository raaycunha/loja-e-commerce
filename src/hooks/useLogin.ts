import { useState } from "react";
import { storage } from "../utils/storage";

export const useLogin = () => {
  const [email, setEmail] = useState<string>(
    () => storage.get<string>("email") ?? "",
  );
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(
    () => storage.get<string>("email") !== null,
  );
  const [userLogin, setUserLogin] = useState<boolean>(
    () => storage.get<string>("user-login") === "true",
  );
  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") return;
    if (remember) storage.set("email", email);
    else storage.remove("email");

    storage.set("user-login", true);
    setUserLogin(true);
    setPassword("");

    return true;
  };
  return {
    email,
    password,
    remember,
    changeEmail: setEmail,
    changePassword: setPassword,
    changeRemember: setRemember,
    handleLogin,
    userLogin,
  };
};
