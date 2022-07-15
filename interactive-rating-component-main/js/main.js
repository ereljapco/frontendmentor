import {
  ratingContainer,
  ratingForm,
  ratingInput,
  ratingUserRatingContainer,
} from './modules/element.js';

ratingInput.forEach((rating) => {
  rating.addEventListener('change', (e) => {
    displayThankYou(e.currentTarget);
  });
});

function displayThankYou(rating) {
  ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    ratingContainer.classList.add('rating--submitted');
    ratingUserRatingContainer.textContent = `You selected ${rating.value} out of 5`;
  });
}
