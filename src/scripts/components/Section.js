//containerSelector = places
export class Section {
  constructor({ items, renderer }, containerSelector, api) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this._api = api;
  }

  saveItem(newName, newLink) {
    this._api
    .postCard({name: newName, link: newLink})
    .then((data) => {
      this._prependItem({name: data.name, link: data.link})   
    })
    .catch(err => console.log(err))
  }

  addItem(element) {
    this._container.append(element);
  }

  _prependItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      this._renderer(item);
    });
  }
}


