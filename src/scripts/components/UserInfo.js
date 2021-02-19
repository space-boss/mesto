export class UserInfo {
  constructor({userNameSelector, userBioSelector, userPicSelector}){
    this._userName = userNameSelector;
    this._userBio = userBioSelector;
    this._userPic = userPicSelector;
  }

  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      about: this._userBio.textContent
    }
    return userInfo;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userBio.textContent = data.about;
    this._userPic.src = data.avatar;
    this.myId = data._id;
  }

  getUserId() {
    return this.myId;
  }
}
 
