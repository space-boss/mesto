export class Card {
  constructor(
    data,
    cardSelector,
    myId,
    handleCardClick,
    { 
      handleLikeClick, 
      handleDeleteClick
    }) 
    {
    this._data = data;
    this._likes = data.likes;
    this._title = data.name;
    this._backgroundImage = data.link;
    this._likeCount = data.likes.length;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._myId = myId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
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

    if (!this._checkMyCard()) {
     this._element.querySelector('.place__delete').classList.toggle('place__delete_shown');
    }

    if (this.checkMyLikes()) {
      this._element.querySelector('.place__like').classList.toggle('place__like_pressed');
     }

    this._setEventListeners();

    const placeCover = this._element.querySelector('.place__cover');   
    placeCover.src = this._backgroundImage;
    placeCover.alt = this._title;

    this._element.querySelector('.place__title').textContent = this._title;

    this._setLikeCount(this._likeCount);

    return this._element;
  } 

  deleteCard() {
    this._element.remove();
    this._element = null;
  }
  
  _setEventListeners() {
    this._element.querySelector('.place__like').addEventListener('click', () =>
      this._handleLikeClick());

    this._element.querySelector('.place__delete').addEventListener('click', () => {
      this._handleDeleteClick(this._cardId);
    });

    this._element.querySelector('.place__cover-button').addEventListener('click', () => {
      this._handleCardClick(this._title, this._backgroundImage);
    });
  }

  toggleLike(data) {
    this._setLikeCount(data.likes.length);
    if (!this.checkMyLikes()) {
      this._element.querySelector('.place__like').classList.add('place__like_pressed');
    }
    else {
      this._element.querySelector('.place__like').classList.remove('place__like_pressed');
    }
  }

  _setLikeCount (likes) {
    this._element.querySelector('.place__like-count').textContent = likes;
  }

  _checkMyCard() {
    if (this._ownerId === this._myId) {
      return true
    }
    else return false
  }

  checkMyLikes() {
    return this._likes.some(like => {
      return like._id === this._myId;
    })
  }
}




