const places = '.places';
const addPlace = document.querySelector('.profile__add-button');

const template = '.template';
const likeCount = document.querySelector('.place__like-count');

const editProfile = document.querySelector('.profile__edit-button');
const editAvatar = document.querySelector('.profile__userpic-edit-button');

const formElement = document.querySelector('.popup__form');
const popups = document.querySelectorAll('.popup');

const popupProfileSelector = document.querySelector('.popup_profile');
const popupAvatarSelector = document.querySelector('.popup_avatar');
const popupPlaceSelector = document.querySelector('.popup_place');

const popupProfileForm = popupProfileSelector.querySelector('.popup__form');
const popupAvatarForm = popupAvatarSelector.querySelector('.popup__form');
const popupPlaceForm = popupPlaceSelector.querySelector('.popup__form');


const popupZoomSelector = document.querySelector('.popup_zoom');
const popupDeleteSelector = document.querySelector('.popup_delete-confirmation');

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

  popupPlaceSelector,
  popupAvatarSelector,
  popupProfileSelector,

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


