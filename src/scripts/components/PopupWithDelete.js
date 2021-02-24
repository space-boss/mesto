import {Popup} from './Popup.js';

export class PopupWithDelete extends Popup {
  constructor({popupSelector}) {
      super({popupSelector});
      this._submitButton = document.querySelector('.popup__submit-button_delete');
      this._place = document.querySelector('.place');
}

  setFormSubmitHandler(handler) {
    this.setFormSubmitHandler = handler;
  }

  setEventListeners() {
    this._submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.setFormSubmitHandler();
    });
    super.setEventListeners();
  }
}

