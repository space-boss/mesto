import './index.css';

import {Card} from '../scripts/components/Card.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import {Section} from '../scripts/components/Section.js';

import {PopupWithImage} from '../scripts/components/PopupWithImage.js';
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

  userName,
  job,
  zoomPlaceImg,
  zoomPlaceCaption
} from '../scripts/utils/constants.js';


const api = new Api({
  url:"https://mesto.nomoreparties.co/v1/cohort-20/cards",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'e834f1b9-ceab-4d08-a43d-18df96eb5098'
  }
})

// renders cards from the server to the page
api
  .getAllCards()
  .then((data) => {
  const defaultCardList = new Section (
    {
      items: data,
      renderer: (item) => { 
        const cardElement = createCard(item)
        defaultCardList.addItem(cardElement);
      }
    },
    places
  )
  defaultCardList.renderItems();
})


function createCard(item) {
  const card = new Card(
    item,
    template,
    function handleCardClick(title, backgroundImage) {
      popupZoom.open(title, backgroundImage)
    }
  );
  const cardElement = card.generateCard();
  return cardElement
}


//adds a new custom card
const addCards = () => {
    const newCard = {};

    newCard.title = inputPlaceName.value;
    newCard.backgroundImage = inputPlaceUrl.value;

    const newCardElement = createCard(newCard)
    defaultCardList.prependItem(newCardElement);
};

//opens popup with a new place
const popupPlace = new PopupWithForm({
  popupSelector: popupPlaceSelector,
  formSubmitHandler: (data) => {
    addCards(data);
    popupPlace.close();
  }
});

//filling in of user info
const userInfo = new UserInfo({
  userNameSelector: userName,
  userBioSelector: job
});

//opens popup with user info
const popupProfile = new PopupWithForm({
  popupSelector: popupProfileSelector,
  formSubmitHandler: (data) => {
    userInfo.setUserInfo(data);
    popupProfile.close();
  }
});

//zooms up a place picture
const popupZoom = new PopupWithImage({
  popupSelector: popupZoomSelector,
  image: zoomPlaceImg,
  caption: zoomPlaceCaption
});

//event listeners for popups
popupProfile.setEventListeners();
popupPlace.setEventListeners();
popupZoom.setEventListeners();

 
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

//opening popups by clicking on elements
editProfile.addEventListener('click', () => popupProfile.open());

addPlace.addEventListener('click', () => popupPlace.open());


