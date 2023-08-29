let XMLHttprequest = require('xhr2');

let xhr = new XMLHttprequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)

    let pop = data.filter((element) => {
        return element.population <200000
    })

    console.log(pop)

}
xhr.send();