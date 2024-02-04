const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:"true",
    },
    clickable: true,
});

function scrollToElement(elem){
    document.querySelector(elem).scrollIntoView({ behavior: 'smooth' });
};

const orderButton = document.querySelector('.slide-order-button');
orderButton.addEventListener("click",  () => {
    scrollToElement('.delivery');
});

//modal

const openModalButton = document.querySelector('.delivery-button');

const contactForm = document.querySelector('.contact-form');
const successForm = document.querySelector('.success-form');

const closeContactForm = document.querySelector('.close-contact');
const closeSuccessForm = document.querySelector('.close-success');

const contactFormButton = document.querySelector('.button-send');
const successFormButton = document.querySelector('.button-close');


const closeModal = () => {
        contactForm.classList.add('inactive')
        successForm.classList.add('inactive');
}

contactFormButton.addEventListener("click", () => {
    closeModal();
    
})

function stopDefAction(evt) {
    evt.preventDefault();
}

openModalButton.addEventListener("click", () => contactForm.classList.remove('inactive'));
contactFormButton.addEventListener("click", () => {
    successForm.classList.remove('inactive');
    stopDefAction;
});


successFormButton.addEventListener("click", closeModal);
closeContactForm.addEventListener("click", closeModal); 
closeSuccessForm.addEventListener("click", closeModal); 




