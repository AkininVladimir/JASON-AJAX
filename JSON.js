// JSON формат передачи данных для обмена с сервером
// это файл состоящий из объекта со свойствами ключ-значение.

let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size:'16px',
        color: '#ffff'
    }  
};

console.log(JSON.stringify(options)); /* Для конвертирования данных в JSON не обходимо использовать встроеный одноименный объект и взять метод stingify  */

console.log(JSON.parse(JSON.stringify(options)));/* для расшифровки JSON формата в основном клиенкая часть так общается с сервером*/


let inputRub = document.getElementById('input');
let inputUsd = document.getElementById('input');

inputRub.addEventListener ('input', => {
    let request = new XMLHttpRequest ();
   /*  request.open(method, url, async, log, pass); */ /* open метод отвечающий за настройку  */
    request.open ('GET', 'Jason_Ajax/current.json', );
    request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');
    request.send();
// http запросы

    // status - код отвечающий в каком состоянии сейчас находится сервер
    //statusText - текстовое описание ответа от сервера 
    // responseText/response - ответ backend разрабтчика на ваш запрос
    // readyState - текущее сосотояние запроса 

    request.addEventListener ('readystatechange', function () {
        if (request.readyState === 4 && request.status == 200) {
            let data = JASON.parse (request.response);
            inputUsd.value - inputRub.value / data.usd;

        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
        
    });

});

