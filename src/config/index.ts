const DEV_IP = 'http://192.168.16.103:3000/api';
const PROD_URL = 'https://restro-bizz.vercel.app/api';

const config = {
  api_base_url: process.env.NODE_ENV === 'development' ? DEV_IP : PROD_URL,
};

export default config;
