  const openModalBtn = document.querySelector('[data-modal-open-second]');
  const closeModalBtn = document.querySelector('[data-modal-close-second]');
  const modal = document.querySelector('[data-modal-second]');
  
  openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
      document.body.classList.toggle('modal-open-second');
      modal.classList.toggle('is-hidden');
    }