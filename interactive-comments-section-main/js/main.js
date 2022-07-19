import fetchData from './modules/fetch-data.js';
import displayComments from './modules/display-comments.js';
import displayCommentReplies from './modules/display-replies.js';

const commentsContainer = document.querySelector('.comment-container');

displayCommentsSection();

async function displayCommentsSection() {
  const data = await fetchData('./data/data.json');

  if (localStorage.getItem('dataComments') == null) {
    localStorage.setItem('dataComments', JSON.stringify(data.comments));
  }

  const dataComments = JSON.parse(localStorage.getItem('dataComments'));

  let allDataComments = dataComments;

  // add every comment's replies to `allDataComments`
  dataComments.forEach((comment) => {
    const { replies } = comment;
    if (replies.length) {
      allDataComments = allDataComments.concat(replies);
    }
  });

  commentsContainer.innerHTML = displayComments(dataComments);

  displayCommentReplies(dataComments);

  const allComments = document.querySelectorAll('.comment');

  allComments.forEach((comment) => {
    const id = comment.dataset['id'];
    const dataComment = allDataComments.find((comment) => {
      return comment.id === parseInt(id);
    });
    const { user, score } = dataComment;

    const newComment = new Comment(id, user.username, comment, score);
  });
}

class Comment {
  constructor(id, replyingTo, comment, score) {
    this.id = parseInt(id);
    this.replyingTo = replyingTo;
    this.score = score;
    this.comment = comment;
    this.replyBtn = comment.querySelector('.comment__reply-btn');
    this.upvoteBtn = comment.querySelector('.comment__upvote-btn');
    this.downvoteBtn = comment.querySelector('.comment__downvote-btn');
    this.voteCount = comment.querySelector('.comment__vote-count');

    this.replyBtn.addEventListener('click', this.reply.bind(this));
  }

  reply() {
    const replyForms = document.querySelectorAll('.comment__reply-form');

    // removes all display reply form
    replyForms.forEach((form) => {
      form.parentNode.removeChild(form);
    });

    // add reply form below the comment
    const replyForm = document.createElement('form');
    replyForm.classList.add('comment__reply-form');

    replyForm.innerHTML = `<textarea
              class="comment__reply-input"
              cols="30"
              rows="10"
              placeholder="Add a comment..."
            >@${this.replyingTo} </textarea>
            <img
              class="comment__user-img"
              src="./images/avatars/image-juliusomo.png"
              alt="juliusomo"
            />
            <button class="comment__reply-send-btn">Send</button>`;

    this.comment.insertAdjacentElement('afterend', replyForm);

    const dataComments = JSON.parse(localStorage.getItem('dataComments'));

    const dataComment = dataComments.filter((comment) => comment.id == this.id);

    const { replies } = dataComment[0];

    console.log(replies);
  }
}
