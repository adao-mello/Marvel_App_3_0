import search from "./character-search";

const form = document.querySelectorAll("[data-form]");

form[0].addEventListener("submit", event => {
  event.preventDefault();

  const formComponent = event.target;

  const formData = new FormData(formComponent);

  search(formData.get("heroName"));

  //console.log(formData);
});

//console.log(form[0]);
