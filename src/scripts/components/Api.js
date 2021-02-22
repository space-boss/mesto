export class Api {
  constructor(config){
		this._url = config.url;
    this._headers = {
      "Content-Type": "application/json", 
      "Authorization": config.authorization,
    };
  }

  getInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject('Не удалось загрузить данные с сервера')
    })
  }

  updateInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject('Не удалось загрузить данные')
    })
  }

  updateAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject('Не удалось обновить аватар')
    })
  }

  getCard() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Не удалось загрузить данные с сервера');
    });
  }

  generateCard(newCard) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: newCard.place,
        link: newCard.link,
      })
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Не удалось создать объект');
    });
  }
  

  postCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject('Сохранение карточки не возможно')
    })
  }

  deleteCard(card){
    return fetch(`${this._url}/cards/${card._cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then((res) => {
      if(!res.ok) {
        return Promise.reject('Не удалось удалить карточку')
      }
    })
  }
  
  likeCard(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject('Отметка Нравится не поставлена')
    })
  }

  unlikeCard(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject('Не удалось отменить отметку Нравится')
    })
  }
}


   