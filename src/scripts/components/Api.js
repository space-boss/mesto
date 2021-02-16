export class Api {
  constructor(config){
		this._url = config.url;
		this._headers = config.headers;
  }

  getInfo() {
    return fetch(this._url, {
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
    return fetch(this._url, {
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

  postCard(data) {
    return fetch(this._url, {
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
}   