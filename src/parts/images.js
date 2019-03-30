function images() {
  
let works = document.querySelectorAll('.works .row div');

	works.forEach((work) => {
	  work.addEventListener('click', (event) => {
	    event.preventDefault();

	    let popupImage = document.createElement('div');
	    let curentImage = document.createElement('img');
	    let curentImageHref = work.querySelector('a').getAttribute('href');

	    popupImage.classList.add('popup');
	    curentImage.setAttribute('src', curentImageHref);
	    popupImage.appendChild(curentImage);
	    document.body.appendChild(popupImage);
	    popupImage.style.display = 'flex';
	    popupImage.style.alignItems = 'center';
	    popupImage.style.justifyContent = 'center';

	    popupImage.addEventListener('click', (event) => {
	      if (event.target.classList.contains('popup')) {
	        popupImage.style.display = 'none';
	        document.body.removeChild(popupImage);
	      }
	    });
	  });
  });
}

module.exports = images;