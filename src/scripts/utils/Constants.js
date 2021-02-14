const places = '.places';
const addPlace = document.querySelector('.profile__add-button');

const template = '.template';
const inputPlaceName = document.querySelector('.popup__input-field_value_place');
const inputPlaceUrl = document.querySelector('.popup__input-field_value_placeurl');

const editProfile = document.querySelector('.profile__edit-button');

const formElement = document.querySelector('.popup__form');
const popupProfileSelector = '.popup_profile';
const popupPlaceSelector = '.popup_place';
const popupZoomSelector = '.popup_zoom';

const userName = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');

const zoomPlaceImg = document.querySelector('.popup__img');
const zoomPlaceCaption = document.querySelector('.popup__caption');

export {
  places,
  addPlace,

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
}
