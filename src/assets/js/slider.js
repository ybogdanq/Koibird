function slider(card, prev, next, slidesToSlide = 1, slidesToShow = 4) {
  const cards = document.querySelectorAll(card);
  const prevBtn = document.querySelector(prev);
  const nextBtn = document.querySelector(next);
  const cardsCount = cards.length;
  let counter = 0;

  prevBtn.addEventListener("click", () => {
    counter++;

    if (counter > 0) {
      console.log(-cardsCount + slidesToShow);
      counter = -cardsCount + slidesToShow;
      cards.forEach((card) => {
        card.style.transform = `translateX(${counter * slidesToSlide * 100}%)`;
      });
    }
    if (counter < cardsCount) {
      cards.forEach((card) => {
        card.style.transform = `translateX(${counter * slidesToSlide * 100}%)`;
      });
    }
  });
  nextBtn.addEventListener("click", () => {
    counter--;
    if (-counter > cardsCount - slidesToShow) {
      counter = 0;
      cards.forEach((card) => {
        card.style.transform = `translateX(${counter * slidesToSlide * 100}%)`;
      });
    }
    if (counter < cardsCount) {
      console.log(counter);
      cards.forEach((card) => {
        card.style.transform = `translateX(${counter * slidesToSlide * 100}%)`;
      });
    }
  });
}
