import './index.css';

import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { Section } from '../scripts/components/Section.js';

import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { PopupWithDelete } from '../scripts/components/PopupWithDelete.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import { Api } from '../scripts/components/Api.js';
import { showLoading } from '../scripts/utils/utils.js';

import {
  places,
  addPlace,
  template,
  editProfile,
  editAvatar,

  popupZoomSelector,
  popupDeleteSelector,

  popupPlaceSelector,
  popupAvatarSelector,
  popupProfileSelector,

  userName,
  job,
  userPic,
  inputUserName,
  inputJob,


  popupAvatarForm,
  popupPlaceForm,
  popupProfileForm,

  validationSettings,
} from '../scripts/utils/сonstants.js';

let myId = null;

//creates an empty class for user information
const userInfo = new UserInfo({
  userNameSelector: userName,
  userBioSelector: job,
  userPicSelector: userPic
});

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-20",
  authorization: 'e834f1b9-ceab-4d08-a43d-18df96eb5098'
});

const defaultSection = new Section(
  {
    renderer: (item) => {
      createCard(item, defaultSection, myId)
    }
  },
  places);


function handleCardClick(name, link) {
  popupZoom.open(name, link);
}


//opens popup that asks for confirmation before card is deleted
const popupDeleteConfirmation = new PopupWithDelete({ popupSelector: popupDeleteSelector });
popupDeleteConfirmation.setEventListeners();

function handleDeleteClick(card) {
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


function handleLikeClick(card) {
  if (card.checkMyLikes()) {
    api.unlikeCard(card._cardId)
    .then((item) => {
      card.toggleLike(item);
    })
    .catch(err => console.log(err));
  }
  else {
    api.likeCard(card._cardId)
    .then((item) => {
      card.toggleLike(item);
    })
    .catch(err => console.log(err));
  }
}


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
  popupSelector: popupZoomSelector
});

popupZoom.setEventListeners();

const popupPlace = new PopupWithForm({
  popupSelector: popupPlaceSelector,
  formSubmitHandler: (item) => {
    showLoading(popupPlace.popupSubmitButton, true);
    api.generateCard(item)
      .then((data) => {
        createCard(data, defaultSection, myId);
        popupPlace.close();
      })
      .catch(err => console.log(err))
      .finally(() => showLoading(popupPlace.popupSubmitButton, false))
  }
});

popupPlace.setEventListeners();

addPlace.addEventListener('click', () => {
  addPlaceFormValidator.resetForm(popupPlaceForm);
  popupPlace.open();
});

//opens popup with user info
const popupProfile = new PopupWithForm({
  popupSelector: popupProfileSelector,
  formSubmitHandler: (data) => {
    showLoading(popupProfile.popupSubmitButton, true);
    api.updateInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupProfile.close();
      })
      .catch(err => console.log(err))
      .finally(() => showLoading(popupProfile.popupSubmitButton, false))
  }
});
popupProfile.setEventListeners();

editProfile.addEventListener('click', () => {
  editProfileFormValidator.resetForm(popupProfileForm);
  const userData = userInfo.getUserInfo();
  inputUserName.placeholder = userData.name;
  inputJob.placeholder = userData.about;
  popupProfile.open();
});

//opens popup with user avatar
const popupAvatar = new PopupWithForm({
  popupSelector: popupAvatarSelector,
  formSubmitHandler: (data) => {
    showLoading(popupAvatar.popupSubmitButton, true);
    api.updateAvatar(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupAvatar.close();
      })
      .catch(err => console.log(err))
      .finally(() => showLoading(popupAvatar.popupSubmitButton, false))
  }
});
popupAvatar.setEventListeners();

editAvatar.addEventListener('click', () => {
  changeAvatarFormValidator.resetForm(popupAvatarForm);
  const userData = userInfo.getUserInfo();
  userPic.src = userData.avatar;
  popupAvatar.open();
});



//api query used to fill user info with data from the server
Promise.all([api.getCard(), api.getInfo()])
  .then(([cards, user]) => {
    userInfo.setUserInfo(user);
    myId = user._id;
    defaultSection.renderItems(cards);
  })
  .catch(err => console.log(err));



//enables validation of separate forms
const changeAvatarFormValidator = new FormValidator(validationSettings, popupAvatarForm);
changeAvatarFormValidator.enableValidation();

const addPlaceFormValidator = new FormValidator(validationSettings, popupPlaceForm);
addPlaceFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(validationSettings, popupProfileForm);
editProfileFormValidator.enableValidation();