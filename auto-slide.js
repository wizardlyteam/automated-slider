// get button element either by class name or id
const navArrow = document.getElementsByClassName("be-slider-next")[0];
// How long between clicks in milliseconds
const transitionTime = 5000;
//"click" button based on transition time
setInterval(() => {
  navArrow.click();
}, transitionTime);
