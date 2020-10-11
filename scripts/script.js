let popupprofileOpened = document.querySelector('.profile__edit-button');
let popupplaceOpened = document.querySelector('.profile__add-button');
let popup = document.querySelector('.popup');
let popupClosed = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');

let popupProfile = document.querySelector('.popup__profile');
let userName = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input-field_value_name');
let jobInput = document.querySelector('.popup__input-field_value_job');

let popupPlace = document.querySelector('.popup__place');
let placeTitle = document.querySelector('.place__title');
let placeCover = document.querySelector('.place__cover');
let placeInput = document.querySelector('.popup__input-field_value_place');
let placeUrl = document.querySelector('.popup__input-field_value_placeurl');


function openprofilePopup () {
  nameInput.value = userName.textContent;
  jobInput.value = job.textContent;
  popupProfile.classList.add('popup_opened');
}

function openplacePopup () {
  placeInput.value = placeTitle.textContent;
  /*jobInput.value = job.textContent;*/
  popupPlace.classList.add('popup_opened');
}

function closePopup () {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  job.textContent = jobInput.value;

  closePopup ();
}


popupprofileOpened.addEventListener('click', openprofilePopup);
popupplaceOpened.addEventListener('click', openplacePopup);

popupClosed.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);
