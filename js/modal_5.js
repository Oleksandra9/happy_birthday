const openModalBtn = document.querySelector('[data-modal-open-five]');
const closeModalBtn = document.querySelector('[data-modal-close-five]');
const modal = document.querySelector('[data-modal-five]');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
    document.body.classList.toggle('modal-open-five');
    modal.classList.toggle('is-hidden');
  }