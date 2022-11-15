import axios from "axios";

axios.defaults.timeout = 100000;
const baseURL = "https://api.github.com/users";

export const GetRepos = async (userName: string) => {
  let answer;
  await axios
    .get(`${baseURL}/${userName}/repos`)
    .then((response) => (answer = response.data));
  return answer;
};

export const GetResponse = async (url: string) => {
  let answer;
  await axios.get(url).then((response) => {
    answer = response;
  });
  return answer;
};

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
