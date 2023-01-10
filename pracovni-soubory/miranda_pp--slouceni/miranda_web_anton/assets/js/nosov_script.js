// show / hide list

const articleButtons = document.querySelectorAll(".article-button");
const extraSolutionsButton = document.querySelector(".extra-solutions__item--button");

if (articleButtons.length) {
    articleButtons.forEach((button) => {
        button.addEventListener("click", toggleShowClass);
    });
}

if (extraSolutionsButton) {
    extraSolutionsButton.addEventListener("click", toggleShowClass);
}

function toggleShowClass(e) {
    let parent = e.target.closest("article") || e.target.closest("section");
    parent.classList.toggle("--show");
}
