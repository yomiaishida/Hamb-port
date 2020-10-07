const toggler = document.querySelector(".toggler");
let itemText = document
  .querySelector("#projects")
  .getElementsByClassName("item-text");

itemText = Array.from(itemText);

const logger = () => {
  itemText.forEach((item) => {
    if (toggler.checked) {
      item.style.zIndex = "0";
    } else {
      item.style.zIndex = "1";
    }
  });
};

toggler.addEventListener("change", logger);
