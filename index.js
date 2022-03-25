
//select a city
function selectedCity(element) {
    alert(`Loading ${element.innerHTML} weather report...`);
    let current = document.querySelector("#current-city");
    let selected_city = element.innerHTML;
    element.innerHTML = current.innerHTML;
    current.innerHTML = selected_city;

}

//accept cookie
function acceptCookie() {
    let cookie = document.querySelector("#cookie");
    cookie.remove();
}

//change in degree
let high = document.querySelectorAll("#degree #high span");
let low = document.querySelectorAll("#degree #low span");
function chooseDegree(element) {
    if(element.value == "f") {
        for(let i = 0; i < high.length; i++) {
            high[i].innerHTML = Math.round((high[i].innerHTML * (9/5)) + 32);
            low[i].innerHTML = Math.round((low[i].innerHTML * (9/5)) + 32);
        }
    }
    if(element.value == "c") {
        for(let i = 0; i < high.length; i++) {
            high[i].innerHTML = Math.round((high[i].innerHTML - 32) * (5/9));
            low[i].innerHTML = Math.round((low[i].innerHTML - 32) * (5/9));
        }
    }
}