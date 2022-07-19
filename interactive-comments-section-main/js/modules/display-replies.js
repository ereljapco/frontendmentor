import displayComments from './display-comments.js';

function displayCommentReplies(comments) {
  comments.forEach(({ id, replies }) => {
    if (!replies.length) {
      return;
    }

    const comment = document.querySelector(`[data-id='${id}']`);

    if (
      comment.nextElementSibling &&
      comment.nextElementSibling.classList.contains('replys')
    ) {
      const repliesContainer = comment.nextElementSibling;
      repliesContainer.innerHTML = displayComments(replies);
      return;
    }

    const repliesContainer = document.createElement('div');

    repliesContainer.classList.add('replys');

    repliesContainer.innerHTML = displayComments(replies);

    comment.insertAdjacentElement('afterend', repliesContainer);
  });
}

export default displayCommentReplies;
