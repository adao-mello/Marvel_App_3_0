import axios from "axios";
import md5 from "md5";

export default name => {
  const ts = new Date().getTime();
  const publickey = "9b3805d4e5d43aafcfd12b66e40b8b8b";
  const privatekey = "79548943cdd777e0e208e246fd743a0bff2ea039";

  const hash = md5(`${ts}${privatekey}${publickey}`);
  const heroName = "Hulk";

  const instance = axios.create({
    baseURL: `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${heroName}&apikey=${publickey}&hash=${hash}`,
    timeout: 10000
  });

  instance
    .get()
    //.then(response => console.log(response))
    .then(response => console.log(response.data.data.results[0]))
    .catch(error => console.log(error));
};
