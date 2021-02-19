import {Popup} from './Popup.js';

export class PopupWithDelete extends Popup {
  constructor({popupSelector}, api) {
      super({popupSelector});
			this._submitButton = document.querySelector('.popup__submit-button_delete');
			this._place = document.querySelector('.place');
			this._api = api;
}

	setEventListeners() {
		this._submitButton.addEventListener('click', (evt) => {
			this._deleteMyCard();
			this._deleteCardFromDom(evt);

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

	_deleteMyCard() {
		return this._api
		.deleteCard(this.card)
		.then(() => {
			super.close();
		});
	}		
}
