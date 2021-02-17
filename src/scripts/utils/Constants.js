const icelandImage = new URL('../../images/iceland.jpg', import.meta.url);
const antwerpImage = new URL('../../images/antwerpen.jpeg', import.meta.url);
const capetownImage = new URL('../../images/capetown.jpg', import.meta.url);
const marianaImage = new URL('../../images/mariana.jpg', import.meta.url);
const teriberkaImage = new URL('../../images/teriberka.jpg', import.meta.url);
const carribeanImage = new URL('../../images/caribbean-island.jpg', import.meta.url);


const cards = [{
  title: 'Исландия',
  backgroundImage: icelandImage
}, {
  title: 'Порт в Антверпене',
  backgroundImage: antwerpImage
}, {
  title: 'Мыс Доброй Надежды',
  backgroundImage: capetownImage
}, {
  title: 'Марианская Впадина',
  backgroundImage: marianaImage
}, {
  title: 'Териберка',
  backgroundImage: teriberkaImage
}, {
  title: 'Карибские острова',
  backgroundImage: carribeanImage
},];

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
const popupDeleteSelector = '.popup_delete-confirmation';

const userName = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');

const zoomPlaceImg = document.querySelector('.popup__img');
const zoomPlaceCaption = document.querySelector('.popup__caption');

export {
  cards,
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
  popupDeleteSelector,

  userName,
  job,
  zoomPlaceImg,
  zoomPlaceCaption
}
