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

    this._element.querySelector('.place__cover').src = this._backgroundImage;
    this._element.querySelector('.place__title').textContent = this._title;

    return this._element;
 }
}




