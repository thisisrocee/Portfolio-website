(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


// const openModal = document.querySelectorAll('[data-modal-target]')
// const closeModal = document.querySelectorAll('[data-close-button]')

// const overlay = document.getElementById('overlay')

// openModal.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal)
//     })
// })

// closeModal.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = button.closest('.modal__container')
//         closeModal(modal)
//     })
// })

// function openModal(modal) {
//     if(modal == null) return
//     modal.classList.add('active')
//     overlay.classList.add('active')
// }
// function closeModal(modal) {
//     if(modal == null) return
//     modal.classList.remove('active')
//     overlay.classList.remove('active')
// }




/*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent, appearOvr) => {
    const openBtn = document.getElementById(openButton),
        modalContainer = document.getElementById(modalContent),
        activeOverlay = document.getElementById(appearOvr)

    if (openBtn && modalContainer) {
        openBtn.addEventListener('click', () => {
            modalContainer.classList.add('show-modal')
            activeOverlay.classList.add('show-overlay')
        })
    }
}
showModal('open-modal', 'modal-container', 'overlay')

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll('.close-modal')
const closeOverlay = document.querySelectorAll('.popup.appear')

function closeModal() {
    const modalContainer = document.getElementById('modal-container')
    const activeOverlay  = document.getElementById('overlay')
    modalContainer.classList.remove('show-modal')
    activeOverlay.classList.remove('show-overlay')
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))
closeOverlay.forEach(c => c.addEventListener('click', closeModal))

// closeOverlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.popup')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })