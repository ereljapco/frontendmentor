import displayComments from './display-comments.js';

function displayCommentReplies(comments) {
  comments.forEach(({ id, replies }) => {
    if (!replies.length) {
      return;
    }

    const comment = document.querySelector(`[data-id='${id}']`);
    const repliesContainer = document.createElement('div');

    repliesContainer.classList.add('replys');

    repliesContainer.innerHTML = displayComments(replies);

    comment.insertAdjacentElement('afterend', repliesContainer);
  });
}

export default displayCommentReplies;
