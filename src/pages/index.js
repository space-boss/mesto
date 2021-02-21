import './index.css';

import {Card} from '../scripts/components/Card.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import {Section} from '../scripts/components/Section.js';

import {PopupWithImage} from '../scripts/components/PopupWithImage.js';
import {PopupWithDelete} from '../scripts/components/PopupWithDelete.js';
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


//creates an empty class for user information
const userInfo = new UserInfo({
  userNameSelector: userName,
  userBioSelector: job,
  userPicSelector: userPic
});

//function used for filling user information with data
function createUserInfo(data) {
  userInfo.setUserInfo(data);

  //opens popup with user info
  const popupProfile = new PopupWithForm({
    popupSelector: popupProfileSelector,
    formSubmitHandler: (data) => {
        userInfo.setUserInfo(data);
        api.updateInfo(data);
        popupProfile.close();
      }
    });
  popupProfile.setEventListeners();
    
  //opening popups by clicking on elements
  editProfile.addEventListener('click', () => popupProfile.open());
}

/*//renders card items into the layout
const defaultSection = new Section (
  {
    items: data,
    renderer: (item) => { 
      const cardElement = createCard(item)
      defaultSection.addItem(cardElement);    
    }
  },
  places,
  api
)
defaultSection.renderItems();

//generates a card element out of a template
function createCard(item) {
  const card = new Card(
    item,
    template,
    userInfo.getUserId(),
    function handleCardClick(name, link) {
      popupZoom.open(name, link)
    },
    function handleDeleteClick(cardId) {
      popupDeleteConfirmation.open(this, cardId);
    },
    api        
  )
  const cardElement = card.generateCard();
  return cardElement
}
  
//adds a new custom card
const addCards = () => {
  defaultSection.saveItem(inputPlaceName.value, inputPlaceUrl.value).then((card) => {
    defaultSection.prependItem(createCard(card));
  });
};
  
//opens popup that asks for confirmation before card is deleted
const popupDeleteConfirmation = new PopupWithDelete({
  popupSelector: popupDeleteSelector
  },
  api
)
///popupDeleteConfirmation.setEventListeners();

//opens popup with a new place
const popupPlace = new PopupWithForm({
  popupSelector: popupPlaceSelector,
  formSubmitHandler: (data) => {
    addCards(data);
    popupPlace.close();
  }
});
//popupPlace.setEventListeners();

//addPlace.addEventListener('click', () => popupPlace.open());

const popupAvatarChange = new PopupWithForm({
  
})*/



const api = new Api({
  url:"https://mesto.nomoreparties.co/v1/cohort-20",
  authorization: 'e834f1b9-ceab-4d08-a43d-18df96eb5098'
})

//api query used to fill user infor with data from the server
api 
  .getInfo()
  .then(res => createUserInfo(res))
  .catch(err => console.log(err)) 

function createSection(data) {
  const defaultSection = new Section (
    {
      items: data,
      renderer: (item) => { 
        const cardElement = createCard(item)
        defaultSection.addItem(cardElement);    
      }
    },
    places,
    api
  )
  defaultSection.renderItems();
}

function createCard(item) {
  const card = new Card(
    item,
    template,
    userInfo.getUserId(),
    function handleCardClick(name, link) {
      popupZoom.open(name, link)
    },
    function handleDeleteClick(cardId) {
      popupDeleteConfirmation.open(this, cardId);
    },
    api        
  )
  const cardElement = card.generateCard();
  return cardElement
}

function addCards(data) {

  const section = createSection(data);

  section.saveItem(inputPlaceName.value, inputPlaceUrl.value).then((card) => {
    section.prependItem(createCard(card));
  });
};

const popupDeleteConfirmation = new PopupWithDelete({
  popupSelector: popupDeleteSelector
  },
  api
)
//popupDeleteConfirmation.setEventListeners();

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

// renders cards from the server to the page
api
  .getCard()
  .then((data) => createSection(data))
  .then((item) => {
    createCard(item);
    popupDeleteConfirmation.setEventListeners();
    popupPlace.setEventListeners();
  })
  .then(() => addCards())


   
      /*const defaultSection = new Section (
      {
        items: data,
        renderer: (item) => { 
          const cardElement = createCard(item)
          defaultSection.addItem(cardElement);    
        }
      },
      places,
      api
    )
    defaultSection.renderItems();

    function createCard(item) {
      const card = new Card(
        item,
        template,
        userInfo.getUserId(),
        function handleCardClick(name, link) {
          popupZoom.open(name, link)
        },
        function handleDeleteClick(cardId) {
          popupDeleteConfirmation.open(this, cardId);
        },
        api        
      )
      const cardElement = card.generateCard();
      return cardElement
    }
      
    //adds a new custom card
    const addCards = () => {
      defaultSection.saveItem(inputPlaceName.value, inputPlaceUrl.value).then((card) => {
        defaultSection.prependItem(createCard(card));
      });
    };
      
    //opens popup that asks for confirmation before card is deleted
    const popupDeleteConfirmation = new PopupWithDelete({
      popupSelector: popupDeleteSelector
      },
      api
    )
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

    /*const popupAvatarChange = new PopupWithForm({
      
    })

  })
  .catch(err => console.log(err)) */
    

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