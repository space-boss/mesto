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
const popups = document.querySelectorAll('.popup');

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

    const cardItem = new Card(newCard, template);
    const newCardElement = cardItem.generateCard();

    places.prepend(newCardElement);
    inputPlaceName.value = '';
    inputPlaceUrl.value = '';
    closePopup();
  });
};

addCards();

//zooms up a popup
function openCardHandler(link, name) {
  zoomPlaceImg.src = link;
  zoomPlaceCaption.textContent = name;
  togglePopup(zoomPlace);
}

//opens popups
function togglePopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeOnEsc);
}

function openPopupPlace() {
  togglePopup(popupPlace);
}

function openPopupProfile() {
  nameInput.value = userName.textContent;
  jobInput.value = job.textContent;
  togglePopup(popupProfile);
}

//closes popup
function closePopup() {
  popups.forEach((p) => {
    p.classList.remove('popup_opened');
  });
  document.removeEventListener('keydown', closeOnEsc);
}


//checks if popup should be closed
function checkIfShouldClosePopup(evt) {
  const eventTarget = evt.target;
  if (eventTarget.classList.contains('popup') || eventTarget.classList.contains('popup__close') || eventTarget.classList.contains('popup__submit-button')) {
    closePopup();
  }
}

//checks if popup should be closed if esc is pressed
function closeOnEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}

//edits profile
function submitFormHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  checkIfShouldClosePopup(evt);
}

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

addPlace.addEventListener('click', openPopupPlace);

window.addEventListener('click', checkIfShouldClosePopup);

formElement.addEventListener('submit', submitFormHandler);
