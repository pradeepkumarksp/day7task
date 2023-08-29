let XMLHttprequest = require('xhr2');

let xhr = new XMLHttprequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all')

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)

    let total = data.reduce((previous, current) => {
        return previous + current.population
    }, 0);
        console.log(total)
}

xhr.send();

