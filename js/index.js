window.onload = function(){
    const apiKey = "4dca84778eff4ae8e66e7cc29b12f1b4"
    let button = document.querySelector('#submit')
    let cityName = document.querySelector('.name')
    let desc = document.querySelector('.desc')
    let temp = document.querySelector('.temp')


    button.addEventListener('click', ()=>{
        let inputValue = document.getElementById('inputValue').value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=imperial&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            let nameValue = data['name'];
            let tempValue = data['main']['temp'];
            let descValue = data['weather'][0]['description'];
    
            cityName.innerHTML = nameValue;
            temp.innerHTML = tempValue+'&#x2109;';
            desc.innerHTML = descValue.toUpperCase();
        })

        
    })
}






