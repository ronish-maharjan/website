const header = document.querySelector(".back");
const floatingBtn = document.querySelector(".floating-back");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      // header visible → hide floating button
      floatingBtn.classList.add("show");
    } else {
      // header not visible → show floating button
      floatingBtn.classList.remove("show");
    }
  },
  { threshold: 0 } // trigger as soon as any part of header is off screen
);

observer.observe(header);
