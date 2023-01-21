const hand = document.querySelector("#hand-grabbing");
const bottle = document.querySelector(".bottle-img-container");
const heapContainer = document.querySelector("#coffee-heap-beans-container");
const forBottle = document.querySelector("#for-bottle");
const forBeans = document.querySelector("#for-beans");
const bean1 = document.querySelector("#bean1");
const bean2 = document.querySelector("#bean2");
const bean3 = document.querySelector("#bean3");
const dot11 = document.querySelector("#dot-11");
const dot12 = document.querySelector("#dot-12");
const dot21 = document.querySelector("#dot-21");
const dot22 = document.querySelector("#dot-22");
const dot31 = document.querySelector("#dot-31");
const dot32 = document.querySelector("#dot-32");
const info = document.querySelector("#info");
const info1 = document.querySelector("#info1");
const info2 = document.querySelector("#info2");
const info3 = document.querySelector("#info3");

const grabBottle = () => {
  hand.style.display = "block";
  bottle.style.animation = "bottle-slide 3s ease";
  bottle.style.animationDelay = "2s";
  heapContainer.style.transitionDelay = "2.5s";
  heapContainer.style.visibility = "visible";
  heapContainer.style.opacity = "1";
  setTimeout(() => {
    bottle.style.right = "-54%";
    forBottle.classList.add("hidden");
    forBeans.classList.remove("hidden");
  }, 2000);
};

const activate = (num) => {
  info.style.visibility = "visible";
  info.style.transitionDelay = "1s";
  info.style.transform = "scale(1)";
  switch (num) {
    case 1:
      {
        dot11.style.visibility = "visible";
        dot11.style.transitionDelay = "0.1s";
        dot11.style.transform = "scale(1)";
        dot12.style.visibility = "visible";
        dot12.style.transitionDelay = "0.5s";
        dot12.style.transform = "scale(1)";
        info1.style.display = "flex";
        info2.style.display = "none";
        info3.style.display = "none";
      }
      break;
    case 2:
      {
        dot21.style.visibility = "visible";
        dot21.style.transitionDelay = "0.1s";
        dot21.style.transform = "scale(1)";
        dot22.style.visibility = "visible";
        dot22.style.transitionDelay = "0.5s";
        dot22.style.transform = "scale(1)";
        info1.style.display = "none";
        info2.style.display = "flex";
        info3.style.display = "none";
      }
      break;
    case 3:
      {
        dot31.style.visibility = "visible";
        dot31.style.transitionDelay = "0.1s";
        dot31.style.transform = "scale(1)";
        dot32.style.visibility = "visible";
        dot32.style.transitionDelay = "0.5s";
        dot32.style.transform = "scale(1)";
        info1.style.display = "none";
        info2.style.display = "none";
        info3.style.display = "flex";
      }
      break;
  }
};
const deactivate = (num) => {
  info.style.visibility = "hidden";
  info.style.transitionDelay = "0ms";
  info.style.transform = "scale(0)";
  switch (num) {
    case 1:
      {
        dot11.style.visibility = "hidden";
        dot11.style.transform = "scale(0)";
        dot12.style.visibility = "hidden";
        dot12.style.transform = "scale(0)";
      }
      break;
    case 2:
      {
        dot21.style.visibility = "hidden";
        dot21.style.transform = "scale(0)";
        dot22.style.visibility = "hidden";
        dot22.style.transform = "scale(0)";
      }
      break;
    case 3:
      {
        dot31.style.visibility = "hidden";
        dot31.style.transform = "scale(0)";
        dot32.style.visibility = "hidden";
        dot32.style.transform = "scale(0)";
      }
      break;
  }
};

bottle.addEventListener("click", grabBottle);
bean1.addEventListener("mouseover", () => activate(1));
bean1.addEventListener("mouseout", () => deactivate(1));

bean2.addEventListener("mouseover", () => activate(2));
bean2.addEventListener("mouseout", () => deactivate(2));

bean3.addEventListener("mouseover", () => activate(3));
bean3.addEventListener("mouseout", () => deactivate(3));
