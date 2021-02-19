import {Popup} from './Popup.js';

export class PopupWithDelete extends Popup {
  constructor({popupSelector}, api) {
      super({popupSelector});
			/*this._cardDeleteHandler = cardDeleteHandler;*/
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

	open(card){
		this.card = card;
		super.open();
		console.log(this.card);
	}

	_deleteCardFromDom(evt) {
		evt.target.closest('place').remove();
	}

	_deleteMyCard() {
		return this._api
		.deleteCard(this.card)
		.then(() => {
			super.close();
		});
	}		
}
