window.onload = function () {
  const faq = document.getElementsByClassName("faq");
  const title = document.getElementsByClassName("card-title-acordion");

  Array.from(title).forEach((value, i) => {
    title[i].addEventListener("click", () => {
      console.log("click");
      Array.from(faq).forEach((value, i) => {
        faq[i].classList.remove("active");
      });
      faq[i].classList.add("active");
      title[i].classList.add("active");
      console.log(faq[i]);
    });
  });
};
