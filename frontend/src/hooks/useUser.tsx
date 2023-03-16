import { useState } from "react";
import { UserModel } from "../models/user";
import * as Api from "../network/api";
import { LoginFields } from "../pages/LoginPage";
import {SignUpFields} from '../pages/SignUpPage'

export function useUser() {
  const [user, setUser] = useState<UserModel | null>(null);
  const [error, setError] = useState("");

  async function login(data: LoginFields) {
    try {
      const user: UserModel = await Api.login(data);
      setUser(user);
    } catch (error) {
      console.error(error);
      setUser(null);
      setError("Invalid log in");
    }
  }

  async function signUp(data: SignUpFields) {
    try {
      const user: UserModel = await Api.signUp(data);
      setUser(user);
    } catch (error) {
      console.error(error);
      setUser(null);
      setError("Faild creating user");
    }
  }

  async function logout() {
    try {
      await Api.logOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  }

  async function getLoggedUser() {
    try {
      const userLogged = await Api.getLoggedUser();
      setUser(userLogged);
    } catch (error) {
      console.error(error);
      setUser(null);
      setError("No user logged");
    }
  }

  return { user, error, login, logout, signUp, getLoggedUser };
}
