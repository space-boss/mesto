export class FormValidator {
  constructor(validationSettings, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = validationSettings.inputSelector;
    this._submitButtonSelector = validationSettings.submitButtonSelector;
    this._inactiveButtonClass = validationSettings.inactiveButtonClass;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._errorClass = validationSettings.errorClass;
  }

  _showError (input) {
    const errorElement = this._formSelector.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  }

  _hideError (input) {
    const errorElement = this._formSelector.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
    input.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity (input) {
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
    }
  };

  _setEventListeners () {
    const inputElements = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
    const buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
    this._toggleButtonState(buttonElement);

    inputElements.forEach((input) => {
      input.addEventListener('input', (evt) => {
        this._checkInputValidity(evt.target);
        this._toggleButtonState(buttonElement);
      });
    });
  };

  _toggleButtonState(buttonElement) {
      if (this._formSelector.checkValidity()) {
        buttonElement.disabled = false;
        buttonElement.classList.remove(this._inactiveButtonClass);
      } else {
        buttonElement.disabled = true;
        buttonElement.classList.add(this._inactiveButtonClass);
      }
    };

  enableValidation() {
    this._formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
