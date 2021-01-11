export class Popup {
  constructor({popupSelector}) {
    this._popupSelector = popupSelector;
    this._closePopupByClickOnOverlay = this._closePopupByClickOnOverlay.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._popupSelector.addEventListener('click', this._closePopupByClickOnOverlay)
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popupSelector.removeEventListener('click', this._closePopupByClickOnOverlay)
  }

  _closePopupByClickOnOverlay(event) {
    if (event.target.classList.contains('popup')) {
      this._popupSelector.classList.remove('popup_opened');
    }
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
  }
}
