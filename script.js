const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
    const header = accordion.querySelector(".accordion__header");
    const content = accordion.querySelector(".accordion__content");
    const icon = accordion.querySelector(".accordion__icon i");

    header.addEventListener("click", () => {
        const isOpen = content.style.height === `${content.scrollHeight}px`;

        accordions.forEach((a, i) => {
            const c = a.querySelector(".accordion__content");
            const ic = a.querySelector(".accordion__icon i");

            if (i === index) {
                c.style.height = isOpen ? "0px" : `${c.scrollHeight}px`;
                ic.classList.toggle("ri-add-line", isOpen);
                ic.classList.toggle("ri-subtract-fill", !isOpen);
            } else {
                c.style.height = "0px";
                ic.classList.add("ri-add-line");
                ic.classList.remove("ri-subtract-fill");
            }
        });
    });
});
// Get modal element
var modal = document.getElementById("faqModal");

// Get open modal button
var faqBtn = document.getElementById("faqBtn");

// Get close button
var closeBtn = document.querySelector(".close");

// Listen for open click
faqBtn.addEventListener("click", openModal);

// Listen for close click
closeBtn.addEventListener("click", closeModal);

// Listen for outside click
window.addEventListener("click", outsideClick);

// Open modal
function openModal() {
  modal.style.display = "flex";
}

// Close modal
function closeModal() {
  modal.style.display = "none";
}

// Close modal if outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
