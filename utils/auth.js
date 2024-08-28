import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

async function authenticateUser(email, password, mode) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);

  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticateUser(email, password, "signUp");
}

export function loginUser(email, password) {
  return authenticateUser(email, password, "signInWithPassword");
}
