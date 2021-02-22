import './index.css';

import {Card} from '../scripts/components/Card.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import {Section} from '../scripts/components/Section.js';

import {PopupWithImage} from '../scripts/components/PopupWithImage.js';
import {PopupWithDelete} from '../scripts/components/PopupWithDelete.js';
import {PopupWithForm} from '../scripts/components/PopupWithForm.js';
import {UserInfo} from '../scripts/components/UserInfo.js';
import {Api} from '../scripts/components/Api.js';


import {
  places,
  addPlace,
  template, 
  editProfile, 
  editAvatar,

  popupProfileSelector,
  popupAvatarSelector,
  popupPlaceSelector,
  popupZoomSelector,
  popupDeleteSelector,

  userName,
  job,
  userPic,
  zoomPlaceImg,
  zoomPlaceCaption,

  submitButtons,
} from '../scripts/utils/Constants.js';

let myId = null;

//creates an empty class for user information
const userInfo = new UserInfo({
  userNameSelector: userName,
  userBioSelector: job,
  userPicSelector: userPic
});

const api = new Api({
  url:"https://mesto.nomoreparties.co/v1/cohort-20",
  authorization: 'e834f1b9-ceab-4d08-a43d-18df96eb5098'
});

const defaultSection = new Section (
  {
  renderer: (item) => { 
    createCard(item, defaultSection, myId)
    }
  },
  places);


function showLoading(loadingState) {
  console.log(submitButtons);
  if (loadingState) {
    Array.from(submitButtons).forEach((submit) => {
      console.log("loading");
      submit.value = "Сохранение...";
    })
  } 
  else {
    Array.from(submitButtons).forEach((submit) => {
    submit.value = "Сохранить";
    })
  }
}

///////////////////////////////////////////////////////////////////////////////

function handleCardClick(name, link) {
  popupZoom.open(name, link);
}

///////////////////////////////////////////////////////////////////////////////
//opens popup that asks for confirmation before card is deleted
const popupDeleteConfirmation = new PopupWithDelete({ popupSelector: popupDeleteSelector });
popupDeleteConfirmation.setEventListeners();

function handleDeleteClick(card) {
  console.log(card);
  popupDeleteConfirmation.setFormSubmitHandler(() => {
    api.deleteCard(card)
    .then(() => {
      card.deleteCard();
      popupDeleteConfirmation.close();
    })
    .catch(err => console.log(err));
  });
  popupDeleteConfirmation.open();
}
///////////////////////////////////////////////////////////////////////////////

function handleLikeClick(card, item) {
  var promise;
  if (card.checkMyLikes()) {
    promise = api.unlikeCard(card._cardId);
  }
  else {
    promise = api.likeCard(card._cardId);
  }
  promise
    .then((item) => {
      card.toggleLike(item);
    })
    .catch(err => console.log(err));
}

///////////////////////////////////////////////////////////////////////////////

function createCard(item, defaultSection, myId) {
  const card = new Card(
    item,
    template,
    myId,
    handleCardClick,
    {
      handleLikeClick: () => handleLikeClick(card, item),
      handleDeleteClick: () => handleDeleteClick(card)
    }
  );
  const cardElement = card.generateCard();
  //card.handleLikes(item)
  defaultSection.addItem(cardElement);
}

//zooms up a place picture
const popupZoom = new PopupWithImage({
  popupSelector: popupZoomSelector,
  image: zoomPlaceImg,
  caption: zoomPlaceCaption
});

popupZoom.setEventListeners();

///////////////////////////////////////////////////////////////////////////////

const popupPlace = new PopupWithForm({
  popupSelector: popupPlaceSelector,
  formSubmitHandler: (item) => {
    showLoading(true);
    api.generateCard(item)
      .then((data) => {
        console.log(data);
        createCard(data, defaultSection, myId);
        popupPlace.close();
    })
    .catch(err => console.log(err))
    .finally(() => showLoading(false))
  }
});

popupPlace.setEventListeners();

addPlace.addEventListener('click', () => {
  //TODO: validate?
  popupPlace.open();
});

///////////////////////////////////////////////////////////////////////////////

//opens popup with user info
const popupProfile = new PopupWithForm({ 
  popupSelector: popupProfileSelector,
  formSubmitHandler: (data) => {
    showLoading(true);
    api.updateInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupProfile.close();
      })
    .catch(err => console.log(err))
    .finally(() => showLoading(false))
  }  
});
popupProfile.setEventListeners();

editProfile.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  userName.value = userData.name;
  job.value = userData.about;
  popupProfile.open();
});

//opens popup with user avatar
const popupAvatar = new PopupWithForm({ 
  popupSelector: popupAvatarSelector,
  formSubmitHandler: (data) => {
    showLoading(true);
    api.updateAvatar(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupAvatar.close();
      })
    .catch(err => console.log(err))
    .finally(() => showLoading(false))
  }
});
popupAvatar.setEventListeners();

editAvatar.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  userPic.src = userData.avatar;
  popupAvatar.open();
});

///////////////////////////////////////////////////////////////////////////////

//api query used to fill user info with data from the server
Promise.all([api.getCard(), api.getInfo()])
  .then(([cards, user]) => {
    userInfo.setUserInfo(user);
    myId = user._id;
    defaultSection.renderItems(cards);
  })
  .catch(err => console.log(err));


  ///////////////////////////////////////////////////////////////////////////////

//variables used in form validation
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input-field_invalid',
  errorClass: 'popup__input-field_error'
}

const formElements = Array.from(document.querySelectorAll('.popup__form'));

formElements.forEach((form) => {
  new FormValidator(validationSettings, form).enableValidation();
});