import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor({popupSelector, image, caption}) {
    super({popupSelector});
    this._zoomPlaceImg = image;
    this._zoomCaption = caption;
  }

  open(title, backgroundImage) {
    this._zoomPlaceImg.src = backgroundImage;
    this._zoomCaption.textContent = title;
    super.open();
  }
}
