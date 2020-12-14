export class UserInfo {
  constructor({userNameSelector, userBioSelector}){
    this._userName = userNameSelector;
    this._userBio = userBioSelector;
  }

  getUserInfo() {
    const userInfo = {
      username: this._userName.textContent,
      job: this._userBio.textContent
    }
      return userInfo;
  }

  setUserInfo() {
    this._userName.textContent = document.querySelector('.popup__input-field_value_name').value;
    this._userBio.textContent = document.querySelector('.popup__input-field_value_job').value;
  }
}
