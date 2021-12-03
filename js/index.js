document.addEventListener("DOMContentLoaded", ()=>{
    const apiKey = APIKEY
    let button = document.querySelector('#submit')
    let cityName = document.querySelector('.name')
    let desc = document.querySelector('.desc')
    let temp = document.querySelector('.temp')
    let windSpeed = document.querySelector('.windSpeed')
    let recom = document.querySelector('.recommendation')
    let clearBtn = document.querySelector('.clear')
    
    button.addEventListener('click', ()=>{
        let inputValue = document.getElementById('inputValue').value;
        if(inputValue.length == 0){
            alert("Missing City Name!")
        }
        else{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=imperial&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
            let nameValue = data['name'];
            let windSpeedValue = data['wind']['speed'];
            let tempValue = data['main']['temp'];
            let descValue = data['weather'][0]['description'];

            cityName.innerHTML = nameValue;
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
        }    
    })
    clearBtn.addEventListener('click', ()=>{
        document.getElementById('inputValue').value = '';
        cityName.innerHTML = null;
        windSpeed.innerHTML = null;
        temp.innerHTML = null;
        desc.innerHTML = null;
        recom.innerHTML = null;
    })
})








