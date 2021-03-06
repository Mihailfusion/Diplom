'use strict';

function forms(windowSettings) {
	
	const freeMasterForms = document.querySelectorAll('.main_form');
	freeMasterForms.forEach(form => {
		sendForm(form);
	});

	const popupForm = document.querySelector('.popup form');
	sendForm(popupForm);

	const popupEngineerForm = document.querySelector('.popup_engineer form');
	sendForm(popupEngineerForm);

	const popupCalcEndForms = document.querySelector('.popup_calc_end form');
	sendForm(popupCalcEndForms, windowSettings);

	function sendForm(form, object = null) {
		let statusMessage = document.createElement('div'),
			curentFormInputs = form.querySelectorAll('input');

		form.addEventListener('submit', event => {
			event.preventDefault();
			form.appendChild(statusMessage);
			let formData = new FormData(form);
			statusMessage.style.paddingBottom = '20px';
			postData(formData, object)
				.then(() => {
					statusMessage.style.color = 'green';
					statusMessage.innerHTML = "ЗАЯВКА ОТПРАВЛЕНА<br> Мы перезвоним Вам в течении 10 минут!";
				})
				.catch(() => {
					statusMessage.style.color = 'red';
					statusMessage.innerHTML = "ПРОИЗОШЛА ОШИБКА!<br>Попробуйте, пожалуйста, позже.";
				})
				.then(clearInput(curentFormInputs))
				.then(object = {});	
		});


	}
	function postData(data, object = null) {
		return new Promise(function (resolve, reject) {
			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader('Content-Type', 'aplication/json charset=utf-8');
			let json = formDataToJSON(data, object);
			request.onreadystatechange = () => {
				if (request.readyState == 4) {
					if (request.status == 200) {
						resolve();
					} else {
						reject();
					}
				}
			};
			request.send(json);
		});
	}
	function formDataToJSON(formData, object = null) {
		const obj = {};
		formData.forEach((value, key) => {
			obj[key] = value;
		});
		if (object) {
			return JSON.stringify(Object.assign(object, obj));
		} else {
			return JSON.stringify(obj);
		}

	}
	function clearInput(inputs) {
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].value = '';
		}
	}

}

module.exports = forms;