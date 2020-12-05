import {Card} from '../components/card.js';
import {FormValidator} from '../utils/formValidator.js';
import {Section} from '../components/section.js';
import {
  cards
} from '../utils/constants.js';
import {Popup} from '../components/popup.js';


const places = '.places';
const addPlace = document.querySelector('.profile__add-button');
const placeForm = document.querySelector('.popup__form-place');

const template = '.template';
const inputPlaceName = document.querySelector('.popup__input-field_value_place');
const inputPlaceUrl = document.querySelector('.popup__input-field_value_placeurl');

const editProfile = document.querySelector('.profile__edit-button');

const formElement = document.querySelector('.popup__form');
const popupProfileSelector = document.querySelector('.popup_profile');
const popupPlaceSelector = document.querySelector('.popup_place');
const popupZoomSelector = document.querySelector('.popup_zoom');

const userName = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input-field_value_name');
const jobInput = document.querySelector('.popup__input-field_value_job');


const zoomPlaceImg = document.querySelector('.popup__img');
const zoomPlaceCaption = document.querySelector('.popup__caption');

// renders cards to the page
const defaultCardList = new Section (
  {
    items: cards,
    renderer: (item) => {
      const card = new Card(item, template, openCardHandler);
      const cardElement = card.generateCard();

      defaultCardList.addItem(cardElement);
    }
  },
  places
);

defaultCardList.renderItems();

const popupProfile = new Popup({popupSelector: popupProfileSelector});

const popupPlace = new Popup({popupSelector: popupPlaceSelector});

const popupZoom = new Popup({popupSelector: popupZoomSelector});

popupProfile.setEventListeners();
popupPlace.setEventListeners();
popupZoom.setEventListeners();


//adds a new custom card
const addCards = () => {
  placeForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const newCard = {};

    newCard.title = inputPlaceName.value;
    newCard.backgroundImage = inputPlaceUrl.value;

    const cardItem = new Card(newCard, template, openCardHandler);
    const newCardElement = cardItem.generateCard();

    places.prepend(newCardElement);
    inputPlaceName.value = '';
    inputPlaceUrl.value = '';
    popupPlace.close()
  });
};

addCards();

//zooms up a popup
function openCardHandler(link, name) {
  zoomPlaceImg.src = link;
  zoomPlaceCaption.textContent = name;
  popupZoom.open();
}

function openpopupProfile() {
  nameInput.value = userName.textContent;
  jobInput.value = job.textContent;
  popupProfile.open()
}

//edits profile
function submitFormHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popupProfile.close();
}

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

formElement.addEventListener('submit', submitFormHandler);


/*event listeners responsible for different ways to close popups
popupProfileSelector.addEventListener('click', closePopupByClickOnOverlay);
popupPlaceSelector.addEventListener('click', closePopupByClickOnOverlay);
zoomPlace.addEventListener('click', closePopupByClickOnOverlay); */
