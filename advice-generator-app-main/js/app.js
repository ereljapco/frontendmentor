import displayAttribution from './modules/attribution.js';

const adviceTitle = document.querySelector('.advice__title');
const adviceContainer = document.querySelector('.advice__text');
const adviceURL = 'https://api.adviceslip.com/advice';
const adviceRandomBtn = document.querySelector('.advice__random-btn');

fetchAdvice();

adviceRandomBtn.addEventListener('click', () => {
  fetchAdvice();
});

displayAttribution();

async function fetchAdvice() {
  try {
    adviceContainer.textContent = '...';
    const response = await fetch(adviceURL);

    if (!response.ok) {
      throw new Error(`Ooops. There was an error.`);
    }

    const data = await response.json();
    const { id, advice } = data.slip;

    adviceTitle.textContent = `Advice #${id}`;
    adviceContainer.innerHTML = `&ldquo;${advice}&rdquo;`;
  } catch (error) {
    adviceContainer.textContent = `Ooops. There was an error.`;
  }
}
