import axios from "axios";
import md5 from "md5";

export default (name, tipo) => {
  const ts = new Date().getTime();
  const publickey = "9b3805d4e5d43aafcfd12b66e40b8b8b";
  const privatekey = "79548943cdd777e0e208e246fd743a0bff2ea039";

  const hash = md5(`${ts}${privatekey}${publickey}`);

  const instance = axios.create({
    baseURL: `https://gateway.marvel.com:443/v1/public/${tipo}?nameStartsWith=${name}&apikey=${publickey}&hash=${hash}`,
    timeout: 10000
  });

  instance
    .get()
    /*.then(response => 
      for (let i = 0; i < respnse.data.data.length; i++){
        console.log(response.data.data.results[i]);
      }*/
    //.then(response => console.log(response))
    //.then(response => console.log(response.data.data.results[0]))
    //.then(response => document.getElementById("nameReturn").innerHTML = "Teste")
    .then(
      response =>
        (document.getElementById("nameReturn").innerHTML =
          '<img class="thumbnail" id="imgHero" src="' +
          response.data.data.results[0].thumbnail.path +
          "." +
          response.data.data.results[0].thumbnail.extension +
          '" alt = "Personagem" >' +
          "<h1>" +
          response.data.data.results[0].name +
          "</h1><br>" +
          response.data.data.results[0].description)
    )
    .catch(error => console.log(error));
};
