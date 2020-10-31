const showError = (form, input, {formSelector, ...rest}) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
  input.classList.add(rest.inputErrorClass);
};


const hideError = (form, input, {formSelector, ...rest}) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
  input.classList.remove(rest.inputErrorClass);
};


const checkInputValidity = (form, input, {formSelector, ...rest}) => {
  if (input.validity.valid) {
    hideError(form, input, {formSelector, ...rest});
  } else {
    showError(form, input, {formSelector, ...rest});
  }
};


const toggleButtonState = (form, buttonElement, {formSelector, ...rest}) => {
  if (form.checkValidity()) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(rest.inactiveButtonClass);
  } else {
    buttonElement.disabled = true;
    buttonElement.classList.add(rest.inactiveButtonClass);
  }
};


const setEventListeners = (form, {formSelector, ...rest}) => {
  const inputElements = Array.from(form.querySelectorAll(rest.inputSelector));
  const buttonElement = form.querySelector(rest.submitButtonSelector);

  inputElements.forEach((input) => {
    input.addEventListener('input', (evt) => {
      checkInputValidity(form, evt.target, {formSelector, ...rest});
      toggleButtonState(form, buttonElement, {formSelector, ...rest});
    });
  });
  toggleButtonState(form, buttonElement, {formSelector, ...rest});
};



const enableValidation = ({formSelector, ...rest}) => {
  const formElements = Array.from(document.querySelectorAll(formSelector));

  formElements.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, {formSelector, ...rest});
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input-field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input-field_invalid',
  errorClass: 'popup__input-field_error'
});
