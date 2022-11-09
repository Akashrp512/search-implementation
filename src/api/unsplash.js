import axios from "axios";


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4lkf8bc6cjYx5tuDXrv94mL7861c-ZocXxQWAI7HFNc'
      }
});
//creates an instances of the axios client with default property