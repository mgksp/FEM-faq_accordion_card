const accordiansList = [
  ...document.getElementsByClassName("accordians-container__accordian"),
];

const ACCORDIAN_ACTIVE_CLASS = "accordians-container__accordian--active";

const removeActive = () => {
  accordiansList.forEach((accordian) => {
    accordian.classList.remove(ACCORDIAN_ACTIVE_CLASS);
  });
};

accordiansList.forEach((accordian) => {
  accordian.addEventListener("click", () => {
    const isActive = accordian.classList.contains(ACCORDIAN_ACTIVE_CLASS);
    removeActive();
    accordian.classList.toggle(ACCORDIAN_ACTIVE_CLASS, !isActive);
  });
});
