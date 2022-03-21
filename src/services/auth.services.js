import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
});
// esta configuracion nos permite enviar el Token en cada request que se haga
service.interceptors.request.use((config) => {
  // aqui buscamos el token en localstorage
  const storedToken = localStorage.getItem("authToken");

  // si el toke existe lo agregamos a los headers del request
  config.headers = storedToken && { Authorization: `Bearer ${storedToken}` };

  return config;
});

const signupService = (username) => {
  return service.post("/signup", username);
};

const loginService = (username) => {
  return service.post("/login", username);
};

const verifyService = () => {
  return service.get("/verify");
};

export {
    signupService, 
    loginService, 
    verifyService 
    };
