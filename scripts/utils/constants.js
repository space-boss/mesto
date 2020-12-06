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

export {
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
  nameInput,
  jobInput,
  zoomPlaceImg,
  zoomPlaceCaption
}
