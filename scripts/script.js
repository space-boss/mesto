const cards = [
  { title: 'Исландия',
    backgroundImage: 'background-image:url(./images/iceland.jpg)',
  },

  { title: 'Порт в Антверпене',
    backgroundImage: 'background-image:url(./images/antwerpen.jpeg)',
  },

  { title: 'Мыс Доброй Надежды',
    backgroundImage: 'background-image:url(./images/capetown.jpg)',
  },

  { title: 'Марианская Впадина',
    backgroundImage: 'background-image:url(./images/mariana.jpg)',
  },

  { title: 'Териберка',
    backgroundImage: 'background-image:url(./images/teriberka.jpg)',
  },

  { title: 'Карибские острова',
    backgroundImage: 'background-image:url(./images/caribbean-island.jpg)',
  },
];

const places = document.querySelector('.places');
const addButton = document.querySelector('.profile__add-button');
const template = document.querySelector('.template');
const inputPlaceName = document.querySelector('.popup__input-field_value_place');

const popupOpened = document.querySelector('.profile__edit-button');
const popupCards = document.querySelector('.profile__add-button');
const popupClosed = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const popup = document.querySelector('.popup');
const userName = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input-field_value_name');
const jobInput = document.querySelector('.popup__input-field_value_job');


const getCards = (data) => {
  const card = template.content.cloneNode(true);

  card.querySelector('.place__title').innerText = data.title;
  card.querySelector('.place__cover').style = data.backgroundImage;

  return card;
};


const renderCards = () => {
  const items = cards.map(element => getCards(element));

  places.append(...items)
};

const addCards = () => {
  addButton.addEventListener('click', () => {
    const item = getCards( {
      title: inputPlaceName.value
    });
   places.prepend(item);

   input.value = '';
  })
};


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


renderCards();


popupCards.addEventListener('click', openPopup);

popupOpened.addEventListener('click', openPopup);

popupClosed.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);
