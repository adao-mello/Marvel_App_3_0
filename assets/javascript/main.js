import search from "./character-search";

const form = document.querySelectorAll("[data-form]");

form[0].addEventListener("submit", event => {
  event.preventDefault();

  const formComponent = event.target;

  const formData = new FormData(formComponent);

  search(formData.get("heroName"), "characters");

  //console.log(formData);
});

form[1].addEventListener("submit", event => {
  event.preventDefault();

  const formComponent = event.target;

  const formData = new FormData(formComponent);

  search(formData.get("eventName"), "events");
});

form[2].addEventListener("change", event => {
  event.preventDefault();

  const formComponent = event.target;

  const formData = new FormData(formComponent);

  formData.append("Teste");

  //search(formData.get("nameReturn"), "events");
});
