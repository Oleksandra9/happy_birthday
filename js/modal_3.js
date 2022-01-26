const openModalBtn = document.querySelector('[data-modal-open-third]');
const closeModalBtn = document.querySelector('[data-modal-close-third]');
const modal = document.querySelector('[data-modal-third]');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
    document.body.classList.toggle('modal-open-third');
    modal.classList.toggle('is-hidden');
  }