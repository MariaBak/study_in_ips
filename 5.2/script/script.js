window.onload = function () {
	ListenersButtonFeedback();
	ListenersButtonFeedbackClose();
	formCheck();
}

function goToHell() {
	document.getElementsByClassName('feedback_form')[0].style.top = '-100%';
	document.getElementsByClassName('background_form')[0].style.top = '-100%';
}

function ListenersButtonFeedback() {
	let blackFon = document.getElementsByClassName('background_form'),
		feedbackForm = document.getElementsByClassName('feedback_form'),
		heightScreen = document.documentElement.clientHeight;

	document.getElementById('writeMe').addEventListener
	(
		'click',
		function () {
			feedbackForm[0].style.top = (heightScreen - 903) / 2 + 'px';
			blackFon[0].style.top = '0';
			event.preventDefault();
		},
		false
	);
}

function ListenersButtonFeedbackClose() {
	let closeBackground = document.getElementsByClassName('background_form'),
		closeCross = document.getElementsByClassName('cross');

	closeBackground[0].addEventListener
		(
		'click',
		goToHell,
		false
		);

	closeCross[0].addEventListener
		(
		'click',
		goToHell,
		false
		);

}

function formCheck() {
	let inputText = document.getElementsByClassName('control');
	let button = document.getElementById('send');

	button.addEventListener(
		'click',
		check,
		false
	);

	for (let count = 0; count < 4;count++)
	{
		inputText[count].onblur = function () {
			if (!this.value) {
				this.style.border = '1px solid red';
			}
			else {
				this.style.border = '';
			}
		}
	
		inputText[count].onfocus = function () {
			this.style.border = '';
		}
	}

/* 	inputText[1].onblur = function () {
		if (!this.value) {
			this.style.border = '1px solid red';
		}
		else {
			this.style.border = '';
		}
	}

	inputText[1].onfocus = function () {
		this.style.border = '';
	}

	inputText[2].onblur = function () {
		if (!this.value) {
			this.style.border = '1px solid red';
		}
		else {
			this.style.border = '';
		}
	}

	inputText[2].onfocus = function () {
		this.style.border = '';
	}
 */
	function check() {
		let boolCount = 0;
		for (let count = 0; count < inputText.length; count++) {
			let text = inputText[count].value;

			if (text === '') {
				inputText[count].style.border = '1px solid red';
			}
			else {
				inputText[count].style.border = '';
				boolCount++;
			}
			event.preventDefault();
		}

		if (boolCount === 3) {
			let blackFon = document.getElementsByClassName('background_form'),
				feedbackForm = document.getElementsByClassName('feedback_form');
			goToHell();
		}
	}
}
/* фильмы */

let showFilm  = document.getElementById('allFilm');

showFilm.onclick = function allFilmShow() {
	let buttonFilm = document.getElementsByClassName('button_all_film');
	let newAddClass = document.getElementsByClassName('dota');
	let first = new createFilmBlock(firstImage, firstName, firstDescription),
    	second = new createFilmBlock(secondImage, secondName, secondDescription),
    	third = new createFilmBlock(thirdImage, thirdName, thirdDescription),
    	fourth = new createFilmBlock(fourthImage,fourthName,fourthDescription);
	
		buttonFilm[0].style.display = 'none';
		
		for (let countNew = 0; countNew < 4; )
		{
			newAddClass[countNew].classList.toggle('spec_class');
			countNew +=1;
		}
		return false;
	}

function createFilmBlock(src, name, description) 
{
	let findBlock = document.getElementsByClassName('all_flm');
    let newBlockFilm = document.createElement('div');
    let subBlockFilm = document.createElement('div');
    let subImage = document.createElement('img');
	let newName = document.createElement('span');
	let newDescription = document.createElement('p');
        
		newBlockFilm.classList.add('spec_class', 'block_sidebar_film_block', 'float_film', 'dota');
		subBlockFilm.classList.add('film_poster_four');
 		subImage.src = src;
	    newName.innerText = name;
    	newDescription.innerText = description;
    
    subBlockFilm.appendChild(subImage);
    newBlockFilm.appendChild(subBlockFilm);
    newBlockFilm.appendChild(newName);
    newBlockFilm.appendChild(newDescription);
    
    findBlock[0].appendChild(newBlockFilm);
   
}
let firstImage = 'image/1.jpg',
		secondImage = 'image/2.jpg',
		thirdImage = 'image/3.jpg',
		fourthImage = 'image/4.jpeg',

		firstName = 'Побег из шоушенка',
		secondName = 'Зеленая миля',
		thirdName = 'Леон',
		fourthName = 'Интерстеллар',

		firstDescription = 'Успешный банкир Энди Дюфрейн обвинен в убийстве собственной жены и ее любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решетки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, вооруженный живым умом и доброй душой, отказывается мириться с приговором судьбы и начинает разрабатывать невероятно дерзкий план своего освобождения.',
		secondDescription = 'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
		thirdDescription = 'Профессиональный убийца Леон, не знающий пощады и жалости, знакомится со своей очаровательной соседкой Матильдой, семью которой расстреливают полицейские, замешанные в торговле наркотиками. Благодаря этому знакомству он впервые испытывает чувство любви, но…',
		fourthDescription = 'Когда засуха приводит человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и переселить человечество на другую планету.';