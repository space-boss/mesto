import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor({popupSelector}) {
    super({popupSelector});
    this._zoomPlaceImg = this._popup.querySelector('.popup__img');
    this._zoomCaption = this._popup.querySelector('.popup__caption');
  }

  open(title, backgroundImage) {
    this._zoomPlaceImg.src = backgroundImage;
    this._zoomPlaceImg.alt = title;
    this._zoomCaption.textContent = title;
    super.open();
  }
}
