
// ANIMATION HEADER
const homeLogo = document.querySelector('.home-logo')
const headerBar = document.querySelector('.header')



document.addEventListener("DOMContentLoaded", function() {
    var offsetStatus = "under200";
    window.addEventListener("scroll", function() {
        var x = window.pageYOffset;
        if(x>200) {
            offsetStatus = "over200";
            homeLogo.classList.add('smaller_logo')
            headerBar.classList.add('scale-down')
        } else {
            if (x<200) {
            offsetStatus = "under200"
            homeLogo.classList.remove('smaller_logo')
            headerBar.classList.remove('scale-down')

            }
        }
    })
})

// SHOW MODAL 

const openModal_btns =document.getElementsByName('open-contact-modal')
const closeModal_btn = document.querySelector('.close-modal-btn')
const contact_modal = document.querySelector('.contact-layer')
console.log(openModal_btns);

openModal_btns.forEach(function(openModal_btn) {
    openModal_btn.onclick = function() {
        contact_modal.style.display = 'flex'
        contact_modal.style.opacity = '1'
        contact_modal.style.transition = 'opacity 1s ease 1s'
    }
})

closeModal_btn.onclick = function() {

    contact_modal.style.display = 'none';
    contact_modal.style.opacity = '0';
    contact_modal.style.transition = 'opacity 1s ease 1s'
    }












