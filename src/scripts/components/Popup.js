export class Popup {
  constructor({popupSelector}) {
    this._popupSelector = popupSelector;
    this._popupItem = document.querySelector(this._popupSelector);
    this._closePopupByClickOnOverlay = this._closePopupByClickOnOverlay.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupItem.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._popupItem.addEventListener('click', this._closePopupByClickOnOverlay)
  }

  close() {
    this._popupItem.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popupItem.removeEventListener('click', this._closePopupByClickOnOverlay)
  }

  _closePopupByClickOnOverlay(event) {
    if (event.target.classList.contains('popup')) {
      this._popupItem.classList.remove('popup_opened');
    }
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popupItem.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
  }
}
