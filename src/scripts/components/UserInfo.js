export class UserInfo {
  constructor({userNameSelector, userBioSelector, userPicSelector}){
    this._userName = userNameSelector;
    this._userBio = userBioSelector;
    this._userPic = userPicSelector;
  }

  getUserInfo() {
    const userInfo = {
      username: this._userName.textContent,
      job: this._userBio.textContent
    }
      return userInfo;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userBio.textContent = data.about;
    this._userPic.src = data.avatar;
  }
}
