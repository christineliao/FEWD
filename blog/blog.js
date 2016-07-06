var link = document.querySelector(".like-link");
var form = document.querySelector("#new-comment");

var likes = document.querySelector(".like-count");
var commentcontent = document.getElementById("new-comment-body");

link.addEventListener("click", like);
form.addEventListener("submit", comment);

function like(event) {
  event.preventDefault();
  // Your code for comments goes here
  var a = parseInt(likes.textContent) || 0;
  likes.textContent = a + 1;
  // Your code for like goes here
}

function comment(event) {
  event.preventDefault();
  // Your code for comments goes here
  var addcomment = document.createElement('div');

  addcomment.className = 'comment';
  addcomment.textContent = commentcontent.value;
  document.getElementById('comments').appendChild(addcomment);

  form.reset();

}
