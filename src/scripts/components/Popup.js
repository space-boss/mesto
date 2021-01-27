export class Popup {
  constructor({popupSelector}) {
    this._popup = document.querySelector(popupSelector);
    this._closePopupByClickOnOverlay = this._closePopupByClickOnOverlay.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('click', this._closePopupByClickOnOverlay)
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('click', this._closePopupByClickOnOverlay)
  }

  _closePopupByClickOnOverlay(event) {
    if (event.target.classList.contains('popup')) {
      this.close();
    }
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
  }
}

