//  *** VARIABLES DECLARED *** //

//Used for changing navbar color
const technology = document.querySelector("#tech");
const navbar = document.querySelector(".navbar");
const profileIcon = document.querySelector(".bi-person");

// Used for Dynamic Width while scrolling
const sectionVideos = document.querySelectorAll(".sectionVideo");

// Used for Dynamic Opacity while scrolling
const opacityContainers = document.querySelectorAll(".scrim-opacity");
const sectionMainHeadings = document.querySelectorAll(".section-main-heading");

// Used for changing Active Class in navbar
const nav_links = document.querySelectorAll(".nav-link");

// Used for bannerVideo
const bannerVideo = document.querySelector(".bannerVideo");

// for the canvas girl
const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth / 1.7;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

const arr = [];

let imagesLoaded = 0;

const frames = {
  startFrame: 0,
  endFrame: 199,
};

const texts = document.querySelectorAll(".texts");
const texts2 = document.querySelectorAll(".text2");

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
      const sectionHeadingBottom =
        sectionMainHeadings[n].getBoundingClientRect().bottom - 66; //adjustment for navbar & spacings
      const opacityPercentage = (sectionHeadingBottom / 450) * 0.6; //450 - total distance of the section main heading in "text-over-video-container" till the navbar

      // this range is same coz its measured from the navbar and is the top half of the page for lg devices
      if (sectionHeadingBottom < 450 && sectionHeadingBottom >= 0) {
        console.log(sectionHeadingBottom);
        opacityContainer.style.backgroundColor = `rgba(0, 0, 0, ${opacityPercentage})`;
      }
    }

    // for first opactity container only
    if (opacityContainer == opacityContainers[0]) {
      opacityChange(1);
    }
    // for second opacity container only
    else if (opacityContainer == opacityContainers[1]) {
      opacityChange(3);
    }
    // for third opacity container only
    else if (opacityContainer == opacityContainers[2]) {
      opacityChange(5);
    }
    // for fourth opacity container only
    else if (opacityContainer == opacityContainers[3]) {
      opacityChange(7);
    }
    // for fifth opacity container only
    else if (opacityContainer == opacityContainers[4]) {
      opacityChange(9);
    }
    // for sixth opacity container only
    else if (opacityContainer == opacityContainers[5]) {
      opacityChange(11);
    }
  });
});

// Changing Active Class to the clicked nav from the previous nav
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

const designNav = document.querySelector(".designNav");
const designSection = document.querySelector("#design");

const techSection = document.querySelector(".techNav");
const valueSection = document.querySelector(".valueNav");

designNav.addEventListener("click", () => {
  console.log("clicked");
  designSection.classList.add("scollSnapAlign");
});

window.addEventListener("scroll", () => {
  designSection.classList.remove("scollSnapAlign");
});

// for canvas
window.addEventListener("load", () => {
  // to load images in arr and display the first image
  for (let i = 0; i <= frames.endFrame; i++) {
    const img = new Image();
    img.src = `https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/large/${i
      .toString()
      .padStart(4, "0")}.jpg`;
    arr.push(img);
    img.onload = () => {
      imagesLoaded++;
      if (imagesLoaded === 200) {
        // console.log("HELLO");
        loadImages(frames.startFrame);
        // startAnimation();
      }
    };
  }

  // to display images in canvas
  function loadImages(index) {
    const img = arr[index];
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.imageSmoothingEnabled = true;
    c.imageSmoothingQuality = "high";
    c.drawImage(img, 0, 0, canvas.width, canvas.height);
    // frames.startFrame = index;
  }

  //animation of images through frames
  gsap.to(frames, {
    startFrame: frames.endFrame,
    scrollTrigger: {
      trigger: ".parent",
      scrub: 2,
      // markers: true,
      start: "top 60",
      pin: true,
    },
    onUpdate: function () {
      loadImages(Math.floor(frames.startFrame));
    },
  });

  // FOR THE FIRST THREE TEXTS
  // making a timeline and tying it to scrollTrigger
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".design-text-container",
      start: "bottom 62%",
      end: "bottom 34%",
      scrub: 3,
      // markers: true,
    },
  });

  // adding animation of the text to the timeline one after the other
  texts.forEach((text) => {
    // console.log(text);
    tl.fromTo(text, { opacity: 0 }, { opacity: 1, y: -80 }).to(text, {
      opacity: 0,
    });
  });

  // FOR THE LAST THREE TEXTS
  var tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".design-text-container-2",
      start: "bottom 25%",
      end: "bottom -20%",
      scrub: 3,
      // markers: true,
    },
  });

  texts2.forEach((text) => {
    tl1
      .fromTo(text, { opacity: 0 }, { opacity: 1, y: -80 })
      .to(text, { opacity: 0 });
  });
});