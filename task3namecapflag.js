let XMLHttprequest = require('xhr2')

let xhr = new XMLHttprequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all')

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)

     data.forEach(element => {
       console.log(element.name['common'])
    });
    
    data.forEach(element => {
        console.log(element.capital)
    });
    data.forEach(element => {
        console.log(element.flag)
    });

}
xhr.send();