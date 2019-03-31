function timePopup() {

  let
    popup = document.getElementsByClassName('popup')[0],
    close = document.getElementsByClassName('popup_close')[0],
    phonelink = document.getElementsByClassName('phone_link')[0],
    phonelink1 = document.getElementsByClassName('phone_link')[1];


  phonelink.addEventListener('click', function (e) {
     e.preventDefault();
    popup.style.display = 'flex';
  }, false);
  phonelink1.addEventListener('click', function (e) {
     e.preventDefault();
    popup.style.display = 'flex';
  }, false);
  close.addEventListener('click', function () {
    popup.style.display = 'none';
  });
  popup.addEventListener('click', (event) => {
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  });

  setTimeout(() => {
    popup.style.display = 'flex';
  }, 60000);

}

module.exports = timePopup;