import {Popup} from './popup.js';

export class PopupWithImage extends Popup {
  constructor({popupSelector}) {
    super(popupSelector);
  }

  open(card) {
    card._zoom.src = card._link;
    card._zoom.textContent = card._name;
    super.open();
  }
}
