const apiKey = "4dca84778eff4ae8e66e7cc29b12f1b4"

let cityName = document.querySelector('.name')
let desc = document.querySelector('.desc')
let temp = document.querySelector('.temp')

document.addEventListener('click', function(){
    let inputValue = document.getElementById('inputValue').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][1]['description'];

        cityName.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })
})



