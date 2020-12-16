export class Popup {
  constructor({popupSelector}) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
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
    this._popupSelector.addEventListener('click', this._closePopupByClickOnOverlay.bind(this))
  }
}
