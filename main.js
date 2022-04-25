const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readmorebtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readmorebtn.innerText === "Read more") {
    readmorebtn.innerText = "Read less";
  } else {
    readmorebtn.innerText = "Read more";
  }
});
