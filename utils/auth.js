import axios from "axios";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

async function createUser(email, password) {
  axios.post(apiUrl, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
}
