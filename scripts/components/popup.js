export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;

  }


  /*function showPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeOnEsc);
  }*/

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', () => this._hadleEscClose());
  }

  /*//closes popup after different actions
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOnEsc);
}*/
  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', () => this._hadleEscClose());
  }

  _hadleEscClose() {

  }

  _setEventListeners() {

  }

}

