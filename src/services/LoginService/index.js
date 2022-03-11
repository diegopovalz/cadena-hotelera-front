import axios from 'axios';
import CONFIG from '../../config';

async function verifyLogin(username, password) {
  const response = await axios.post(`${CONFIG.API_URL}/login`, {
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
