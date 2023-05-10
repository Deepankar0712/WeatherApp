let loc = document.getElementById('location');
let iconImg = document.getElementById("img_icon");
let temperature = document.getElementById('tempc');
let cimate = document.getElementById('climate');
let iconfile;
const inputCity = document.getElementById('city-input');
const bttn = document.getElementById('btn'); 
var city_name;
const api_key = '420addbccc9e891049f82fbaf5fccd66';
bttn.addEventListener('click', d =>{
    d.preventDefault();
    apicall();
});
function apicall() {
    city_name = inputCity.value;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`;
    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const {name} = data;
        const {temp} = data.main;
        const {id, main} = data.weather[0];
        const {icon} = data.weather[0];
        loc.textContent = name;
        climate.innerHTML = main;
        tempc.innerHTML = Math.round(temp);
        if(id>200 && id<300){
            iconImg.src = "./img/storm.png";
        }
        if(id>300 && id<400){
            iconImg.src = "./img/drizzle.png";
        }
        if(id>500 && id<600){
            iconImg.src = "./img/rain.png";
        }
        if(id>600 && id<700){
            iconImg.src = "./img/snow.png";
        }
        if(id>700 && id<800){
            iconImg.src = "./img/cloudy.png";
        }
        if(id==800){
            iconImg.src = "./img/clear.png";
        }
        if(id>800){
            iconImg.src = "./img/clouds.png";
        }
        console.log(data)
    })
    .catch(err => {
        alert("City not found!!")
        console.log("request failed: ", err);
    });
}
window.addEventListener('load', ()=>{
    let lat;
    let long;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            lat = position.coords.latitude;
            long = position.coords.longitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {name} = data;
                const {feels_like} = data.main;
                const {id, main} = data.weather[0];
                const {icon} = data.weather[0];
                loc.textContent = name;
                climate.innerHTML = main;
                tempc.innerHTML = Math.round(feels_like);
                if(id>200 && id<300){
                    iconImg.src = "./img/storm.png";
                }
                if(id>300 && id<400){
                    iconImg.src = "./img/drizzle.png";
                }
                if(id>500 && id<600){
                    iconImg.src = "./img/rain.png";
                }
                if(id>600 && id<700){
                    iconImg.src = "./img/snow.png";
                }
                if(id>700 && id<800){
                    iconImg.src = "./img/cloudy.png";
                }
                if(id==800){
                    iconImg.src = "./img/clear.png";
                }
                if(id>800){
                    iconImg.src = "./img/clouds.png";
                }
                console.log(data)
            })
            .catch(err => {
                alert("City not found!!")
                console.log("request failed: ", err);
            });
        })
    }
})
