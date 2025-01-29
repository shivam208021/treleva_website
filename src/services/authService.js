// authService.js
const AuthService = {
    isAuthenticated: () => {
      return !!localStorage.getItem("treleva_token");
    },
    login: (token) => {
      localStorage.setItem("treleva_token", token);
    },
    logout: () => {
      localStorage.removeItem("treleva_token");
    },
  };
  
  export default AuthService;
  