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