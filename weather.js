console.log("Its working fine. hope youre doing great!!!");

let inpt = document.getElementById("inpt");
let sub = document.getElementById("sub");
let container = document.getElementById("container");
let apiKey = 'd85c5522c359859152207c0898f43695';
// console.log(sub)

sub.addEventListener('click', ()=>{


const xhr = new XMLHttpRequest();

xhr.open( 'GET' , `https://api.openweathermap.org/data/2.5/weather?q=${inpt.value}&appid=${apiKey}`, true);
xhr.getResponseHeader('content-type', 'application/json');

xhr.onload = function() {
    
    if(this.status === 200)
    {
        // console.log(this.responseText);
        let json = JSON.parse(this.responseText);
        // console.log(json);
        html = ``;
        // for(let elem in json)
        // {
            // console.log(elem)
            let h = `<h3>Weather</h3>
            <ul>
                <li>CITY - ${json["name"]}, ${json["sys"]['country']}</li>
                <li>It going to be&nbsp;${json['weather'][0]['description']} climate.</li>
                <li>Cloudiness : ${json['clouds']['all']} %</li>
                <li>Temperature : ${(json['main']['temp'] - 273.15).toFixed(2)} °C , Min Temp : ${(json['main']['temp_min'] - 273.15).toFixed(2)} °C / Max Temp : ${(json['main']['temp_max'] - 273.15).toFixed(2)} °C </li>
                <li>Pressure : ${json['main']['pressure']} atm </li>
                <li>Humidity : ${json['main']['humidity']} %</li>
            </ul>`
            html = h;
        // }

        container.innerHTML = html;

    }else{
        console.log("error");
        alert (`City naming ${inpt.value} is not Registered.`);
    }
}

xhr.send();

});
