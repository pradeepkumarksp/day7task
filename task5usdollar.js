let XMLHttprequest = require('xhr2');

let xhr = new XMLHttprequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)

    let currency = data.filter((element) => {
        for (let key in element.currencies) {
            if (element.currencies[key].code === 'USD') {
                return element
            }
        }
    })

    console.log(currency)

}
xhr.send();
