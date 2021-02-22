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
  inputPlaceName,
  inputPlaceUrl,
  editProfile, 

  popupProfileSelector,
  popupPlaceSelector,
  popupZoomSelector,
  popupDeleteSelector,

  userName,
  job,
  userPic,
  zoomPlaceImg,
  zoomPlaceCaption
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

///////////////////////////////////////////////////////////////////////////////

function handleCardClick(name, link) {
  popupZoom.open(name, link);
}

///////////////////////////////////////////////////////////////////////////////
//opens popup that asks for confirmation before card is deleted
/*const popupDeleteConfirmation = new PopupWithDelete({ popupSelector: popupDeleteSelector });
popupDeleteConfirmation.setEventListeners();

function handleDeleteClick(card) {
  popupDeleteConfirmation.setFormSubmitHandler(() => {
    api.deleteCard(card._id)
    .then(() => {
      card.deleteCard();
      popupDeleteConfirmation.close();
    })
    .catch(err => console.log(err));
  });
  popupDeleteConfirmation.open();
}
///////////////////////////////////////////////////////////////////////////////

function handleLikeClick(cardId) {
  console.log("like clicked");
}*/

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
  defaultSection.prependItem(cardElement);
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
    api.generateCard(item)
      .then((data) => {
        createCard(data, defaultSection, myId);

        popupPlace.close();
    })
    .catch(err => console.log(err));
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
    api.updateInfo(data)
    .then((data) => {
      console.log(data);
      userInfo.setUserInfo(data);
      popupProfile.close();
    })
    .catch(err => console.log(err));
  }
});
popupProfile.setEventListeners();

editProfile.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  userName.value = userData.name;
  job.value = userData.about;
  popupProfile.open();
});

///////////////////////////////////////////////////////////////////////////////

//api query used to fill user info with data from the server
Promise.all([api.getCard(), api.getInfo()])
  .then(([cards, user]) => {
    userInfo.setUserInfo(user);
    myId = user._id;
    // TODO: Set avatar
    defaultSection.renderItems(cards);
  })
  .catch(err => console.log(err));
