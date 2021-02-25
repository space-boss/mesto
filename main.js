(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){var u=i.handleLikeClick,c=i.handleDeleteClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._likes=e.likes,this._title=e.name,this._backgroundImage=e.link,this._likeCount=e.likes.length,this._cardId=e._id,this._ownerId=e.owner._id,this._myId=r,this._cardSelector=n,this._handleCardClick=o,this._handleLikeClick=u,this._handleDeleteClick=c}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".place").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".place__like"),this._deleteButton=this._element.querySelector(".place__delete"),this._checkMyCard()||this._deleteButton.classList.toggle("place__delete_shown"),this.checkMyLikes()&&this._likeButton.classList.toggle("place__like_pressed"),this._setEventListeners();var e=this._element.querySelector(".place__cover");return e.src=this._backgroundImage,e.alt=this._title,this._element.querySelector(".place__title").textContent=this._title,this._setLikeCount(this._likeCount),this._element}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){return e._handleLikeClick()})),this._deleteButton.addEventListener("click",(function(){e._handleDeleteClick(e._cardId)})),this._element.querySelector(".place__cover-button").addEventListener("click",(function(){e._handleCardClick(e._title,e._backgroundImage)}))}},{key:"toggleLike",value:function(e){this._setLikeCount(e.likes.length),this.checkMyLikes()?this._likeButton.classList.remove("place__like_pressed"):this._likeButton.classList.add("place__like_pressed")}},{key:"_setLikeCount",value:function(e){this._element.querySelector(".place__like-count").textContent=e}},{key:"_checkMyCard",value:function(){return this._ownerId===this._myId}},{key:"checkMyLikes",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._myId}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,r;return t=e,(r=[{key:"_showError",value:function(e){this._form.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage,e.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));this._form.querySelector("#".concat(e.id)).textContent="",t&&(t.textContent=""),e.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_setEventListeners",value:function(){var e=this,t=Array.from(this._form.querySelectorAll(this._inputSelector)),n=this._form.querySelector(this._submitButtonSelector);this._toggleButtonState(n),t.forEach((function(t){t.addEventListener("input",(function(t){e._checkInputValidity(t.target),e._toggleButtonState(n)}))}))}},{key:"_toggleButtonState",value:function(e){this._form.checkValidity()?(e.disabled=!1,e.classList.remove(this._inactiveButtonClass)):(e.disabled=!0,e.classList.add(this._inactiveButtonClass))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetForm",value:function(e){var t=this,n=Array.from(e.querySelectorAll(this._inputSelector)),r=e.querySelector(this._submitButtonSelector);n.forEach((function(e){t._hideError(e)})),this._toggleButtonState(r)}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n=t.popupSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=n,this._closePopupByClickOnOverlay=this._closePopupByClickOnOverlay.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("click",this._closePopupByClickOnOverlay)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("click",this._closePopupByClickOnOverlay)}},{key:"_closePopupByClickOnOverlay",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){this._popup.querySelector(".popup__close").addEventListener("click",this.close.bind(this))}}])&&u(t.prototype,n),e}();function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function u(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._zoomPlaceImg=t._popup.querySelector(".popup__img"),t._zoomCaption=t._popup.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._zoomPlaceImg.src=t,this._zoomPlaceImg.alt=e,this._zoomCaption.textContent=e,s(h(u.prototype),"open",this).call(this)}}])&&a(t.prototype,n),u}(c);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._submitButton=document.querySelector(".popup__submit-button_delete"),t._place=document.querySelector(".place"),t}return t=u,(n=[{key:"setFormSubmitHandler",value:function(e){this.setFormSubmitHandler=e}},{key:"setEventListeners",value:function(){var e=this;this._submitButton.addEventListener("click",(function(t){t.preventDefault(),e.setFormSubmitHandler()})),m(k(u.prototype),"setEventListeners",this).call(this)}}])&&y(t.prototype,n),u}(c);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e){var t,n=e.popupSelector,r=e.formSubmitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._formSubmitHandler=r,t._formElement=t._popup.querySelector(".popup__form"),t._inputArray=t._popup.querySelectorAll(".popup__input-field"),t.popupSubmitButton=t._formElement.querySelector(".popup__submit-button"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputArray.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;E(P(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._formSubmitHandler(e._getInputValues())}))}},{key:"close",value:function(){this._formElement.reset(),E(P(u.prototype),"close",this).call(this)}}])&&C(t.prototype,n),u}(c);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.userNameSelector,r=t.userBioSelector,o=t.userPicSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userBio=r,this._userPic=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userBio.textContent,avatar:this._userPic.src}}},{key:"setUserInfo",value:function(e){e.name&&(this._userName.textContent=e.name),e.about&&(this._userBio.textContent=e.about),e.avatar&&(this._userPic.src=e.avatar),e._id&&(this.myId=e._id)}},{key:"getUserId",value:function(){return this.myId}}])&&L(t.prototype,n),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers={"Content-Type":"application/json",Authorization:t.authorization}}var t,n;return t=e,(n=[{key:"getInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Не удалось загрузить данные с сервера")}))}},{key:"updateInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Не удалось загрузить данные")}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Не удалось обновить аватар")}))}},{key:"getCard",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Не удалось загрузить данные с сервера")}))}},{key:"generateCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.place,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Не удалось создать объект")}))}},{key:"postCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Сохранение карточки не возможно")}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e._cardId),{method:"DELETE",headers:this._headers}).then((function(e){if(!e.ok)return Promise.reject("Не удалось удалить карточку")}))}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Отметка Нравится не поставлена")}))}},{key:"unlikeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Не удалось отменить отметку Нравится")}))}}])&&B(t.prototype,n),e}();function R(e,t){e.value=t&&null!=e?"Сохранение...":"Сохранить"}var T=document.querySelector(".profile__add-button"),A=(document.querySelector(".place__like-count"),document.querySelector(".profile__edit-button")),D=document.querySelector(".profile__userpic-edit-button"),x=(document.querySelector(".popup__form"),document.querySelectorAll(".popup"),document.querySelector(".popup_profile")),H=document.querySelector(".popup_avatar"),V=document.querySelector(".popup_place"),N=x.querySelector(".popup__form"),U=H.querySelector(".popup__form"),z=V.querySelector(".popup__form"),F=document.querySelector(".popup_zoom"),M=document.querySelector(".popup_delete-confirmation"),J=document.querySelector(".profile__title"),G=document.querySelector(".profile__subtitle"),$=document.querySelector(".profile__pic"),K=document.querySelector(".popup__input-field_value_name"),Q=document.querySelector(".popup__input-field_value_job"),W={formSelector:".popup__form",inputSelector:".popup__input-field",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_invalid",inputErrorClass:"popup__input-field_invalid",errorClass:"popup__input-field_error"};function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=null,Z=new q({userNameSelector:J,userBioSelector:G,userPicSelector:$}),ee=new I({url:"https://mesto.nomoreparties.co/v1/cohort-20",authorization:"e834f1b9-ceab-4d08-a43d-18df96eb5098"}),te=new i({renderer:function(e){oe(e,te,Y)}},".places");function ne(e,t){ie.open(e,t)}var re=new S({popupSelector:M});function oe(e,n,r){var o=new t(e,".template",r,ne,{handleLikeClick:function(){return function(e){e.checkMyLikes()?ee.unlikeCard(e._cardId).then((function(t){e.toggleLike(t)})).catch((function(e){return console.log(e)})):ee.likeCard(e._cardId).then((function(t){e.toggleLike(t)})).catch((function(e){return console.log(e)}))}(o)},handleDeleteClick:function(){return function(e){re.setFormSubmitHandler((function(){ee.deleteCard(e).then((function(){e.deleteCard(),re.close()})).catch((function(e){return console.log(e)}))})),re.open()}(o)}}),i=o.generateCard();n.addItem(i)}re.setEventListeners();var ie=new _({popupSelector:F});ie.setEventListeners();var ue=new j({popupSelector:V,formSubmitHandler:function(e){R(ue.popupSubmitButton,!0),ee.generateCard(e).then((function(e){oe(e,te,Y),ue.close()})).catch((function(e){return console.log(e)})).finally((function(){return R(ue.popupSubmitButton,!1)}))}});ue.setEventListeners(),T.addEventListener("click",(function(){se.resetForm(z),ue.open()}));var ce=new j({popupSelector:x,formSubmitHandler:function(e){R(ce.popupSubmitButton,!0),ee.updateInfo(e).then((function(e){Z.setUserInfo(e),ce.close()})).catch((function(e){return console.log(e)})).finally((function(){return R(ce.popupSubmitButton,!1)}))}});ce.setEventListeners(),A.addEventListener("click",(function(){fe.resetForm(N);var e=Z.getUserInfo();K.placeholder=e.name,Q.placeholder=e.about,ce.open()}));var le=new j({popupSelector:H,formSubmitHandler:function(e){R(le.popupSubmitButton,!0),ee.updateAvatar(e).then((function(e){Z.setUserInfo(e),le.close()})).catch((function(e){return console.log(e)})).finally((function(){return R(le.popupSubmitButton,!1)}))}});le.setEventListeners(),D.addEventListener("click",(function(){ae.resetForm(U);var e=Z.getUserInfo();$.src=e.avatar,le.open()})),Promise.all([ee.getCard(),ee.getInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z.setUserInfo(i),Y=i._id,te.renderItems(o)})).catch((function(e){return console.log(e)}));var ae=new r(W,U);ae.enableValidation();var se=new r(W,z);se.enableValidation();var fe=new r(W,N);fe.enableValidation()})();