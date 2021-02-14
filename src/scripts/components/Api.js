export class Api {
  constructor(config){
		this._url = config.url;
		this._headers = config.headers;
  }

  getInfo(){
    return fetch(this._url, {
      method: "GET",
      headers: this._headers
    }).then((res) => {
      if(res.ok) {
        //console.log(res.json())
        return res.json()
      }
      return Promise.reject('Сервер не доступен')
    })
  }
}  