window.addEventListener('DOMContentLoaded', function (event) {
    let b = document.getElementById("button1");
    b.addEventListener("click", click1); // Исправлено: вызываем click1 напрямую
});

function click1() {
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let re = /\D/; // Регулярное выражение для поиска нечисловых символов

    if ((f1[0].value.match(re) || f2[0].value.match(re)) !== null) {
        alert("Ошибка! Неверный формат чисел.");
    } else {
        // Если оба поля содержат правильные числа, вычисляем результат
        document.getElementById("answer").value = f1[0].value * f2[0].value;
    }
    return false; // Чтобы форма не отправлялась (если это форма)
}
