import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({popupSelector, formSubmitHandler}) {
    super({popupSelector});
    this._formSubmitHandler = formSubmitHandler;
  }

  /*_getInputValues() {
    const inputArray = Array.from(this._popupSelector.querySelectorAll('popup__input-field'));
    const inputValue = {};
    inputArray.forEach(item => {
      inputValue[item.name] = item.value;
    })
    return inputValue;
  }

  setEventListeners() {
    this._formElement.addEventListener('submit', this._formSubmitHandler);
    super.setEventListeners();
  }

  close() {
    this._popupSelector.querySelectorAll('.popup__input-field').value = '';
    super.close();
  } */
}


/*function openpopupProfile() {
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
