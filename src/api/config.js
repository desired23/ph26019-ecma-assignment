import axios from "axios";  

const instance = axios.create({
    baseURL: "https://my-json-server.typicode.com/desired23/ph26019-ecma-assignment"
});

export default instance;
