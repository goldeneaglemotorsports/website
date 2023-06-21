
// const buttons = document.querySelector("[data-carousel-button]")

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const offset = button.dataset.carouselButton === "next" ? 1 : -1
//         const slides = button
//             .closest("[data-carousel]")
//             .querySelector('[data-slides]')

//         const activeSlide = slides.querySelector("[data-active]")
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset
//         if (newIndex < 0) newIndex = slides.children.length - 1
//         if (newIndex >= slides.children.length) newIndex = 0

//         slides.children[newIndex].dataset.active = true
//         delete activeSlide.dataset.active



//     })
// })











const buttons = document.querySelectorAll("[data-carousel-button]");

Array.prototype.forEach.call(buttons, (button) => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
            .closest("[data-carousel]")
            .querySelector('[data-slides]');

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = Array.from(slides.children).indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        // Remove the active state from the currently active slide
        activeSlide.dataset.active = "false";
        
        // Add the active state to the new active slide
        slides.children[newIndex].dataset.active = "true";
    })
})
