export class UserInfo {
  constructor({userNameSelector, userBioSelector, userPicSelector}){
    this._userName = userNameSelector;
    this._userBio = userBioSelector;
    this._userPic = userPicSelector;
  }

  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      about: this._userBio.textContent,
      avatar: this._userPic.src
    }
    return userInfo;
  }

  setUserInfo(data) {
    if (data.name) {
      this._userName.textContent = data.name;
    }
    if (data.about) {
      this._userBio.textContent = data.about;
    }
    if (data.avatar) {
      this._userPic.src = data.avatar;
    }
    if (data._id) {
      this.myId = data._id;
    }
  }

  getUserId() {
    return this.myId;
  }
}
 
