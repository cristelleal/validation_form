export function validateName(name) {
  const nameReg = /^[a-zA-Z]{3,16}$/;
  return nameReg.test(name);
}

export function validateEmail(email) {
  const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailReg.test(email);
}

export function validatePassword(password) {
  const passwordReg = /^[a-zA-Z0-9@-]{6,20}$/;
  return passwordReg.test(password);
}

export function validatePhone(telephone) {
  const phoneReg = /^\d{10}$/;
  return phoneReg.test(telephone);
}

export function validateBio(bio) {
  const bioReg = /^[a-zàâäéèêëïîôöùûüç' -]{8,50}$/;
  return bioReg.test(bio);
}

export const mapValidationFunctions = {
  firstname: {
    verify: validateName,
    message: 'First Name must be alphanumeric and contain 3 - 16 characters',
  },
  lastname: {
    verify: validateName,
    message: 'Last Name must be alphanumeric and contain 3 - 16 characters',
  },
  email: {
    verify: validateEmail,
    message: 'Email must be a valid adress, e.g. example@example.com',
  },
  password: {
    verify: validatePassword,
    message:
      'Password must be alphanumeric (@, - and _ are also allowed) and between 6-20 characters',
  },
  telephone: {
    verify: validatePhone,
    message: 'A valid telephone number (10 digits & 0123456789)',
  },
  bio: {
    verify: validateBio,
    message:
      'Bio must contain only lowercase letters, underscores, hyphens, and be 8-50 characters',
  },
};
