const toggler = document.querySelector(".toggler");
let ul = document.querySelector(".menu");

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

// Smooth Scrolling
$("#menu a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

ul.addEventListener("click", removeOverlay);
toggler.addEventListener("change", logger);
