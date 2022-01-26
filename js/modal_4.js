const openModalBtn = document.querySelector('[data-modal-open-four]');
const closeModalBtn = document.querySelector('[data-modal-close-four]');
const modal = document.querySelector('[data-modal-four]');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
    document.body.classList.toggle('modal-open-four');
    modal.classList.toggle('is-hidden');
  }