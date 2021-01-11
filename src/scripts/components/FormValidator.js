export class FormValidator {
  constructor(validationSettings, form) {
    this._form = form;
    this._inputSelector = validationSettings.inputSelector;
    this._submitButtonSelector = validationSettings.submitButtonSelector;
    this._inactiveButtonClass = validationSettings.inactiveButtonClass;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._errorClass = validationSettings.errorClass;
  }

  _showError (input) {
    const _errorElement = this._form.querySelector(`#${input.id}-error`);
    _errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  }

  _hideError (input) {
    const _errorElement = this._form.querySelector(`#${input.id}-error`);
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
    const _inputElements = Array.from(this._form.querySelectorAll(this._inputSelector));
    const _buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState(_buttonElement);

    _inputElements.forEach((input) => {
      input.addEventListener('input', (evt) => {
        this._checkInputValidity(evt.target);
        this._toggleButtonState(_buttonElement);
      });
    });
  };

  _toggleButtonState(_buttonElement) {
      if (this._form.checkValidity()) {
        _buttonElement.disabled = false;
        _buttonElement.classList.remove(this._inactiveButtonClass);
      } else {
        _buttonElement.disabled = true;
        _buttonElement.classList.add(this._inactiveButtonClass);
      }
    };

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
