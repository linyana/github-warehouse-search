import axios from "axios";

axios.defaults.timeout = 100000;
const baseURL = "https://api.github.com/users";

export const GetRepos = async (userName: string) => {
  let answer;
  await axios
    .get(`${baseURL}/${userName}/repos`)
    .then((response) => (answer = response));
  return answer;
};

export const GetResponse = async (url: string) => {
  let answer;
  await axios.get(url).then((response) => {
    answer = response;
  });
  return answer;
};
