import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
    twoFA: false,
  }),
  actions: {
    async login(username, password) {
      if (username === "werknemer1" && password === "werknemer1") {
        this.user = { name: "Roos Hartog", email: "roos-hartog@gmail.com" };
        this.token = "fake-jwt-token";
        this.isAuthenticated = true;

        if (username === "werknemer1") {
          this.twoFA = true;
        } else {
          this.twoFA = false;
        }

        return true;
      }
      return false;
    },
    async verify2FA(code) {
      if (code === "12345") {
        this.twoFA = false;
        return true;
      }
      return false;
    },
    logout() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
      this.twoFA = false;
    }
  },
  persist: true
});