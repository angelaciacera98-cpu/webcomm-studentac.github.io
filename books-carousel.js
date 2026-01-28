{
const track = document.querySelector(".books-track");
const books = Array.from(document.querySelectorAll(".books"));
const btnPrev = document.querySelector(".books-btn.prev");
const btnNext = document.querySelector(".books-btn.next");

let currentIndex = 0;
const visible = 7; 

function updateCarousel() {
    const itemWidth = books[0].getBoundingClientRect().width + 10; 
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

btnNext.addEventListener("click", () => {
    if (currentIndex < books.length - visible) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

btnPrev.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = books.length - visible;
    }
    updateCarousel();
});
}