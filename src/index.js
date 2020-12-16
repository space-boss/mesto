import './styles/index.css';

import {Card} from './scripts/components/card.js';
import {FormValidator} from './scripts/utils/formValidator.js';
import {Section} from './scripts/components/Section.js';

import {PopupWithImage} from './scripts/components/PopupWithImg.js';
import {PopupWithForm} from './scripts/components/PopupWithForm.js';
import {UserInfo} from './scripts/components/UserInfo.js';



import {
  cards,
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
} from './scripts/utils/constants.js';


// renders cards to the page
const defaultCardList = new Section (
  {
    items: cards,
    renderer: (item) => {
      const card = new Card(
        item,
        template,
        function handleCardClick() {
          popupZoom.open(this)
        }
      );
      const cardElement = card.generateCard();

      defaultCardList.addItem(cardElement);
    }
  },
  places
)

defaultCardList.renderItems();

//adds a new custom card
const addCards = () => {
    const newCard = {};

    newCard.title = inputPlaceName.value;
    newCard.backgroundImage = inputPlaceUrl.value;

    const cardItem = new Card(
      newCard,
      template,
      function handleCardClick() {
        popupZoom.open(this)
      }
      );
    const newCardElement = cardItem.generateCard();

    document.querySelector(places).prepend(newCardElement);
};

//opens popup with a new place
const popupPlace = new PopupWithForm({
  popupSelector: popupPlaceSelector,
  formSubmitHandler: () => {
    addCards();
    popupPlace.close();
  }
});

//opens popup with user info
const popupProfile = new PopupWithForm({
  popupSelector: popupProfileSelector,
  formSubmitHandler: () => {
    userInfo.setUserInfo();
    popupProfile.close();
  }
});

//zooms up a place picture
const popupZoom = new PopupWithImage({
  popupSelector: popupZoomSelector,
  imageSelector:  zoomPlaceImg,
  captionSelector: zoomPlaceCaption
});

//event listeners for popups
popupProfile.setEventListeners();
popupPlace.setEventListeners();
popupZoom.setEventListeners();

//filling in of user info
const userInfo = new UserInfo({
  userNameSelector: userName,
  userBioSelector: job
});

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


