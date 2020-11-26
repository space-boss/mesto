import {togglePopup} from './script.js'

export class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._backgroundImage = data.backgroundImage;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.place')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.place__cover').src = this._backgroundImage;
    this._element.querySelector('.place__title').textContent = this._title;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.place__like').addEventListener('click', (evt) => {
      this._handleLike(evt);
    });

    this._element.querySelector('.place__delete').addEventListener('click', (evt) => {
      this._deleteCard(evt);
    });

    this._element.querySelector('.place__cover-button').addEventListener('click', (evt) => {
      this._openPopupZoom(evt);
    });
  }

  _handleLike(evt) {
    const _likeTarget = evt.target;
    _likeTarget.classList.toggle('place__like_pressed');
  }

  _deleteCard(evt) {
    evt.target.closest('.place').remove();
  }

  _openPopupZoom() {
    const _zoomPlace = document.querySelector('.popup__zoom');
    const _zoomPlaceImg = document.querySelector('.popup__img');
    const _zoomPlaceCaption = document.querySelector('.popup__caption');

    togglePopup(_zoomPlace);
    _zoomPlaceImg.src = this._backgroundImage;
    _zoomPlaceCaption.innerText = this._title;
  }
}




