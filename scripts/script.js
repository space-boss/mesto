import {Card} from './card.js';
import {FormValidator} from './formValidator.js';

const cards = [{
  title: 'Исландия',
  backgroundImage: './images/iceland.jpg'
}, {
  title: 'Порт в Антверпене',
  backgroundImage: './images/antwerpen.jpeg'
}, {
  title: 'Мыс Доброй Надежды',
  backgroundImage: './images/capetown.jpg'
}, {
  title: 'Марианская Впадина',
  backgroundImage: './images/mariana.jpg'
}, {
  title: 'Териберка',
  backgroundImage: './images/teriberka.jpg'
}, {
  title: 'Карибские острова',
  backgroundImage: './images/caribbean-island.jpg'
}];


const places = document.querySelector('.places');
const addPlace = document.querySelector('.profile__add-button');
const placeForm = document.querySelector('.popup__form-place');

const template = '.template';
const inputPlaceName = document.querySelector('.popup__input-field_value_place');
const inputPlaceUrl = document.querySelector('.popup__input-field_value_placeurl');

const editProfile = document.querySelector('.profile__edit-button');

const formElement = document.querySelector('.popup__form');
const popupProfile = document.querySelector('.popup__profile');
const popupPlace = document.querySelector('.popup__place');

const userName = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input-field_value_name');
const jobInput = document.querySelector('.popup__input-field_value_job');

const zoomPlace = document.querySelector('.popup__zoom');
const zoomPlaceImg = document.querySelector('.popup__img');
const zoomPlaceCaption = document.querySelector('.popup__caption');


// renders cards to the page
cards.forEach((item) => {
  const card = new Card(item, template, openCardHandler);
  const cardElement = card.generateCard();

  places.append(cardElement);
});


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
    closePopup(popupPlace);
  });
};

addCards();

//zooms up a popup
function openCardHandler(link, name) {
  zoomPlaceImg.src = link;
  zoomPlaceCaption.textContent = name;
  showPopup(zoomPlace);
}

//opens popups
function showPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeOnEsc);
}

function openPopupProfile() {
  nameInput.value = userName.textContent;
  jobInput.value = job.textContent;
  showPopup(popupProfile);
}

//closes popup after different actions
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOnEsc);
}

function closePopupByClickOnOverlay(event) {
  if (event.target.classList.contains('popup')) {
    closePopup(event.target);
  }
}

function closeOnEsc(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
}

//edits profile
function submitFormHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupProfile);
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


editProfile.addEventListener('click', openPopupProfile);

addPlace.addEventListener('click', () => showPopup(popupPlace));

formElement.addEventListener('submit', submitFormHandler);


//event listeners responsible for different ways to close popups
popupProfile.addEventListener('click', closePopupByClickOnOverlay);
popupPlace.addEventListener('click', closePopupByClickOnOverlay);
zoomPlace.addEventListener('click', closePopupByClickOnOverlay);

popupProfile.querySelector('.popup__close').addEventListener('click', () => closePopup(popupProfile));
zoomPlace.querySelector('.popup__close').addEventListener('click', () => closePopup(zoomPlace));
popupPlace.querySelector('.popup__close').addEventListener('click', () => closePopup(popupPlace));
