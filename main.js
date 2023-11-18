const burger = document.querySelector(".burger");

burger.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName === "DIV") {
    target.classList.toggle("burger-active");
  } else {
    const divBurger = target.closest("div");

    if (!divBurger) return;

    divBurger.classList.toggle("burger-active");
  }
});
