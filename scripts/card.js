export class Card {
 constructor(title, backgroundImage, templateSelector) {
   this._title = title;
   this._backgroundImage = backgroundImage;
   this._template = document.querySelector(templateSelector).content.querySelector('.place');
 }

 generateCard(container) {
   this._content = this._template.cloneNode(true);

   this._content.querySelector('.place__title').innerText = this._title;
   this._content.querySelector('.place__cover').src = this._backgroundImage;

   container.append(this._content);
 }
}


