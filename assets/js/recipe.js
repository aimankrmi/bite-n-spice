const reviewButton = document.querySelector("[review-submit-btn]");
const reviewInput = document.querySelector("[review-input]");
let recipe = "";
const reviewTemplate = document.querySelector("[user-review-template]");
const lasagnaReviewContainer = document.querySelector(
  "[lasagna-review-container]"
);
const puddingReviewContainer = document.querySelector(
  "[pudding-review-container]"
);
const lemonyReviewContainer = document.querySelector(
  "[lemony-review-container]"
);
const spaghettiReviewContainer = document.querySelector(
  "[spaghetti-review-container]"
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

  const reviewTemplate = document.querySelector("[user-review-template]");
  const reviewInput = document.querySelector("[review-input]");

  // Load reviews from local storage
  loadReviews();

  reviewButton.addEventListener("click", function (event) {
    event.preventDefault();

    const comment = reviewInput.value;
    if (comment.trim() === "") return;

    const review = reviewTemplate.content.cloneNode(true).children[0];
    const reviewName = review.querySelector("[user-name]");
    const reviewComment = review.querySelector("[user-review]");

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
      const reviewName = review.querySelector("[user-name]");
      const reviewComment = review.querySelector("[user-review]");

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
