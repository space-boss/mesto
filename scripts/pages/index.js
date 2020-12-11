import {Card} from '../components/Card.js';
import {FormValidator} from '../utils/formValidator.js';
import {Section} from '../components/Section.js';

import {Popup} from '../components/Popup.js';
import {PopupWithImage} from '../components/PopupWithImg.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '..//components/UserInfo.js';

import {
  cards,
  places,
  addPlace,
  placeForm,
  template,
  inputPlaceName,
  inputPlaceUrl,
  editProfile,

  formElement,
  popupProfileSelector,
  popupPlaceSelector,
  popupZoomSelector,

  userName,
  job,
  zoomPlaceImg,
  zoomPlaceCaption
} from '../utils/constants.js';


const popupProfile = new PopupWithForm({
  popupSelector: popupProfileSelector,
  formSubmitHandler: function formSubmitHandler(evt) {
    evt.preventDefault();
    userInfo.setUserInfo();
    popupProfile.close();
  }
});


/*const popupProfile = new Popup({popupSelector: popupProfileSelector});*/
const popupPlace = new Popup({popupSelector: popupPlaceSelector});
const popupZoom = new PopupWithImage({
  popupSelector: popupZoomSelector,
  imageSelector:  zoomPlaceImg,
  captionSelector: zoomPlaceCaption
});

popupProfile.setEventListeners();
popupPlace.setEventListeners();
popupZoom.setEventListeners();

const userInfo = new UserInfo({
  userNameSelector: userName,
  userBioSelector: job
});


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
  placeForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

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

    places.prepend(newCardElement);
    inputPlaceName.value = '';
    inputPlaceUrl.value = '';
    popupPlace.close()
  });
};

addCards();

function openpopupProfile() {
  userInfo.getUserInfo()
  popupProfile.open()
}

/*//edits profile
function submitFormHandler(evt) {
  evt.preventDefault();
  userInfo.setUserInfo();
  popupProfile.close();
} */

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


editProfile.addEventListener('click', openpopupProfile);

addPlace.addEventListener('click', () => popupPlace.open());

/*formElement.addEventListener('submit', submitFormHandler);*/

/*
// event listeners responsible for different ways to close popups
popupProfileSelector.addEventListener('click', closePopupByClickOnOverlay);
popupPlaceSelector.addEventListener('click', closePopupByClickOnOverlay);
zoomPlace.addEventListener('click', closePopupByClickOnOverlay); */
