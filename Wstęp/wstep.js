var day = document.querySelector(".day");

day.addEventListener('click', putDay);

function putDay() {
    var nameOfDay = prompt('Please put day, which you whish');
    day.textContent = 'Today is:' + nameOfDay;
}

// tworzenie paragrafu

function stworzParagraf() {
    var para = document.createElement('p');
    para.textContent = 'Kliknąłeś przycisk';
    document.body.appendChild(para);
}

var przyciski = document.querySelectorAll('button');

for (var i = 0; i < przyciski.length; i++) {
    przyciski[i].addEventListener('click', stworzParagraf);
}

// funkcja ostrzegania

alert("hello Word in JavaScript");