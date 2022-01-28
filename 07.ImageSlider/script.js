window.onload = () => {
  const leftBtn = document.getElementById("left-btn");
  const rightBtn = document.getElementById("right-btn");
  const cards = document.querySelectorAll(".card");
  let movePercent = 0;

  cards.forEach((card) => {
    card.style.left = 0;
  });

  if (window.matchMedia("(max-width: 768px)").matches) {
    movePercent = 33;
  } else {
    movePercent = 25;
  }

  leftBtn.addEventListener("click", () => {
    cards.forEach((card) => {
      const left = parseInt(card.style.left) + movePercent;
      console.log(left);
      card.style.left = `${left}%`;
    });
  });

  rightBtn.addEventListener("click", () => {
    cards.forEach((card) => {
      const left = parseInt(card.style.left) - movePercent;
      card.style.left = `${left}%`;
    });
  });
};
