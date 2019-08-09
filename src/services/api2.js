import axios from 'axios'


const api2 = axios.create({ 
  baseURL: 'https://json.dev.tovtecserver.com.br'
});

export default api2