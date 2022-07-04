import axios from "axios";
import url from "./URL";
import setupUser from "./setuUser";
async function registerUser({ email, password, username }) {
  const response = await axios
    .post(`${url}/api/auth/local/register`, {
      username,
      email,
      password,
    })
    .catch((error) => console.log(error));
  if (response) {
    setupUser(response);
  }
  return response;
}

export default registerUser;