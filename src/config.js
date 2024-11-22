export const config = {
  loginUrl: process.env.BLS_LOGIN_URL,
  credentials: {
    email: process.env.BLS_EMAIL,
    password: process.env.BLS_PASSWORD
  },
  selectors: {
    emailField: '#Email',
    passwordField: '#Password',
    submitButton: 'button[type="submit"]',
    rememberMe: '#RememberMe'
  }
};