const formsPlace = document.querySelector('.popup__form');
const inputField = document.querySelector('.popup__input-field');

const showError = (input) => {
 const errorElement = formsPlace.querySelector(`#${input.id}-error`);
 errorElement.textContent = input.validationMessage;
 input.classList.add('popup__input-field_invalid');
};

const hideError = (input) => {
 const errorElement = formsPlace.querySelector(`#${input.id}-error`);
 errorElement.textContent = '';
 input.classList.remove('popup__input-field_invalid');
};

const checkInputValidity = (input) => {
  if (input.validity.valid) {
    hideError(input);
  } else {
    showError(input);
  }
};

const toggleButtonState = (buttonElement) => {
  if (formsPlace.checkValidity()) {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__submit-button_invalid');
  } else {
    buttonElement.disabled = true;
    buttonElement.classList.add('popup__submit-button_invalid');
  }
};

const setEventListeners = () => {
 const inputElements = Array.from(formsPlace.querySelectorAll('.popup__input-field'));
 const buttonElement = formsPlace.querySelector('.popup__submit-button');

 inputElements.forEach((input) => {
  input.addEventListener('input', (evt) => {
    checkInputValidity(evt.target);
    toggleButtonState(buttonElement);
 });
});
    toggleButtonState(buttonElement);
};

formsPlace.addEventListener('submit',  (evt) => {
  evt.preventDefault();
});

setEventListeners();
