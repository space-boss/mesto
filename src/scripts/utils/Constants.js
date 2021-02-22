const places = '.places';
const addPlace = document.querySelector('.profile__add-button');

const template = '.template';
const inputPlaceName = document.querySelector('.popup__input-field_value_place');
const inputPlaceUrl = document.querySelector('.popup__input-field_value_placeurl');
const likeCount = document.querySelector('.place__like-count');

const editProfile = document.querySelector('.profile__edit-button');
const editAvatar = document.querySelector('.profile__userpic-edit-button');

const formElement = document.querySelector('.popup__form');
const popupProfileSelector = '.popup_profile';
const popupAvatarSelector = '.popup_avatar';
const popupPlaceSelector = '.popup_place';
const popupZoomSelector = '.popup_zoom';
const popupDeleteSelector = '.popup_delete-confirmation';

const userName = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');
const userPic = document.querySelector('.profile__pic');

const zoomPlaceImg = document.querySelector('.popup__img');
const zoomPlaceCaption = document.querySelector('.popup__caption');

const submitButtons = document.querySelectorAll('.popup__submit-button');

export {
  places,
  addPlace,

  template,
  inputPlaceName,
  inputPlaceUrl,
  editProfile,
  editAvatar,
  likeCount,

  formElement,
  popupProfileSelector,
  popupAvatarSelector,
  popupPlaceSelector,
  popupZoomSelector,
  popupDeleteSelector,

  userName,
  job,
  userPic,
  zoomPlaceImg,
  zoomPlaceCaption,

  submitButtons
}
