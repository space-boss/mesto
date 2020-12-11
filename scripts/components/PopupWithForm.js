import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({popupSelector, formSubmitHandler}) {
    super({popupSelector});
    this._formSubmitHandler = formSubmitHandler;
    this._formElement = document.querySelector('.popup__form');
  }

  _getInputValues() {
    const inputArray = Array.from(document.querySelectorAll('popup__input-field'));
    inputArray.forEach((item) => {
      item.value = item.textContent;
    });
  }

  setEventListeners() {
    this._formElement.addEventListener('submit', this._formSubmitHandler);
    super.setEventListeners();
  }

  close() {
    this._popupSelector.querySelectorAll('.popup__input-field').value = '';
    super.close();
  }
}

/*formElements.forEach((form) => {
  new FormValidator(validationSettings, form).enableValidation();
});


formElement.addEventListener('submit', submitFormHandler);

function openpopupProfile() {
  nameInput.value = userName.textContent;
  jobInput.value = job.textContent;
  popupProfile.open()
}

//edits profile
function submitFormHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popupProfile.close();
}*/
