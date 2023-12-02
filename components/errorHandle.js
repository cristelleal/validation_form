import {
  validateBio,
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from '../script/utils';
import informationsLine from './informationLine';

export default function errorHandle() {
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    input.addEventListener('blur', () => {
      const inputValue = input.value.trim();
      const errorElement = input.nextElementSibling;

      if (input.id === 'firstname') {
        if (validateName(inputValue)) {
          const errorMessage = undefined;
          informationsLine(errorMessage, errorElement);
          input.classList.add('success');
        } else {
          const errorMessage = 'First Name must be alphanumeric and contain 3 - 16 characters';
          informationsLine(errorMessage, errorElement);
          input.classList.add('fail');
        }
      }

      if (input.id === 'lastname') {
        if (validateName(inputValue)) {
          const errorMessage = undefined;
          input.classList.add('success');
          informationsLine(errorMessage, errorElement);
        } else {
          const errorMessage = 'Last Name First must be alphanumeric and contain 3 - 16 characters';
          informationsLine(errorMessage, errorElement);
          input.classList.add('fail');
        }
      }

      if (input.id === 'email') {
        if (validateEmail(inputValue)) {
          const errorMessage = undefined;
          input.classList.add('success');
          informationsLine(errorMessage, errorElement);
        } else {
          const errorMessage = 'Email must be a valid adress, e.g. example@example.com';
          informationsLine(errorMessage, errorElement);
          input.classList.add('fail');
        }
      }

      if (input.id === 'password') {
        if (validatePassword(inputValue)) {
          const errorMessage = undefined;
          input.classList.add('success');
          informationsLine(errorMessage, errorElement);
        } else {
          const errorMessage = 'Password must be alphanumeric (@, - and _ are also allowed) and between 6-20 characters';
          informationsLine(errorMessage, errorElement);
          input.classList.add('fail');
        }
      }

      if (input.id === 'telephone') {
        if (validatePhone(inputValue)) {
          const errorMessage = undefined;
          informationsLine(errorMessage, errorElement);
          input.classList.add('success');
        } else {
          const errorMessage = 'A valid telephone number (10 digits & 0123456789)';
          informationsLine(errorMessage, errorElement);
          input.classList.add('fail');
        }
      }

      if (input.id === 'bio') {
        if (validateBio(inputValue)) {
          const errorMessage = undefined;
          informationsLine(errorMessage, errorElement);
          input.classList.add('success');
        } else {
          const errorMessage = 'Bio must contain only lowercase letters, underscores, hyphens, and be 8-50 characters';
          informationsLine(errorMessage, errorElement);
          input.classList.add('fail');
        }
      }
    });
  });
}
