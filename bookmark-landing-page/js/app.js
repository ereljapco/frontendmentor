const featuresTabs = document.querySelectorAll('.features__tabs > button');
const featuresContents = document.querySelectorAll(
  '.features__contents > article'
);
const faqQuestions = document.querySelectorAll('.faq__question');

featuresTabs.forEach(function (featureBtn) {
  featureBtn.addEventListener('click', function (e) {
    const id = e.target.dataset.content;
    const featuresContent = document.querySelector(`#${id}`);

    featuresContents.forEach(function (content) {
      if (featuresContent === content) {
        content.classList.add('features__content--selected');
      } else {
        content.classList.remove('features__content--selected');
      }
    });
  });
});

faqQuestions.forEach(function (question) {
  const toggleBtn = question.querySelector('.faq__question-toggle-btn');

  toggleBtn.addEventListener('click', function () {
    faqQuestions.forEach(function (question) {
      question.classList.remove('faq__question--show-text');
    });

    if (question.classList.contains('faq__question--show-text')) {
      question.classList.remove('faq__question--show-text');
    } else {
      question.classList.add('faq__question--show-text');
    }
  });
});
