import {Popup} from './popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(link, name) {
    _zoomPlaceImg.src = link;
    _zoomPlaceImg.alt = name;
    _zoomPlaceCaption.textContent = card._name;
    super.open();
  }
}

/*export class PopupWithImage extends Popup {
  constructor(popupSelector, imageSelector, captionSelector) {
    super(popupSelector);
    this._popupImageSelector = imageSelector;
    this._popupCaptionSelector = captionSelector;
  }

  open(link, name) {
    this._popupImageSelector.src = link;
    this._popupCaptionSelector.textContent = name;
    super.open();
  }
}*/
