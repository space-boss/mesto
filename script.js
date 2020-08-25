let editProfile = document.querySelector('.profile__edit-button');

editProfile.addEventListener('click', function () {
  let popup = document.querySelector('.popup');
  popup.classList.add('popup__opened');
})



let popupClosed = document.querySelector('.popup__close');

popupClosed.addEventListener('click', closePopup);

function closePopup () {
  let popup = document.querySelector('.popup');
  popup.classList.remove('popup__opened');
}



let formElement = document.querySelector('.popup__form');


function formSubmitHandler (evt) {

    var newName = document.getElementById('username').value;
    var newJob = document.getElementById("job").value;

    let userName = document.querySelector('.profile__title');
    let job = document.querySelector('.profile__subtitle');

    userName.textContent = newName;
    job.textContent = newJob;

    console.log(newName);
    console.log(newJob);

    closePopup ();


    evt.preventDefault();

}


formElement.addEventListener('submit', formSubmitHandler);
