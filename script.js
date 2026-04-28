const breakers = document.querySelectorAll(".breaker");

breakers.forEach((breaker) => {
  breaker.addEventListener("click", () => {
    if (breaker.classList.contains("warn")) {
      breaker.classList.remove("warn");
      breaker.classList.add("on");
      return;
    }

    breaker.classList.toggle("off");
    breaker.classList.toggle("on");
  });
});

const cards = document.querySelectorAll(".service-card, .timeline-step, .review-card");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 },
);

cards.forEach((card) => {
  card.classList.add("reveal");
  revealObserver.observe(card);
});
