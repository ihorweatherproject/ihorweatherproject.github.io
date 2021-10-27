
//Запит типу Ajax для отримання та відображення початкових поточних даних погоди по місту Івано-Франківськ
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        if (xhr.status === 200) {
            const dataJson = xhr.responseText;
            const dataObject = JSON.parse(dataJson);
                const temperatureCurrent = Math.round(dataObject.main.temp - 273.15);
                const pressureCurrent  = dataObject.main.pressure;
                const cloudCurrent  = dataObject.clouds.all;
                const windCurrent  = Math.round(dataObject.wind.speed*10)/10;
                const humidityCurrent  = dataObject.main.humidity;
                const idIconCurrent = dataObject.weather[0].icon;
                    console.log(dataObject);
                        let temperatureToChange = document.getElementById("span-1");
                        let pressureToChange = document.getElementById("span-2");
                        pressureToChange.innerHTML = pressureCurrent;
                        let cloudToChange = document.getElementById("span-3");
                        cloudToChange.innerHTML = cloudCurrent;
                        let windToChange = document.getElementById("span-4");
                        windToChange.innerHTML = windCurrent;
                        let humidityToChange = document.getElementById("span-5");
                        humidityToChange.innerHTML = humidityCurrent; 
                        let span6 = document.getElementById("span-6");
                        if (temperatureCurrent>0) {
                            temperatureToChange.innerHTML = "&#43;"+temperatureCurrent;
                            span6.innerHTML = "&#43;"+temperatureCurrent;
                        } else {
                            temperatureToChange.innerHTML = temperatureCurrent;
                            span6.innerHTML = temperatureCurrent;
                        }     
                        let dataNow = myData ();
                        let dataToChange = document.getElementById("span-0");
                        dataToChange.innerHTML = dataNow;   

                iconCurrent(idIconCurrent);
                       
        } else {
            console.log(xhr.statusText);
        }
    } 
}; 
let refInput = document.getElementById("inputCity");
let cityName = refInput.value;

xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=4f625b6c6693cf0b7d4d66e65cd65a7d");
xhr.send();
//Закінчення запиту типу Ajax для отримання початкових поточних даних погоди по місту Івано-Франківськ

//функція weatherCurrent. Створення елементу div порожнього та стилізованого для даних поточної погоди 
function weatherCurrent(data,temperatureCurrent,pressureCurrent,cloudCurrent,windCurrent,humidityCurrent) {
    const refDivContainer = document.getElementById("container");
    const refDiv = document.createElement("div");
    const div = refDivContainer.appendChild(refDiv);
    div.style.width = "35%";
    div.style.height = "250px";
    div.style.border = "5px solid rgb(52, 152, 219)";
    div.style.borderRadius = "20px";
    div.style.textAlign = "center";
    div.style.backdropFilter = "blur(2px)";
        let refH3 = document.createElement("h3");
        let h3 = div.appendChild(refH3);
        h3.innerHTML = "<span></span>";
        let span0 = h3.lastElementChild;
        span0.style.color = "rgb(52, 152, 219)";
        span0.style.fontWeight = "bold";
        span0.style.fontSize = "large";
        span0.textContent = data;
            let refP1 = document.createElement("p");
            let p1 = div.appendChild(refP1);
            p1.innerHTML = "Temperature&nbsp;&nbsp;<span></span>&nbsp;&deg;C"
            p1.style.color = "rgb(255, 205, 2)";
            p1.style.fontWeight = "bold";
            p1.style.fontSize = "large";
            let span1 = p1.lastElementChild;
            if (temperatureCurrent>0) {
                span1.innerHTML = "&#43;"+temperatureCurrent;
            } else {
                span1.innerHTML = temperatureCurrent;
            } 
                let refP2 = document.createElement("p");
                let p2 = div.appendChild(refP2);
                p2.innerHTML = "Pressure&nbsp;&nbsp;<span></span>&nbsp;mm Hh"
                p2.style.color = "rgb(255, 205, 2)";
                p2.style.fontWeight = "bold";
                p2.style.fontSize = "large";
                let span2 = p2.lastElementChild;
                span2.textContent = pressureCurrent;
                    let refP3 = document.createElement("p");
                    let p3 = div.appendChild(refP3);
                    p3.innerHTML = "Clouds&nbsp;&nbsp;<span></span>&nbsp;%"
                    p3.style.color = "rgb(255, 205, 2)";
                    p3.style.fontWeight = "bold";
                    p3.style.fontSize = "large";
                    let span3 = p3.lastElementChild;
                    span3.textContent = cloudCurrent;
                        let refP4 = document.createElement("p");
                        let p4 = div.appendChild(refP4);
                        p4.innerHTML = "Wind&nbsp;&nbsp;<span></span>&nbsp;m/s"
                        p4.style.color = "rgb(255, 205, 2)";
                        p4.style.fontWeight = "bold";
                        p4.style.fontSize = "large";
                        let span4 = p4.lastElementChild;
                        span4.textContent = windCurrent;
                            let refP5 = document.createElement("p");
                            let p5 = div.appendChild(refP5);
                            p5.innerHTML = "Humidity&nbsp;&nbsp;<span></span>&nbsp;%"
                            p5.style.color = "rgb(255, 205, 2)";
                            p5.style.fontWeight = "bold";
                            p5.style.fontSize = "large";
                            let span5 = p5.lastElementChild;
                            span5.textContent = humidityCurrent;
}
//Закінчення функції weatherCurrent.

//початок події  todayClick при кліку на "today"      
let todayClick = document.getElementById("today");
todayClick.addEventListener("click", () => { 
    let refDivContainer = document.getElementById("container");
    refDivContainer.innerHTML = "";

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        if (xhr.status === 200) {    
            const dataJson = xhr.responseText;
            const dataObject = JSON.parse(dataJson);
            console.log(dataObject);    
                const temperatureCurrent = Math.round(dataObject.main.temp - 273.15);
                const pressureCurrent  = dataObject.main.pressure;
                const cloudCurrent  = dataObject.clouds.all;
                const windCurrent  = Math.round(dataObject.wind.speed*10)/10;
                const humidityCurrent  = dataObject.main.humidity;
                const idIconCurrent = dataObject.weather[0].icon;
                let span6 = document.getElementById("span-6");
                if (temperatureCurrent>0) {
                    span6.innerHTML = "&#43;"+temperatureCurrent;
                } else {
                    span6.innerHTML = temperatureCurrent;
                }
                let dataNow = myData ();

                iconCurrent(idIconCurrent);

                weatherCurrent(dataNow,temperatureCurrent,pressureCurrent,cloudCurrent,windCurrent,humidityCurrent)
    
                } else {
                    console.log(xhr.statusText);
                }
        } 
    };
let refInput = document.getElementById("inputCity");
let cityName = refInput.value;

let refCity = document.getElementById("h-1");
refCity.textContent = refInput.value;
   
xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=4f625b6c6693cf0b7d4d66e65cd65a7d");
xhr.send();
});
//завершення події  todayClick

//функція weatherThreeHours. Створення елементу div(одного з масиву) порожнього та стилізованого для даних погоди на 3 години
function weatherThreeHours(dataCurrent,temperatureCurrent,pressureCurrent,cloudCurrent,windCurrent,humidityCurrent) {
    const refDivContainer = document.getElementById("container");
    const refDiv = document.createElement("div");
    const div = refDivContainer.appendChild(refDiv);
    div.style.width = "35%";
    div.style.height = "250px";
    div.style.border = "5px solid rgb(52, 152, 219)";
    div.style.borderRadius = "20px";
    div.style.textAlign = "center";
    div.style.backdropFilter = "blur(2px)";
        let refH3 = document.createElement("h3");
        let h3 = div.appendChild(refH3);
        h3.innerHTML = "<span></span>";
        let span0 = h3.lastElementChild;
        span0.style.color = "rgb(52, 152, 219)";
        span0.style.fontWeight = "bold";
        span0.style.fontSize = "large";
        span0.textContent = dataCurrent;
            let refP1 = document.createElement("p");
            let p1 = div.appendChild(refP1);
            p1.innerHTML = "Temperature&nbsp;&nbsp;<span></span>&nbsp;&deg;C"
            p1.style.color = "rgb(255, 205, 2)";
            p1.style.fontWeight = "bold";
            p1.style.fontSize = "large";
            let span1 = p1.lastElementChild;
            if (temperatureCurrent>0) {
                span1.innerHTML = "&#43;"+temperatureCurrent;
            } else {
                span1.innerHTML = temperatureCurrent;
            } 
                let refP2 = document.createElement("p");
                let p2 = div.appendChild(refP2);
                p2.innerHTML = "Pressure&nbsp;&nbsp;<span></span>&nbsp;mm Hh"
                p2.style.color = "rgb(255, 205, 2)";
                p2.style.fontWeight = "bold";
                p2.style.fontSize = "large";
                let span2 = p2.lastElementChild;
                span2.textContent = pressureCurrent;
                    let refP3 = document.createElement("p");
                    let p3 = div.appendChild(refP3);
                    p3.innerHTML = "Clouds&nbsp;&nbsp;<span></span>&nbsp;%"
                    p3.style.color = "rgb(255, 205, 2)";
                    p3.style.fontWeight = "bold";
                    p3.style.fontSize = "large";
                    let span3 = p3.lastElementChild;
                    span3.textContent = cloudCurrent;
                        let refP4 = document.createElement("p");
                        let p4 = div.appendChild(refP4);
                        p4.innerHTML = "Wind&nbsp;&nbsp;<span></span>&nbsp;m/s"
                        p4.style.color = "rgb(255, 205, 2)";
                        p4.style.fontWeight = "bold";
                        p4.style.fontSize = "large";
                        let span4 = p4.lastElementChild;
                        span4.textContent = windCurrent;
                            let refP5 = document.createElement("p");
                            let p5 = div.appendChild(refP5);
                            p5.innerHTML = "Humidity&nbsp;&nbsp;<span></span>&nbsp;%"
                            p5.style.color = "rgb(255, 205, 2)";
                            p5.style.fontWeight = "bold";
                            p5.style.fontSize = "large";
                            let span5 = p5.lastElementChild;
                            span5.textContent = humidityCurrent;
};
//Закінчення функції weatherThreeHours для даних погоди на 3 години

//початок події  fiveDaysClick при кліку на "FIVE DAYS" - відображення погоди на 5 днів
let fiveDaysClick = document.getElementById("five-days");
fiveDaysClick.addEventListener("click", () => {  
    console.log("ok");
    let refDivContainer = document.getElementById("container");
    refDivContainer.innerHTML = "";
        const fiveDays = new XMLHttpRequest();
        fiveDays.onreadystatechange = function () {
        if(fiveDays.readyState === 4) {
            if (fiveDays.status === 200) {
                const dataJson = fiveDays.responseText;
                const dataObject = JSON.parse(dataJson);
                console.log(dataObject);
                for(let i=0; i<dataObject.list.length; i++) {
                    const temperatureCurrent = Math.round(dataObject.list[i].main.temp - 273.15); 
                    const pressureCurrent  = dataObject.list[i].main.pressure;
                    const humidityCurrent  = dataObject.list[i].main.humidity;
                    const cloudCurrent  = dataObject.list[i].clouds.all;
                    const windCurrent  = Math.round(dataObject.list[i].wind.speed*10)/10;
                    const dataCurrentNoYet = dataObject.list[i].dt_txt;
                    const dataCurrentNo = dataCurrentNoYet.substr(0,16);
                    const dataCurrent = [dataCurrentNo.slice(0, 10), dataCurrentNo.slice(10)].join("   ");
                    const idIconCurrent = dataObject.list[0].weather[0].icon;

                    let span6 = document.getElementById("span-6");
                    let tempCurrent = Math.round(dataObject.list[0].main.temp - 273.15);
                    if (tempCurrent>0) {
                        span6.innerHTML = "&#43;"+tempCurrent;
                    } else {
                        span6.innerHTML = tempCurrent;
                    } 

                    iconCurrent(idIconCurrent);
                   
                    weatherThreeHours(dataCurrent,temperatureCurrent,pressureCurrent,cloudCurrent,windCurrent,humidityCurrent)     
                }
            } else {
                console.log(fiveDays.statusText);
        }
    } 
};
let refInput = document.getElementById("inputCity");
let cityName = refInput.value;

let refCity = document.getElementById("h-1");
refCity.textContent = refInput.value;

fiveDays.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid=4f625b6c6693cf0b7d4d66e65cd65a7d");
fiveDays.send();
});
//Закінчення події  fiveDaysClick при кліку на "FIVE DAYS" - відображення погоди на 5 днів


function myData () {
    Data = new Date();
    let year = Data.getFullYear();
    let month = Data.getMonth() + 1;
    let day = Data.getDate();
    let dataNow = year + "-" + month + "-"+day;
    return dataNow;
};
let currentData = document.getElementById("h-0");
currentData.innerHTML = myData ();

 function iconCurrent(idIconCurrent) {
    let refImage = document.getElementById("h-2");
    if (idIconCurrent=="01n") {refImage.innerHTML = "<img src=\"image/01n.png\">"} 
    else if(idIconCurrent=="01d") {refImage.innerHTML = "<img src=\"image/01d.png\">"}
    else if(idIconCurrent=="02d") {refImage.innerHTML = "<img src=\"image/02d.png\">"}
    else if(idIconCurrent=="02n") {refImage.innerHTML = "<img src=\"image/02n.png\">"}
    else if(idIconCurrent=="03d" || idIconCurrent=="03n" || idIconCurrent=="04d" || idIconCurrent=="04n") 
    {refImage.innerHTML = "<img src=\"image/03d.png\">"}
    else if(idIconCurrent=="09n" || idIconCurrent=="09d") {refImage.innerHTML = "<img src=\"image/09n.png\">"}
    else if(idIconCurrent=="10n" || idIconCurrent=="10d") {refImage.innerHTML = "<img src=\"image/10n.png\">"}
    else if(idIconCurrent=="11n" || idIconCurrent=="11d") {refImage.innerHTML = "<img src=\"image/11n.png\">"}
    else if(idIconCurrent=="13n" || idIconCurrent=="13d") {refImage.innerHTML = "<img src=\"image/13n.png\">"}
    else if(idIconCurrent=="50n" || idIconCurrent=="50d") {refImage.innerHTML = "<img src=\"image/50n.png\">"}
}

