import { mapValidationFunctions } from '../script/utils';

export default function submit() {
  const submitButton = document.querySelector('#submit');
  const form = document.querySelector('form');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    let allSuccess = true;
    formData.forEach((value, key) => {
      if (!mapValidationFunctions[key].verify(value)) {
        allSuccess = false;
      }
    });

    if (allSuccess) {
      submitButton.classList.add('success-button');
    }
  });
}
