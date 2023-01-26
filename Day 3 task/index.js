 document.getElementById('btn').addEventListener('click', callApi);
const apiId = '8cddfc785be04a488b6134744232601';

function callApi(){
    var cname = document.getElementById('cname').value;
    alert(cname);

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiId}&q=${cname}&aqi=no`;
    console.log(url);
    alert("city is " + cname)
    alert(url)
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let output = `
            <div>
            <p style="color:black"> ${data.current.temp_c}<sup>oC</sup></p>
            <p> The Weather is ${data.current.condition.text} </p>
            <img src=${data.current.condition.icon}></img>
            </div>

        `;
        console.log('printind data', data);
        document.getElementById('output').innerHTML = output;


        }).catch((err) => console.log(err))
}