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

// zmienne

let exampleOne = 5;

var examplefive = 'monday';

const exampleTwo = 'friday';

// funkcja ostrzegania

alert("hello Word in JavaScript");

// funkcja

function przyklad() {
    /*kod funkcji*/
}

// konkatenacja

var seven = 'this';

var ten = ' is a book'

var plusNumber = seven + ten;

console.log(plusNumber);

// operatory: + ; - ; * ; / ;itp.

// skróty operatorów

var example101 = 'word';

example101 += ' next';

// zamiast

example101 = example101 + ' next';

console.log(example101);

// operatory porównania

=== ścisła równość  5 === 2 + 3 //true
!== brak równości 5 !== 2 + 3 //false
< mniej niż  6 < 10 //true
> więcej niż 6 > 10 //false 