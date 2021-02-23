const places = '.places';
const addPlace = document.querySelector('.profile__add-button');

const template = '.template';
const likeCount = document.querySelector('.place__like-count');

const editProfile = document.querySelector('.profile__edit-button');
const editAvatar = document.querySelector('.profile__userpic-edit-button');

const formElement = document.querySelector('.popup__form');
const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_profile');
const popupAvatar = document.querySelector('.popup_avatar');
const popupPlace = document.querySelector('.popup_place');

const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupAvatarForm = popupAvatar.querySelector('.popup__form');
const popupPlaceForm = popupPlace.querySelector('.popup__form');


const popupZoomSelector = '.popup_zoom';
const popupDeleteSelector = '.popup_delete-confirmation';

const userName = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');
const userPic = document.querySelector('.profile__pic');
const inputUserName = document.querySelector('.popup__input-field_value_name');
const inputJob = document.querySelector('.popup__input-field_value_job');


//variables used in form validation
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input-field_invalid',
  errorClass: 'popup__input-field_error',
}


export {
  places,
  addPlace,

  template,
  editProfile,
  editAvatar,
  likeCount,

  formElement,
  popups,

  popupZoomSelector,
  popupDeleteSelector,

  popupAvatarForm,
  popupPlaceForm,
  popupProfileForm,

  userName,
  job,
  userPic,
  inputUserName,
  inputJob,

  validationSettings,
}


