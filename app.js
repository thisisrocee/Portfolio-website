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