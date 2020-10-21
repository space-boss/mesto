const cards = [
  { title: 'Исландия',
    backgroundImage: './images/iceland.jpg',
  },

  { title: 'Порт в Антверпене',
    backgroundImage: './images/antwerpen.jpeg',
  },

  { title: 'Мыс Доброй Надежды',
    backgroundImage: './images/capetown.jpg',
  },

  { title: 'Марианская Впадина',
    backgroundImage: './images/mariana.jpg',
  },

  { title: 'Териберка',
    backgroundImage: './images/teriberka.jpg',
  },

  { title: 'Карибские острова',
    backgroundImage: './images/caribbean-island.jpg',
  },
];

const places = document.querySelector('.places');
const addPlace = document.querySelector('.profile__add-button');
const savePlace = document.querySelector('.popup__submit-button_place');
const template = document.querySelector('.template');
const inputPlaceName = document.querySelector('.popup__input-field_value_place');
const inputPlaceUrl = document.querySelector('.popup__input-field_value_placeurl');
const placeLikePressed = document.querySelector('.place__like_pressed');

const editProfile = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');

const popupClosed = document.querySelectorAll('.popup__close');
const formElement = document.querySelector('.popup__form');
const popupProfile = document.querySelector('.popup__profile');
const popupPlace = document.querySelector('.popup__place');

const zoomPlace = document.querySelector('.popup__zoom');
const zoomPlaceImg = document.querySelector('.popup__img');
const zoomPlaceCaption = document.querySelector('.popup__caption');

const userName = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input-field_value_name');
const jobInput = document.querySelector('.popup__input-field_value_job');


// builds one card
const getCards = (data) => {
  const card = template.content.cloneNode(true);

  card.querySelector('.place__title').innerText = data.title;
  card.querySelector('.place__cover').src = data.backgroundImage;

  const likePlace = card.querySelector('.place__like');
  const deletePlace = card.querySelector('.place__delete');
  const imgPlace = card.querySelector('.place__cover');

  likePlace.addEventListener('click', handlerLike);
  deletePlace.addEventListener('click', handlerDelete);
  imgPlace.addEventListener('click', openPopupZoom);

  function openPopupZoom (evt) {
    const eventTarget = evt.target;
    zoomPlace.classList.toggle('popup_opened');
    zoomPlaceImg.src = data.backgroundImage;
    zoomPlaceCaption.innerText = data.title;
  }

  return card;
};


// renders all cards to the page
const renderCards = () => {
  const items = cards.map(element => getCards(element));

  places.append(...items)
};


function openPopupProfile(evt) {
  nameInput.value = userName.textContent;
  jobInput.value = job.textContent;
  popupProfile.classList.toggle('popup_opened');
}

function closePopup(evt) {
  const eventTarget = evt.target;
  eventTarget.parentElement.parentElement.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(evt);
}

const addCards = () => {
  savePlace.addEventListener('click', (evt) => {
    evt.preventDefault();
    const item = getCards({
      title: inputPlaceName.value,
      backgroundImage: inputPlaceUrl.value
    });

   places.prepend(item);
   inputPlaceName.value = '';
   inputPlaceUrl.value = '';
   popupPlace.classList.toggle('popup_opened');
  });
};

function openPopupPlace () {
  popupPlace.classList.toggle('popup_opened');
}

const handlerLike = (evt) => {
  const likeTarget = evt.target;
  likeTarget.classList.toggle('place__like_pressed');
}

const handlerDelete = (evt) => {
  evt.target.closest('.place').remove();
}


renderCards();
addCards();


editProfile.addEventListener('click', openPopupProfile);

addPlace.addEventListener('click', openPopupPlace);

popupClosed.forEach((button) => {
  button.addEventListener('click', closePopup);
});

formElement.addEventListener('submit', formSubmitHandler);

