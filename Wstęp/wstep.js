var day = document.querySelector(".day");

day.addEventListener('click', putDay);

function putDay() {
    var nameOfDay = prompt('Please put day, which you whish');
    day.textContent = 'Today is:' + nameOfDay;
}