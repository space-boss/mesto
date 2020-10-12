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
const addButton = document.querySelector('.profile__add-button');
const template = document.querySelector('.template');
const inputPlaceName = document.querySelector('')

const popupOpened = document.querySelector('.profile__edit-button');
const popupClosed = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const popup = document.querySelector('.popup');
const userName = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input-field_value_name');
const jobInput = document.querySelector('.popup__input-field_value_job');


const renderCards = () => {
  const items = cards.map(element => {
    return getItems(element);
  }).join('');

  places.insertAdjacentHTML('afterbegin', items);
};

const getCards = (data) => {
  return `<div class="place">
            <div class="place__cover" style="background-image:url(${element.backgroundImage});"></div>
              <div class="place__description">
              <h2 class="place__title">${element.title}</h2>
              <button type="button" class="place__like" aria-label="Добавить в избранное"></button>
             </div>
          </div>`;
};

const addCards = () => {
  addButton.addEventListener('click', () => {
    const item = getItems( {
      title: ''
    });
  places.insertAdjacentHTML('afterbegin', item);
  })
};


renderCards();

/*
function openPopup () {r
  nameInput.value = userName.textContent;
  jobInput.value = job.textContent;
  popup.classList.toggle('popup_opened');
}

function closePopup () {
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  job.textContent = jobInput.value;

  closePopup ();
}

popupOpened.addEventListener('click', openPopup);

popupClosed.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler); */
