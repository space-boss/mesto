import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor({popupSelector, imageSelector, captionSelector}) {
    super({popupSelector});
    this._zoomPlaceImg = imageSelector;
    this._zoomCaption = captionSelector
  }

  open(card) {
    this._zoomPlaceImg.src = card._backgroundImage;
    this._zoomCaption.textContent = card._title;
    super.open();
  }
}
