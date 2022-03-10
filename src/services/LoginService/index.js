import axios from 'axios';

async function verifyLogin(username, password) {
  const response = await axios.post('http://localhost:3001/login', {
    username,
    password,
  });

  const { data } = response;
  if (data.error) {
    return null;
  }
  return data;
}

export default {
  verifyLogin,
};
