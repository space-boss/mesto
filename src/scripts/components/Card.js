export class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick
  ) {
    this._title = data.name;
    this._backgroundImage = data.link;
    this._likeCount = data.likes.length;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._showLikes();
    const placeCover = this._element.querySelector('.place__cover');

    placeCover.src = this._backgroundImage;
    placeCover.alt = this._title;
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

    this._element.querySelector('.place__cover-button').addEventListener('click', () => {
      this._handleCardClick(this._title, this._backgroundImage);
    });
  }


  _handleLike(evt) {
    const _likeTarget = evt.target;
    _likeTarget.classList.toggle('place__like_pressed');
  }

  _showLikes() {
    this._element.querySelector('.place__like-count').textContent = this._likeCount;
  }

  _deleteCard(evt) {
    evt.target.closest('.place').remove();
  }
}




