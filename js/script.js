const toggler = document.querySelector(".toggler");
let ul = document.querySelector(".menu");

console.log(ul);
// ul = Array.from(ul);

// ul.addEventListener("click", () => {
//   console.log("clicked");
// });

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

const removeOverlay = (e) => {
  if (e.target.classList.contains("li")) {
    console.log("clicked");
    toggler.checked = false;
  }
};

ul.addEventListener("click", removeOverlay);
toggler.addEventListener("change", logger);
