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

const revealPuddle = () => {
  let puddle = document.querySelector("#coffee-puddle");
  let puddleTop = puddle.getBoundingClientRect().top; //gets distance from top of viewport
  let windowHeight = window.innerHeight; //height of viewport
  let puddleVisible = 50; //the height at which puddle reveals
  if (puddleTop < windowHeight - puddleVisible) puddle.classList.add("active");
  else puddle.classList.remove("active");
};
