import axios from "axios";

const API_KEY = "AIzaSyC6gilHlw7uboIg8EZyE648Q8ayxRmJ-A4";

async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
