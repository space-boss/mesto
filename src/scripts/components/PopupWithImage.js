import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor({popupSelector, imageSelector, captionSelector}) {
    super({popupSelector});
    this._zoomPlaceImg = imageSelector;
    this._zoomCaption = captionSelector
  }

  open(title, backgroundImage) {
    this._zoomPlaceImg.src = backgroundImage;
    this._zoomCaption.textContent = title;
    super.open();
  }
}
