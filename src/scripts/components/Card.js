export class Card {
  constructor(
    data,
    cardSelector,
    myId,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick
  ) {
    this._data = data;
    this._likes = data.likes;
    this._title = data.name;
    this._backgroundImage = data.link;
    this._likeCount = data.likes.length;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._myId = myId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick.bind(this);
    this._handleDeleteClick = handleDeleteClick.bind(this);
    this._handleLikeClick = handleLikeClick.bind(this)
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

    if (this.checkMyLikes()) {
      this._element.querySelector('.place__like').classList.toggle('place__like_pressed');
     }

    const placeCover = this._element.querySelector('.place__cover');

    placeCover.src = this._backgroundImage;
    placeCover.alt = this._title;

    this._element.querySelector('.place__title').textContent = this._title;
    this._element.querySelector('.place').setAttribute('id', this._cardId);

    this._likeCounter = this._element.querySelector('.place__like-count');
    this._likeButton = this._element.querySelector('.place__like');
    
    this.toggleLike();
    this._setEventListeners();

    return this._element;
  } 
  
  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._element.querySelector('.place__delete').addEventListener('click', () => {
      this._handleDeleteClick(this._cardId);
    });

    this._element.querySelector('.place__cover-button').addEventListener('click', () => {
      this._handleCardClick(this._title, this._backgroundImage);
    });
  }

  toggleLike() {
    if (!this.checkMyLikes()) {
      this._likeButton.classList.add('place__like_pressed');
    }
    else {
      this._likeButton.classList.remove('place__like_pressed');
    }
    this._likeCounter.textContent = this._likes.length;
  }

  /*_changeLikeCount () {
    this._element.querySelector('.place__like-count').textContent = this._likes.length;
  }*/

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

  /*_handleLikes(data) {
    if (this._checkMyLikes()) {
      this._api
        .unlikeCard(this._cardId)
        .then((res) => {
          this._toggleLike(data, res);
          //this._changeLikeCount();
        })
        .catch((err) => {
          console.log(err);
        });
      } else {
        this._api 
          .likeCard(this._cardId)
          .then((res) => {
            this._toggleLike(data, res);
            //this._changeLikeCount();
          })
          .catch((err) => {
            console.log(err);
          });
      }
  }*/
}




