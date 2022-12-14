import { Module } from "vuex";
import { GlobalDataProps } from ".";

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

const user: Module<UserProps, GlobalDataProps> = {
  mutations: {
    login(state) {
      state.isLogin = true;
      state.userName = "alines";
    },
    logout(state) {
      state.isLogin = false;
    },
  },
};

export default user;
