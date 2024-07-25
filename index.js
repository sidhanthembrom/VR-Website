const technology = document.querySelector("#tech");
const navbar = document.querySelector(".navbar");
const profileIcon = document.querySelector(".bi-person");

window.addEventListener("scroll", () => {
  // console.log(technology.getBoundingClientRect().top)
  let diffTop = navbar.offsetHeight - technology.getBoundingClientRect().top;
  let diffBottom = technology.getBoundingClientRect().bottom;

  //   console.log(diffTop);
  //   console.log(diffBottom);

  //changing to black navbar and white font(dark) as it enters
  if (diffBottom > diffTop > 0) {
    if (diffTop > 0) {
      navbar.classList.add("bg-black");
      navbar.setAttribute("data-bs-theme", "dark");
      profileIcon.setAttribute("fill", "white");
      //   console.log("black");
    }
    //   before reaching technology-section
    else {
      navbar.classList.remove("bg-black");
      navbar.setAttribute("data-bs-theme", "light");
      profileIcon.setAttribute("fill", "currentColor");
      //   console.log("white");
    }
  }
  // When black theme is still there for lg devices and the above if condition fails
  else if (diffTop > diffBottom && diffBottom > 0) {
    navbar.classList.add("bg-black");
    navbar.setAttribute("data-bs-theme", "dark");
    profileIcon.setAttribute("fill", "white");
    //   console.log("black");
  }

  // after crossing the technology-section reverting back to white navbar and black font
  else if (diffBottom < 0) {
    navbar.classList.remove("bg-black");
    navbar.setAttribute("data-bs-theme", "light");
    profileIcon.setAttribute("fill", "currentColor");
    // console.log("white");
  }
});
