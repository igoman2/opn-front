import axios from "axios";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User } from "../types";

export interface AuthState {
  user: User | {};
  token: string | null;
  isLoggedIn: () => boolean;
  signup: (user: User) => void;
  signin: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist((set, get) => ({
      user: {},
      token: null,
      isLoggedIn: () => !!get().token,
      signup: async (user: User) => {
        await axios
          .post("http://localhost:3030/auth/signup", {
            username: user.username,
            password: user.password,
          })
          .then(function (response) {
            return response;
          })
          .catch(function (error) {
            throw new Error(error.response.data.message);
          });
      },
      signin: async (user: User) => {
        const resp = await axios
          .post("http://localhost:3030/auth/signin", {
            username: user.username,
            password: user.password,
          })
          .then(function (response) {
            set({ token: response.data.accessToken });
            set({
              user: {
                username: user.username,
              },
            });
            return response;
          })
          .catch(function (error) {
            throw new Error(error.response.data.message);
          });
      },
      logout: () => {
        console.log("!");
        set({ token: null });
        set({
          user: {},
        });
      },
    }))
  )
);
