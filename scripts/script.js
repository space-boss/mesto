const cards = [{
  title: 'Исландия',
  backgroundImage: './images/iceland.jpg'
}, {
  title: 'Порт в Антверпене',
  backgroundImage: './images/antwerpen.jpeg'
}, {
  title: 'Мыс Доброй Надежды',
  backgroundImage: './images/capetown.jpg'
}, {
  title: 'Марианская Впадина',
  backgroundImage: './images/mariana.jpg'
}, {
  title: 'Териберка',
   backgroundImage: './images/teriberka.jpg'
}, {
  title: 'Карибские острова',
  backgroundImage: './images/caribbean-island.jpg'
}];

const places = document.querySelector('.places');
const addPlace = document.querySelector('.profile__add-button');
const savePlace = document.querySelector('.popup__submit-button_place');
const template = document.querySelector('.template');
const inputPlaceName = document.querySelector('.popup__input-field_value_place');
const inputPlaceUrl = document.querySelector('.popup__input-field_value_placeurl');

const editProfile = document.querySelector('.profile__edit-button');
const popups = document.querySelectorAll('.popup');

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
const getCard= (data) => {
  const card = template.content.cloneNode(true);

  card.querySelector('.place__title').innerText = data.title;
  card.querySelector('.place__cover').src = data.backgroundImage;

  const likePlace = card.querySelector('.place__like');
  const deletePlace = card.querySelector('.place__delete');
  const imgPlace = card.querySelector('.place__cover');

  likePlace.addEventListener('click', handleLike);
  deletePlace.addEventListener('click', deleteCard);
  imgPlace.addEventListener('click', openPopupZoom);

  function openPopupZoom (evt) {
    togglePopup(zoomPlace);
    zoomPlaceImg.src = data.backgroundImage;
    zoomPlaceCaption.innerText = data.title;
    document.addEventListener('keydown', closeOnEsc);
  }
  return card;
};


// renders all cards to the page
const renderCards = () => {
  const items = cards.map(getCard);

  places.append(...items)
};

//opens popups
function togglePopup(popup) {
  popup.classList.add('popup_opened');
};

function openPopupPlace() {
  togglePopup(popupPlace);
  document.addEventListener('keydown', closeOnEsc);

};

function openPopupProfile(evt) {
  nameInput.value = userName.textContent;
  jobInput.value = job.textContent;
  togglePopup(popupProfile);
  document.addEventListener('keydown', closeOnEsc);
};

//adds logic of closing popup on esc
const closeOnEsc = (evt) => {
  const activePopup = document.querySelector('popup_opened');
  if (evt.key === 'Escape'){
    closePopup(activePopup);
  };
  console.log('hey girl!')
};

//closes all popups
function closePopup(evt) {
  const eventTarget = evt.target;
  if (eventTarget.classList.contains('popup') || eventTarget.classList.contains('popup__close') || eventTarget.classList.contains('popup__submit-button') || evt.key === 'Escape') {
    popups.forEach((p) => {
      p.classList.remove('popup_opened');
    });
  }
}

//edits profile
function submitFormHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(evt);
};

//adds a new custom card
const addCards = () => {
  savePlace.addEventListener('click', (evt) => {
    evt.preventDefault();
    const item = getCard({
      title: inputPlaceName.value,
      backgroundImage: inputPlaceUrl.value
    });

    places.prepend(item);
    inputPlaceName.value = '';
    inputPlaceUrl.value = '';
    popupPlace.classList.toggle('popup_opened');
  })
};


const handleLike = (evt) => {
  const likeTarget = evt.target;
  likeTarget.classList.toggle('place__like_pressed');
};

const deleteCard = (evt) => {
  evt.target.closest('.place').remove();
};

renderCards();
addCards();


editProfile.addEventListener('click', openPopupProfile);

addPlace.addEventListener('click', openPopupPlace);

window.addEventListener('click', closePopup);

savePlace.addEventListener('click', addCards);

formElement.addEventListener('submit', submitFormHandler);

