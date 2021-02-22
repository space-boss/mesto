import {Popup} from './Popup.js';

export class PopupWithDelete extends Popup {
  constructor({popupSelector}, api) {
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

  open(card, cardId) {
    this.card = card;
    this._cardId = cardId;
    super.open();
  }

  _deleteCardFromDom() {
    const card = document.getElementById(this._cardId);
    card.remove();
  }
  
}

