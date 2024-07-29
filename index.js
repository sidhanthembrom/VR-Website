const technology = document.querySelector("#tech");
const navbar = document.querySelector(".navbar");
const profileIcon = document.querySelector(".bi-person");

// const video = document.querySelector("video");
const videos = document.querySelectorAll("video");

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

  // for video dynamic width change
  videos.forEach((video) => {
    if (video.getBoundingClientRect().bottom <= 500) {
      if (
        470 < video.getBoundingClientRect().bottom &&
        video.getBoundingClientRect().bottom <= 500
      ) {
        console.log("starts");
        console.log(`${(video.getBoundingClientRect().bottom / 10) * 2}`);
        video.style.width = `${
          (video.getBoundingClientRect().bottom / 10) * 2
        }%`;
      } else if (video.getBoundingClientRect().bottom <= 470) {
        console.log("94");
        video.style.width = "94%";
      }
    } else {
      video.style.width = "100%";
    }
  });
});
