let XMLHttprequest = require("xhr2");

let xhr = new XMLHttprequest();

xhr.open("GET", 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    
   let countries = data.filter((countries) => {
        return countries.region === 'Asia'
    })
    console.log(countries)
}
xhr.send();