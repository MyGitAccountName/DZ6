let a, b;

function fCompare() {
    a = prompt("Введите первое число: ");
    b = prompt("Введите второе число: ");
    if (isNaN(+a) || isNaN(+b))
        alert("Ошибка в исходных данных!");
    else if ((+a) === (+b))
        alert("Числа равны");
    else
        alert("Большее число: " + (((+a) > (+b)) ? a : b));
}

function fExDiv() {
    a = prompt("Введите число: ");
    if (isNaN(+a))
        alert("Ошибка в исходных данных!");
    else
        alert("Число " + a + ((+a%5 === 0) ? '' : " не") + " кратно 5");
}

function fPlanet() {
    a = prompt("Название планеты: ");
    alert("Привет, " + (((a === "Земля") || (a === "земля")) ? "Землянин!" : "Инопланетянин!"));
}