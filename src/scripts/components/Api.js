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
      return Promise.reject('Сервер не доступен')
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
      return Promise.reject('Сервер не доступен')
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
      return Promise.reject("Сервер не доступен");
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
      return Promise.reject('Сервер не доступен')
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
}   