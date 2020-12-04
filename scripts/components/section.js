//containerSelector = places
export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) { //setItem в тренажере
    this._container.append(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems() { // публичный метод, который отвечает за отрисовку всех элементов
    //this.clear();
    this._initialArray.forEach((item) => {
      this._renderer(item);
    });
  }
}


