export default function informationsLine(message, input, verify) {
  const errorInformation = input.nextElementSibling;
  const inputValue = input.value.trim();

  if (verify(inputValue)) {
    input.classList.add('success');
    errorInformation.textContent = undefined;
  } else {
    input.classList.add('fail');
    errorInformation.textContent = message;
  }
}
