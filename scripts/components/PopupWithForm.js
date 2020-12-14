import {Popup} from './Popup.js';

//Buggy - can save new card only after PopupProfile was changed

export class PopupWithForm extends Popup {
  constructor({popupSelector, formSubmitHandler}) {
    super({popupSelector});
    this._formSubmitHandler = formSubmitHandler;
    this._formElement = document.querySelector('.popup__form');
    this._inputFields = document.querySelectorAll('popup__input-field')
    this._inputArray = Array.from(document.querySelectorAll('popup__input-field'));
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

