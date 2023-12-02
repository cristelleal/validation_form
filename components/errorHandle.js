import { mapValidationFunctions } from '../script/utils';
// import verifyInput from './verifyInput';
import informationsLine from './informationsLine';

export default function errorHandle() {
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      const { verify, message } = mapValidationFunctions[input.id];
      informationsLine(message, input, verify);
    });
  });

  // inputs.forEach((input) => {
  //   input.addEventListener('input', () => {
  //     verifyInput(input);
  //   });
  // });
}
