const exploreBtn = document.querySelector("#explore-btn");
const drop1 = document.querySelector("#drop-1");
const drop2 = document.querySelector("#drop-2");
const drop3 = document.querySelector("#drop-3");
const drop4 = document.querySelector("#drop-4");
const coffeeFill = document.querySelector("#coffee-fill");
const exploreText = document.querySelector("#explore-btn>span");

window.addEventListener(
  "scroll",
  () => {
    revealPuddle();
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset /
        (document.querySelector("#landing-section").offsetHeight -
          window.innerHeight)
    );
  },
  false
);

exploreBtn.addEventListener("click", () => {
  drop1.style.display = "block";
  drop1.classList.add("started");
  drop2.style.display = "block";
  drop2.classList.add("started");
  drop3.style.display = "block";
  drop3.classList.add("started");
  drop4.style.display = "block";
  drop4.classList.add("started");
  coffeeFill.style.display = "block";
  coffeeFill.classList.add("started");
  exploreText.style.color = "var(--bgclr-light)";
  setTimeout(() => {
    drop1.style.height = "50%";
  }, 1000);
  setTimeout(() => {
    drop2.style.height = "100%";
    drop3.style.height = "100%";
    drop4.style.height = "100%";
  }, 2500);
  setTimeout(() => {
    coffeeFill.style.height = "200%";
  }, 4000);
  setTimeout(() => {
    window.location = "/allRanges.html";
  }, 5000);
});

const revealPuddle = () => {
  let puddle = document.querySelector("#coffee-puddle");
  let puddleTop = puddle.getBoundingClientRect().top; //gets distance from top of viewport
  let windowHeight = window.innerHeight; //height of viewport
  let puddleVisible = 50; //the height at which puddle reveals
  if (puddleTop < windowHeight - puddleVisible) puddle.classList.add("active");
  else puddle.classList.remove("active");
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const gotoNescafeClassic = () => {
  window.location = "/nescafeClassic.html";
};

const gotoEspresso = () => {
  window.location = "/nescafeEspresso.html";
};

const gotoGold = () => {
  window.location = "/nescafeGoldIntense.html";
};

const gotoOriginal = () => {
  window.location = "/nescafeOriginal.html";
};

const gotoGoldBlend = () => {
  window.location = "/nescafeGoldBlend.html";
};

const gotoClassicSm = () => {
  window.location = "/nescafeClassicSm.html";
};

const gotoTaster = () => {
  window.location = "/nescafeTasters.html";
};
