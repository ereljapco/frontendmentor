const featuresTabs = document.querySelectorAll('.features__tabs > button');
const featuresContents = document.querySelectorAll(
  '.features__contents > article'
);
const faqQuestions = document.querySelectorAll('.faq__question');

featuresTabs.forEach(displayTabContent);

faqQuestions.forEach(displayQuestionText);

function displayTabContent(tabBtn) {
  tabBtn.addEventListener('click', function (e) {
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
}

function displayQuestionText(question) {
  const questionHeading = question.querySelector('.faq__question-heading');

  questionHeading.addEventListener('click', function () {
    faqQuestions.forEach(function (faqQuestion) {
      if (faqQuestion !== question) {
        faqQuestion.classList.remove('faq__question--show-text');
      }
    });

    question.classList.toggle('faq__question--show-text');
  });
}
