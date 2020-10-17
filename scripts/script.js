let popupOpened = document.querySelector('.profile__edit-button');
let popupClosed = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let popup = document.querySelector('.popup');
let userName = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input-field_value_name');
let jobInput = document.querySelector('.popup__input-field_value_job');

function openPopup () {
  nameInput.value = userName.textContent;
  jobInput.value = job.textContent;
  popup.classList.add('popup_opened');
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

popupOpened.addEventListener('click', openPopup);

popupClosed.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);
