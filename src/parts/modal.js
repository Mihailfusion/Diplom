function modal() {

  let btn = document.getElementsByClassName('popup_engineer_btn')[0],
      popup = document.getElementsByClassName('popup_engineer')[0],
      close = document.getElementsByClassName('popup_close')[1];
 
      btn.addEventListener('click', function (){
        popup.style.display = 'flex';
      } );

      close.addEventListener('click', function () {
        popup.style.display = 'none';     
      });
      popup.addEventListener('click', (event) => {
       if (event.target == popup) {
         popup.style.display = 'none';
       }     
      });
      
}

module.exports = modal;