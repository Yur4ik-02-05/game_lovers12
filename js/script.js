const commentForm = document.getElementById("commentForm");
const comments = document.getElementById("comments");

const createElement = (element, item) => {
  const newElement = document.createElement(element);
  newElement.textContent = item;
  return newElement;
};

const addComment = (e) => {
  e.preventDefault();
  const userName = document.getElementById("userName").value;
  const comment = document.getElementById("commentInput").value;
  const newComment = createElement("li", `${userName}: ${comment}`);
  comments.appendChild(newComment);
};

commentForm.addEventListener("submit", addComment);