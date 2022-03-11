const CONFIG = {
  API_URL: import.meta.env.PROD
    ? import.meta.env.VITE_SERVER_URL_PROD
    : import.meta.env.VITE_SERVER_URL_DEV,
};

export default CONFIG;
