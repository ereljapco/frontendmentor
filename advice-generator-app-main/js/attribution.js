const attributionToggleBtn = document.querySelector('.attribution__toggle-btn');
const attribution = document.querySelector('.attribution');

attributionToggleBtn.addEventListener('click', () => {
  attribution.classList.toggle('attribution--show-info');
});
