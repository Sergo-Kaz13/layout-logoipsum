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

  if (burger.classList.contains("burger-active")) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "visible";
  }
  console.log(burger.classList.contains("burger-active"));
});
