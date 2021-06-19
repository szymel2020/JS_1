var day = document.querySelector('p');

day.addEventListener('click', putDay);

function putDay() {
    var nameOfDay = prompt('Please put day, which you whish');
    day.textContent = 'Today is:' + nameOfDay;
}

// tworzenie paragrafu

function stworzParagraf() {
    var para = document.createElement('p');
    para.textContent = 'Kliknąłeś przycisk';
    para.style.backgroundColor = 'blue';
    
    document.body.appendChild(para);
}

var przyciski = document.querySelectorAll('button');

for (var i = 0; i < przyciski.length; i++) {
    przyciski[i].addEventListener('click', stworzParagraf);
}

// zmienne

/* let exampleOne = 5;

var examplefive = 'monday';

const exampleTwo = 'friday'; */

// funkcja ostrzegania

//alert("hello Word in JavaScript");

// funkcja


// konkatenacja

/* var seven = 'this';

var ten = ' is a book'

var plusNumber = seven + ten;

console.log(plusNumber); */

// operatory: + ; - ; * ; / ;itp.

// skróty operatorów

/* var example101 = 'word';

example101 += ' next'; */

// zamiast

/* example101 = example101 + ' next';

console.log(example101); */

// operatory porównania

/* === ścisła równość  5 === 2 + 3 //true
!== brak równości 5 !== 2 + 3 //false
< mniej niż  6 < 10 //true
    > więcej niż 6 > 10 //false 

document.write(3); */



// detektor zdarzenia

//guessSubmit.addEventListener('clik', checkGuess);

/* for (let i = 1; i < 21; i+2)
    console.log(i); */

    // if - instrukcja warunkowa

/* let myNum = 5;
if (myNum > 6) {
        document.write(" equal to 6")
} else {
    document.write("myNum equal to 5");
}; */

// if

/* var myAge = 19;

if (myAge > 30) {

    document.write("you are over 30")
} else if (myAge > 20) {

    document.write("you are over 20") 
} else if (myAge > 10) {

    document.write("you are not over 10")
} */

// operatory logiczne

/* var myAge = 15;

if (myAge >= 18 && myAge <= 30) {
    document.write("you can come, you cool dude");
} else {
    document.write("you aint coming");
} */

// pętla while

/* var agee = 4;

while (agee < 8) {
    document.write("your age is less than 8");
    agee++;
}
document.write("pętla"); */

// pętla for

for (i = 0; i < 10; i++) {
    console.log(i);

    if (i === 7) {
        break;
    }
}
console.log("i break loop");






