//  *** VARIABLES DECLARED *** //

//Used for changing navbar color
const technology = document.querySelector("#tech");
const navbar = document.querySelector(".navbar");
const profileIcon = document.querySelector(".bi-person");

// Used for dynamic width while scrolling
const sectionVideos = document.querySelectorAll(".sectionVideo");

// Used for changing active navbar
const nav_links = document.querySelectorAll(".nav-link");

// Used for banner video
const bannerVideo = document.querySelector(".bannerVideo");

// Used for nav clicking
const techNav = document.querySelector(".techNav");
const bookNav = document.querySelector(".value");

// Used for Dynamic Opacity
const opacityContainers = document.querySelectorAll(".scrim-opacity");
const sectionMainHeadings = document.querySelectorAll(".section-main-heading");


// *** CODING *** //

// Changing Navbar Color, sectionVideos width and opacityContainers Opacity dynamically as the page is scrolled
window.addEventListener("scroll", () => {
  // console.log(technology.getBoundingClientRect().top)
  let diffTop = navbar.offsetHeight - technology.getBoundingClientRect().top; //traks where top is wrt navabr (generally viewport's top)
  let diffBottom = technology.getBoundingClientRect().bottom; //tracks where bottom is wrt viewport's top

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
  // When black theme is still there for lg devices and the above 'if' condition fails
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

  //Video dynamic width change
  sectionVideos.forEach((video) => {
    // changing width as the video leaves from the viewport to top
    if (video.getBoundingClientRect().bottom <= 500) {
      if (
        470 < video.getBoundingClientRect().bottom &&
        video.getBoundingClientRect().bottom <= 500
      ) {
        // console.log("starts");
        // console.log(`${(video.getBoundingClientRect().bottom / 10) * 2}`);
        video.style.width = `${
          (video.getBoundingClientRect().bottom / 10) * 2
        }%`;
      }
      // partially out from the top viewport
      else if (video.getBoundingClientRect().bottom <= 470) {
        // console.log("94");
        video.style.width = "94%";
      }
    }
    // video in bottom viewport and below
    else {
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

  // opacity for section videos
  opacityContainers.forEach((opacityContainer) => {

    // used for calculating opacity, reducing repetition and 'n' is the scrolled section main heading
    function opacityChange(n) {
      if (n == 0) {
        const sectionHeadingBottom =
          sectionMainHeadings[n].getBoundingClientRect().bottom - 66; //adjustment for navbar & spacings
        const opacityPercentage = (sectionHeadingBottom / 450) * 0.6; //450 - total distance of the section main heading in "text-over-video-container" till the navbar

        // this range is same coz its measured from the navbar and is the top half of the page for lg devices
        if (sectionHeadingBottom < 450 && sectionHeadingBottom >= 0) {
          opacityContainer.style.backgroundColor = `rgba(0, 0, 0, ${opacityPercentage})`;
        }
      } else {
        const sectionHeadingBottom =
          sectionMainHeadings[n * 2].getBoundingClientRect().bottom - 66; //adjustment for navbar & spacings
        const opacityPercentage = (sectionHeadingBottom / 450) * 0.6;

        if (sectionHeadingBottom < 450 && sectionHeadingBottom >= 0) {
          opacityContainer.style.backgroundColor = `rgba(0, 0, 0, ${opacityPercentage})`;
        }
      }
    }

    // for first opactity container only
    if (opacityContainer == opacityContainers[0]) {
      opacityChange(0);
    }
    // for second opacity container only
    else if (opacityContainer == opacityContainers[1]) {
      opacityChange(1);
    }
    // for third opacity container only
    else if (opacityContainer == opacityContainers[2]) {
      opacityChange(2);
    }
    // for fourth opacity container only
    else if (opacityContainer == opacityContainers[3]) {
      opacityChange(3);
    }
    // for fifth opacity container only
    else if (opacityContainer == opacityContainers[4]) {
      opacityChange(4);
    }
    // for sixth opacity container only
    else if (opacityContainer == opacityContainers[5]) {
      opacityChange(5);
    }
  });
});

// Changing active class to the clicked nav from the previous nav
nav_links.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const activeClass = document.querySelector(".active");
    activeClass.classList.remove("active");
    // console.log(e.target);
    e.target.classList.add("active");
  });
});

// Playing the bannerVideo initially and then looping it across a certain time frame
bannerVideo.play(); //initially played
bannerVideo.addEventListener("timeupdate", () => {
  const startTime = 4.9;
  const endTime = 7;

  if (bannerVideo.currentTime >= endTime) {
    bannerVideo.currentTime = startTime;
    bannerVideo.play();
  }
});

// scrolling to a certain part when clicked for Tech Specs and Values nav-link
const isDesktop = window.matchMedia("(min-width: 1024px)").matches; //keeps watch over the device width
if (isDesktop) {
  techNav.addEventListener("click", (e) => {
    // console.log("clicked");
    e.preventDefault();
    window.scrollTo({
      top: 17200,
      left: 0,
      behavior: "smooth", // Smooth scrolling
    });
  });

  bookNav.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 21700,
      left: 0,
      behavior: "smooth",
    });
  });
}