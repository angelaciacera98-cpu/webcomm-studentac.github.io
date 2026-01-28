{const track = document.querySelector(".carousel-track");
const items = Array.from(document.querySelectorAll(".carousel-item"));

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;

function updateCarousel() {
    const itemWidth = items[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

next.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= items.length) currentIndex = 0;
    updateCarousel();
});

prev.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = items.length - 1;
    updateCarousel();
});
}