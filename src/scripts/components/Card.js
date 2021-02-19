export class Card {
  constructor(
    data,
    cardSelector,
    myId,
    handleCardClick,
    handleDeleteClick,
  ) {
    this._title = data.name;
    this._backgroundImage = data.link;
    this._likeCount = data.likes.length;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._myId = myId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
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

    if (!this._checkMyCard()) {
     this._element.querySelector('.place__delete').classList.toggle('place__delete_shown');
    }

    this._setEventListeners();
    this._showLikes();
    const placeCover = this._element.querySelector('.place__cover');

    placeCover.src = this._backgroundImage;
    placeCover.alt = this._title;
    this._element.querySelector('.place__title').textContent = this._title;
    this._element.querySelector('.place').setAttribute('id', this._cardId);

    return this._element;
  } 

  _setEventListeners() {
    this._element.querySelector('.place__like').addEventListener('click', (evt) => {
      this._handleLike(evt);
    });

    this._element.querySelector('.place__delete').addEventListener('click', () => {
      this._handleDeleteClick(this._cardId);
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

  _checkMyCard() {
    if (this._ownerId === this._myId) {
      return true
    }
    else return false
  }
}




