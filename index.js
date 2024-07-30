const technology = document.querySelector("#tech");
const navbar = document.querySelector(".navbar");
const profileIcon = document.querySelector(".bi-person");

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
    console.log("white");
  }

  videos.forEach((video) => {
    // for video dynamic width change
    if (video.getBoundingClientRect().bottom <= 500) {
      if (
        470 < video.getBoundingClientRect().bottom &&
        video.getBoundingClientRect().bottom <= 500
      ) {
        // console.log("starts");
        // console.log(`${(video.getBoundingClientRect().bottom / 10) * 2}`);
        video.style.width = `${(video.getBoundingClientRect().bottom / 10) * 2
          }%`;
      } else if (video.getBoundingClientRect().bottom <= 470) {
        // console.log("94");
        video.style.width = "94%";
      }
    } else {
      video.style.width = "100%";
    }

    // video playback when in viewport
    const videoHeight = video.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // console.log(videoHeight);
    // console.log(windowHeight);

    const videoViewportPercentage = (videoHeight / windowHeight) * 100;
    // console.log(videoViewportPercentage);

    if (35 <= videoViewportPercentage && videoViewportPercentage <= 120) {
      video.play();
      // console.log("play");
    } else if (videoViewportPercentage < 35 || videoViewportPercentage > 120) {
      video.pause();
      // console.log("pause");
    }
  });
});


// changing active class on the navbar
const nav_links = document.querySelectorAll(".nav-link")
// console.log(nav_links);
nav_links.forEach((nav) => {
  nav.addEventListener('click', (e) => {
    const activeClass = document.querySelector(".active");
    activeClass.classList.remove("active");
    console.log(e.target);
    e.target.classList.add("active");
  })
});

