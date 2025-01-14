const reviewButton = document.querySelector("[data-review-submit-btn]");
const reviewInput = document.querySelector("[data-review-input]");
let recipe = "";
const reviewTemplate = document.querySelector("[data-user-review-template]");
const lasagnaReviewContainer = document.querySelector(
  "[data-lasagna-review-container]"
);
const puddingReviewContainer = document.querySelector(
  "[data-pudding-review-container]"
);
const lemonyReviewContainer = document.querySelector(
  "[data-lemony-review-container]"
);
const spaghettiReviewContainer = document.querySelector(
  "[data-spaghetti-review-container]"
);
if (lasagnaReviewContainer) {
  recipe = "lasagna";
} else if (puddingReviewContainer) {
  recipe = "pudding";
} else if (lemonyReviewContainer) {
  recipe = "lemony";
} else if (spaghettiReviewContainer) {
  recipe = "spaghetti";
}
let reviews = [];
let comment = "";

document.addEventListener("DOMContentLoaded", function () {
  const reviewButton = document.getElementById("review-submit-btn");

  const reviewTemplate = document.querySelector("[data-user-review-template]");
  const reviewInput = document.querySelector("[data-review-input]");

  // Load reviews from local storage
  loadReviews();

  reviewButton.addEventListener("click", function (event) {
    event.preventDefault();

    const comment = reviewInput.value;
    if (comment.trim() === "") return;

    const review = reviewTemplate.content.cloneNode(true).children[0];
    const reviewName = review.querySelector("[data-user-name]");
    const reviewComment = review.querySelector("[data-user-review]");

    const user = JSON.parse(localStorage.getItem("currentUser"))
      ? JSON.parse(localStorage.getItem("currentUser")).username
      : "Anonymous";
    reviewName.textContent = user;
    reviewComment.textContent = comment;

    appendReview(review);

    saveReview(user, comment);

    reviewInput.value = "";
  });

  function saveReview(name, comment) {
    const reviews = JSON.parse(localStorage.getItem(`${recipe}_reviews`)) || [];
    reviews.push({ name, comment });
    localStorage.setItem(`${recipe}_reviews`, JSON.stringify(reviews));
  }

  function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem(`${recipe}_reviews`)) || [];
    reviews.forEach(({ name, comment }) => {
      const review = reviewTemplate.content.cloneNode(true).children[0];
      const reviewName = review.querySelector("[data-user-name]");
      const reviewComment = review.querySelector("[data-user-review]");

      reviewName.textContent = name;
      reviewComment.textContent = comment;

      appendReview(review);
    });
  }

  function appendReview(review) {
    if (recipe === "lasagna") {
      lasagnaReviewContainer.append(review);
    } else if (recipe === "pudding") {
      puddingReviewContainer.append(review);
    } else if (recipe === "lemony") {
      lemonyReviewContainer.append(review);
    } else if (recipe === "spaghetti") {
      spaghettiReviewContainer.append(review);
    }
  }
});
