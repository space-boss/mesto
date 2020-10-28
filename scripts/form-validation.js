const inputField = document.querySelector('.popup__input-field');


const showError = (form, input) => {
 const errorElement = form.querySelector(`#${input.id}-error`);
 errorElement.textContent = input.validationMessage;
 input.classList.add('popup__input-field_invalid');
};


const hideError = (form, input) => {
 const errorElement = form.querySelector(`#${input.id}-error`);
 errorElement.textContent = '';
 input.classList.remove('popup__input-field_invalid');
};


const checkInputValidity = (form, input) => {
  if (input.validity.valid) {
    hideError(form, input);
  } else {
    showError(form, input);
  }
};


const toggleButtonState = (form, buttonElement) => {
  if (form.checkValidity()) {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__submit-button_invalid');
  } else {
    buttonElement.disabled = true;
    buttonElement.classList.add('popup__submit-button_invalid');
  }
};


const setEventListeners = (form) => {
 const inputElements = Array.from(form.querySelectorAll('.popup__input-field'));
 const buttonElement = form.querySelector('.popup__submit-button');

 inputElements.forEach((input) => {
  input.addEventListener('input', (evt) => {
    checkInputValidity(form, evt.target);
    toggleButtonState(form, buttonElement);
 });
});
    toggleButtonState(form, buttonElement);
};


const enableValidation = () => {
 const formElements = Array.from(document.querySelectorAll('.popup__form'));

 formElements.forEach((form) => {
    form.addEventListener('submit',  (evt) => {
      evt.preventDefault();
  });
    setEventListeners(form);
 });
}

enableValidation();
