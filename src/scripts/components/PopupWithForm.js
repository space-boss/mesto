import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({popupSelector, formSubmitHandler}) {
    super({popupSelector});
    this._formSubmitHandler = formSubmitHandler;
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputArray = this._popup.querySelectorAll('.popup__input-field');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputArray.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._formSubmitHandler(this._getInputValues())
    });
  }

  close() {
    this._formElement.reset();
    super.close();
  }
}

