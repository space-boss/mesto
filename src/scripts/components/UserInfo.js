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

  setUserInfo(data) {
    this._userName.textContent = data.username;
    this._userBio.textContent = data.job;
  }
}
