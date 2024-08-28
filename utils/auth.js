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
}

export async function createUser(email, password) {
  await authenticateUser(email, password, "signUp");
}

export async function loginUser(email, password) {
  await authenticateUser(email, password, "signInWithPassword");
}
