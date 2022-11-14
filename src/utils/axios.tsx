import axios from "axios";

axios.defaults.timeout = 100000;
const baseURL = "https://api.github.com/users";

const GetRepos = async (userName: string) => {
  await axios
    .get(`${baseURL}/${userName}/repos`)
    .then((response) => console.log(response.data));
};

export default GetRepos;

/* axios.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.data.errCode === 2) {
      console.log("过期了");
    }
    return response;
  },
  (error) => {
    console.log("请求出错：", error);
  }
); */
