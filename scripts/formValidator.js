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
    const _errorElement = this._formSelector.querySelector(`#${input.id}-error`);
    _errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  }

  _hideError (input) {
    const _errorElement = this._formSelector.querySelector(`#${input.id}-error`);
    _errorElement.textContent = '';
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
    const _inputElements = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
    const _buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
    this._toggleButtonState(_buttonElement);

    _inputElements.forEach((input) => {
      input.addEventListener('input', (evt) => {
        this._checkInputValidity(evt.target);
        this._toggleButtonState(_buttonElement);
      });
    });
  };

  _toggleButtonState(_buttonElement) {
      if (this._formSelector.checkValidity()) {
        _buttonElement.disabled = false;
        _buttonElement.classList.remove(this._inactiveButtonClass);
      } else {
        _buttonElement.disabled = true;
        _buttonElement.classList.add(this._inactiveButtonClass);
      }
    };

  enableValidation() {
    this._formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
