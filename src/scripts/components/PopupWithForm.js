import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({popupSelector, formSubmitHandler}) {
    super({popupSelector});
    this._formSubmitHandler = formSubmitHandler;
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputArray = this._popup.querySelectorAll('.popup__input-field');
  }

  _getInputValues() {
     this._inputArray.forEach((item) => {
      item.value = item.textContent;
    });
  }

  setEventListeners() {
    this._formElement.addEventListener('submit', () => {
      this._formSubmitHandler(this._getInputValues.bind(this))
    });
    super.setEventListeners();
  }

  close() {
    this._inputArray.forEach((item) => {
      item.value = '';
    });
    super.close();
  }
}

