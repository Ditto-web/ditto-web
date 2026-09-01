const items = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

items.forEach(item => observer.observe(item));

const mediaModal = document.getElementById("mediaModal");
const modalImage = document.getElementById("modalImage");
document.querySelectorAll(".open-recharge,.open-table").forEach(btn => {
  btn.addEventListener("click", () => {
    modalImage.src = btn.dataset.image;
    mediaModal.classList.add("open");
    mediaModal.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  });
});
function closeMedia(){ mediaModal.classList.remove("open"); mediaModal.setAttribute("aria-hidden","true"); modalImage.src=""; document.body.style.overflow=""; }
document.querySelector(".modal-close")?.addEventListener("click",closeMedia);
document.querySelector(".modal-backdrop")?.addEventListener("click",closeMedia);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMedia();});
