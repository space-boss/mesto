import './index.css';

import {Card} from '../scripts/components/Card.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import {Section} from '../scripts/components/Section.js';

import {PopupWithImage} from '../scripts/components/PopupWithImage.js';
import {Popup} from '../scripts/components/Popup.js';
import {PopupWithForm} from '../scripts/components/PopupWithForm.js';
import {UserInfo} from '../scripts/components/UserInfo.js';
import {Api} from '../scripts/components/Api.js';


import {
  places,
  addPlace,
  template, 
  inputPlaceName,
  inputPlaceUrl,
  editProfile, 

  popupProfileSelector,
  popupPlaceSelector,
  popupZoomSelector,
  popupDeleteSelector,

  userName,
  job,
  userPic,
  zoomPlaceImg,
  zoomPlaceCaption
} from '../scripts/utils/Constants.js';

const apiCards = new Api({
  url:"https://mesto.nomoreparties.co/v1/cohort-20/cards",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'e834f1b9-ceab-4d08-a43d-18df96eb5098'
  }
})

// renders cards from the server to the page
apiCards
  .getInfo()
  .then((data) => {
    const defaultCardList = new Section (
      {
        items: data,
        renderer: (item) => { 
          const cardElement = createCard(item)
          defaultCardList.addItem(cardElement);    
        }
      },
      places,
      apiCards
    )
    defaultCardList.renderItems();

    function createCard(item) {
      const card = new Card(
        item,
        template,
        function handleCardClick(name, link) {
          popupZoom.open(name, link)
        },
        function handleDeleteClick() {
          popupDeleteConfirmation.open();
        }
      );
      const cardElement = card.generateCard();
      return cardElement
    }
      
    //adds a new custom card
    const addCards = () => {
        const newCard = {};
      
        newCard.name = inputPlaceName.value;
        newCard.link = inputPlaceUrl.value;
      
        defaultCardList.saveItem(newCard.name, newCard.link);
        const newCardElement = createCard(newCard);
        defaultCardList.prependItem(newCardElement);
    };
      
    //opens popup that asks for confirmation before card is deleted
    const popupDeleteConfirmation = new Popup({
      popupSelector: popupDeleteSelector
    });
    popupDeleteConfirmation.setEventListeners();

    //opens popup with a new place
    const popupPlace = new PopupWithForm({
      popupSelector: popupPlaceSelector,
      formSubmitHandler: (data) => {
        addCards(data);
        popupPlace.close();
      }
    });
    popupPlace.setEventListeners();

    addPlace.addEventListener('click', () => popupPlace.open());

  })
  .catch(err => console.log(err))   


  const apiUserInfo = new Api({
  url:"https://mesto.nomoreparties.co/v1/cohort-20/users/me",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'e834f1b9-ceab-4d08-a43d-18df96eb5098'
  }
})

apiUserInfo 
  .getInfo()
  .then((data) => {
    const userInfo = new UserInfo({
      userNameSelector: userName,
      userBioSelector: job,
      userPicSelector: userPic
    });
    userInfo.setUserInfo(data);

  //opens popup with user info
  const popupProfile = new PopupWithForm({
    popupSelector: popupProfileSelector,
    formSubmitHandler: (data) => {
        userInfo.setUserInfo(data);
        apiUserInfo.updateInfo(data);
        popupProfile.close();
      }
    });
  popupProfile.setEventListeners();
    
  //opening popups by clicking on elements
  editProfile.addEventListener('click', () => popupProfile.open());

  })
  .catch(err => console.log(err))   


//opens popup with user info
const popupProfile = new PopupWithForm({
  popupSelector: popupProfileSelector,
  formSubmitHandler: (data) => {
      userInfo.setUserInfo(data);
      apiUserInfo.updateInfo(data);
      popupProfile.close();
    }
  });
popupProfile.setEventListeners();
  
//opening popups by clicking on elements
editProfile.addEventListener('click', () => popupProfile.open());

//zooms up a place picture
const popupZoom = new PopupWithImage({
  popupSelector: popupZoomSelector,
  image: zoomPlaceImg,
  caption: zoomPlaceCaption
});

//event listeners for popups
popupZoom.setEventListeners();

 
//variables used in form validation
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input-field_invalid',
  errorClass: 'popup__input-field_error'
}

const formElements = Array.from(document.querySelectorAll('.popup__form'));

formElements.forEach((form) => {
  new FormValidator(validationSettings, form).enableValidation();
});