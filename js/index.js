window.onload = function(){
    const apiKey = "4dca84778eff4ae8e66e7cc29b12f1b4"
    let button = document.querySelector('#submit')
    let cityName = document.querySelector('.name')
    let desc = document.querySelector('.desc')
    let temp = document.querySelector('.temp')
    let windSpeed = document.querySelector('.windSpeed')
    let recom = document.querySelector('.recommendation')

    button.addEventListener('click', ()=>{
        let inputValue = document.getElementById('inputValue').value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=imperial&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            let nameValue = data['name'];
            let windSpeedValue = data['wind']['speed'];
            let tempValue = data['main']['temp'];
            let descValue = data['weather'][0]['description'];
            const { icon } = data.weather[0];

            cityName.innerHTML = nameValue;
            //icon.innerHTML = data.weather[0];
            windSpeed.innerHTML = windSpeedValue+'mph';
            temp.innerHTML = tempValue+'&#x2109;';
            desc.innerHTML = descValue.toUpperCase();
            
            if(tempValue < 50 && tempValue >= 35){      
                recom.innerHTML = "I recommend you to wear a jacket!"
            }else if(tempValue < 35){
                recom.innerHTML = "It's freezing. Prepare a heavy coat!"
            }else if(tempValue >= 50 && tempValue < 70){
                recom.innerHTML = "It's getting warm. No coats needed!"
            }else if(tempValue >= 70){
                recom.innerHTML = "It's hot today! Wear T-shirts and shorts!"
            }
        })
    })
}






