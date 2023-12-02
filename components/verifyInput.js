// import informationsLine from './informationLine';
// import {
//   validateBio,
//   validateEmail,
//   validateName,
//   validatePassword,
//   validatePhone,
// } from '../script/utils';

// export default function verifyInput(input) {
//   switch (input.id) {
//     case 'firstname': {
//       const message =
//         'First Name must be alphanumeric and contain 3 - 16 characters';
//       informationsLine(message, input, validateName);
//       break;
//     }
//     case 'lastname': {
//       const message =
//         'Last Name must be alphanumeric and contain 3 - 16 characters';
//       informationsLine(message, input, validateName);
//       break;
//     }
//     case 'email': {
//       const message = 'Email must be a valid adress, e.g. example@example.com';
//       informationsLine(message, input, validateEmail);
//       break;
//     }
//     case 'password': {
//       const message =
// eslint-disable-next-line max-len
//         'Password must be alphanumeric (@, - and _ are also allowed) and between 6-20 characters';
//       informationsLine(message, input, validatePassword);
//       break;
//     }
//     case 'telephone': {
//       const message = 'A valid telephone number (10 digits & 0123456789)';
//       informationsLine(message, input, validatePhone);
//       break;
//     }
//     case 'bio': {
//       const message =
//         'Bio must contain only lowercase letters, underscores, hyphens, and be 8-50 characters';
//       informationsLine(message, input, validateBio);
//       break;
//     }
//     default:
//       throw new Error('Input not managed');
//   }
// }
