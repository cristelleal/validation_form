export default function submit() {
  const submitButton = document.querySelector('#submit');
  const inputs = document.querySelectorAll('input');

  submitButton.addEventListener('click', (e) => {
    const allSuccess = Array.from(inputs).every((input) => input.classList.contains('success'));
    if (allSuccess) {
      submitButton.classList.add('success-button');
    }
    e.preventDefault();
  });
}
