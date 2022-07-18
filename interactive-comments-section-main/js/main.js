import fetchData from './modules/fetch-data.js';
import displayComments from './modules/display-comments.js';
import displayCommentReplies from './modules/display-replies.js';

const commentsContainer = document.querySelector('.comment-container');

displayCommentsSection();

async function displayCommentsSection() {
  const data = await fetchData('./data/data.json');
  const dataComments = data.comments;

  commentsContainer.innerHTML = displayComments(dataComments);

  displayCommentReplies(dataComments);
}
