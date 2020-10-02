const imageSlide = document.querySelector('.image-slide');
const testImages = document.querySelectorAll('.image-slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = testImages[0].clientWidth;

imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listener
nextBtn.addEventListener('click',()=>{
    if(counter >= testImages.length - 1) return;
    imageSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    imageSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

imageSlide.addEventListener('transitionend',()=>{
    if(testImages[counter].id == 'lastClone'){
        imageSlide.style.transition = "none";
        counter = testImages.length -2;
        imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(testImages[counter].id == 'firstClone'){
        imageSlide.style.transition = "none";
        counter = testImages.length - counter;
        imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})