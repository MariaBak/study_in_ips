
let showFilm  = document.getElementById('allFilm');

showFilm.onclick = function allFilmShow() {
    let first = new createFilmBlock(firstImage, firstName, firstDescription),
    second = new createFilmBlock(secondImage, secondName, secondDescription),
    third = new createFilmBlock(thirdImage, thirdName, thirdDescription),
    fourth = new createFilmBlock(fourthImage,fourthName,fourthDescription);
    return false;
    
}

function createFilmBlock(src, name, description) {
    let findBlock = document.getElementsByClassName('all_flm');
    
    let newBlockFilm = document.createElement('div');
    newBlockFilm.classList.add('spec_class');
    
    let subBlockFilm = document.createElement('div');
    subBlockFilm.classList.add('film_poster_four')
    let subImage = document.createElement('img');
    subImage.src = src;
    
    let newName = document.createElement('span');
    newName.innerText = name;
    
    let newDescription = document.createElement('p');
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
fourthName = ' 	Интерстеллар',

firstDescription = 'Успешный банкир Энди Дюфрейн обвинен в убийстве собственной жены и ее любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решетки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, вооруженный живым умом и доброй душой, отказывается мириться с приговором судьбы и начинает разрабатывать невероятно дерзкий план своего освобождения.',
secondDescription = 'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
thirdDescription = 'Профессиональный убийца Леон, не знающий пощады и жалости, знакомится со своей очаровательной соседкой Матильдой, семью которой расстреливают полицейские, замешанные в торговле наркотиками. Благодаря этому знакомству он впервые испытывает чувство любви, но…',
fourthDescription = 'Когда засуха приводит человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и переселить человечество на другую планету.';