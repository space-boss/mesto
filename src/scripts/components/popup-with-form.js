import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({popupSelector, formSubmitHandler}) {
    super({popupSelector});
    this._formSubmitHandler = formSubmitHandler;
    this._formElement = popupSelector;
    this._inputArray = popupSelector.querySelectorAll('.popup__input-field');
  }

  _getInputValues() {
     this._inputArray.forEach((item) => {
      item.value = item.textContent;
    });
  }

  setEventListeners() {
    this._formElement.addEventListener('submit', this._formSubmitHandler);
    super.setEventListeners();
  }

  close() {
    this._inputArray.forEach((item) => {
      item.value = '';
    });
    super.close();
  }
}

